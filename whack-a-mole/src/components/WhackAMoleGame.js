'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const WhackAMoleGame = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [mouseMovements, setMouseMovements] = useState([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const gameRef = useRef(null);
  const gameInitializedRef = useRef(false);

  useEffect(() => {
    if (gameInitializedRef.current || gameRef.current) {
      return;
    }

    const initPhaser = async () => {
      const Phaser = (await import('phaser')).default;
      
      gameInitializedRef.current = true;

      class GameScene extends Phaser.Scene {
        constructor() {
          super({ key: 'GameScene' });
          // Keep score in memory but don't display it
          this.score = 0;
          this.moles = [];
          this.mouseMovements = [];
          this.mouseLastPos = { x: 0, y: 0 };
          this.mouseStartTime = Date.now();
          this.startTime = Date.now();
        }

        preload() {
          this.load.image('hole-back', '/hole-back.png');
          this.load.image('hole-front', '/hole-front.png');
          this.load.image('mole', '/mole.png');
          this.load.image('friendly-mole', '/mole-headband.png');
          this.load.image('mallet', '/mallet.png');
          this.load.image('mallet-hit', '/mallet-hit.png');
        }

        create() {
          this.input.on('pointermove', this.trackMouseMovement, this);

          if (!startTime) {
            setStartTime(Date.now());
          }

          const positions = [
            { x: 100, y: 100 }, { x: 200, y: 100 }, { x: 300, y: 100 },
            { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 300, y: 200 },
            { x: 100, y: 300 }, { x: 200, y: 300 }, { x: 300, y: 300 },
          ];

          positions.forEach(pos => {
            const holeBack = this.add.image(pos.x, pos.y, 'hole-back')
              .setScale(0.5)
              .setDepth(0);

            // Create both types of moles
            const mole = this.add.image(pos.x, pos.y, 'mole')
              .setScale(0.5)
              .setDepth(1)
              .setInteractive()
              .setVisible(false);

            const friendlyMole = this.add.image(pos.x, pos.y, 'friendly-mole')
              .setScale(0.5)
              .setDepth(1)
              .setInteractive()
              .setVisible(false);

            const holeFront = this.add.image(pos.x, pos.y, 'hole-front')
              .setScale(0.5)
              .setDepth(2);

            // Set up positions for both moles
            [mole, friendlyMole].forEach(m => {
              m.baseY = pos.y - 30;
              m.hideY = pos.y + 30;
              m.showY = pos.y;
              m.y = m.hideY;
            });

            mole.isFriendly = false;
            friendlyMole.isFriendly = true;

            mole.on('pointerdown', () => this.hitMole(mole));
            friendlyMole.on('pointerdown', () => this.hitMole(friendlyMole));

            this.moles.push(mole, friendlyMole);
          });

          this.time.addEvent({
            delay: 1000,
            callback: this.spawnMole,
            callbackScope: this,
            loop: true
          });

            // Hide the default cursor
            this.input.setDefaultCursor('none');

            // Create both mallet sprites but only show the regular one
            this.mallet = this.add.image(0, 0, 'mallet')
            .setOrigin(1, 1)
            .setDepth(1000)
            .setScale(0.5);

            this.malletHit = this.add.image(0, 0, 'mallet-hit')
            .setOrigin(1, 1)
            .setDepth(1000)
            .setScale(0.5)
            .setVisible(false);

            // Get mallet dimensions for offset
            const malletWidth = this.mallet.displayWidth;
            const malletHeight = this.mallet.displayHeight;

            // Update both mallets position
            this.input.on('pointermove', (pointer) => {
            this.mallet.x = pointer.x + malletWidth;
            this.mallet.y = pointer.y + malletHeight/2;
            this.malletHit.x = pointer.x + malletWidth;
            this.malletHit.y = pointer.y + malletHeight/2;
            });

            // Add click animation with hit effect
            this.input.on('pointerdown', (pointer) => {
            const hitMole = this.checkMoleHit(pointer);

            this.tweens.add({
            targets: [this.mallet, this.malletHit],
            angle: -45,
            duration: 100,
            ease: 'Back.easeOut',
            yoyo: true,
            onUpdate: (tween) => {
                // Show hit variation at the end of the swing (around 90% of the animation)
                if (hitMole && tween.progress > 0.9 && tween.progress < 0.95) {
                this.mallet.setVisible(false);
                this.malletHit.setVisible(true);
                }
            },
            onComplete: () => {
                // Reset to normal mallet
                this.mallet.setVisible(true);
                this.malletHit.setVisible(false);
            }
            });
            });

            // Reset mallet rotation on pointer up
            this.input.on('pointerup', () => {
            this.tweens.add({
            targets: [this.mallet, this.malletHit],
            angle: 0,
            duration: 100,
            ease: 'Back.easeOut',
            onComplete: () => {
                this.mallet.setVisible(true);
                this.malletHit.setVisible(false);
            }
            });
            });
        }

        trackMouseMovement(pointer) {
          const currentTime = Date.now();
          const timeSinceLastMove = currentTime - (this.mouseStartTime || currentTime);
          if (timeSinceLastMove > 200) {
            this.mouseStartTime = currentTime;
            const movementSpeed = Phaser.Math.Distance.Between(
              pointer.x, pointer.y, 
              this.mouseLastPos.x, this.mouseLastPos.y
            );
            setMouseMovements(prev => [...prev, {
              x: pointer.x,
              y: pointer.y,
              time: currentTime,
              speed: movementSpeed,
            }]);
            this.mouseLastPos = { x: pointer.x, y: pointer.y };
          }
        }

        spawnMole() {
          const availableMoles = this.moles.filter(mole => !mole.visible);
          if (availableMoles.length > 0) {
            const spawnFriendly = Math.random() < 0.2; // 20% chance for friendly mole
            const availableType = availableMoles.filter(mole => mole.isFriendly === spawnFriendly);
            
            if (availableType.length > 0) {
              const mole = Phaser.Utils.Array.GetRandom(availableType);
              mole.setVisible(true);
              mole.y = mole.hideY;
              
              this.tweens.add({
                targets: mole,
                y: mole.showY,
                duration: 200,
                ease: 'Back.easeOut',
                onComplete: () => {
                  this.time.delayedCall(800, () => {
                    if (mole.visible) {
                      this.hideMole(mole);
                    }
                  });
                }
              });
            }
          }
        }

        hideMole(mole) {
          this.tweens.add({
            targets: mole,
            y: mole.hideY,
            duration: 200,
            ease: 'Back.easeIn',
            onComplete: () => {
              mole.setVisible(false);
            }
          });
        }

        // Add this helper function to check if we're hitting a mole
        checkMoleHit(pointer) {
            const x = pointer.x;
            const y = pointer.y;
            
            return this.moles.some(mole => 
            mole.visible && 
            Phaser.Math.Distance.Between(x, y, mole.x, mole.y) < 50 // Adjust hit radius as needed
            );
        }

        // Modify your hitMole function to work with the new effect
        hitMole(mole) {
            if (mole.visible) {
            if (mole.isFriendly) {
                this.score = Math.max(0, this.score - 1);
                this.cameras.main.shake(200, 0.005);
            } else {
                this.score += 1;
                // Add shake effect
                this.tweens.add({
                targets: mole,
                x: mole.x + 3,
                duration: 50,
                yoyo: true,
                repeat: 2,
                ease: 'Sine.easeInOut',
                onComplete: () => {
                    mole.x = mole.originalX;
                }
                });
            }

            // Hide mole with animation
            this.tweens.add({
                targets: mole,
                y: mole.hideY,
                duration: 100,
                ease: 'Back.easeIn',
                onComplete: () => {
                mole.setVisible(false);
                }
            });

            setTotalClicks(prev => prev + 1);
            const currentTime = Date.now();
            setTotalTime(prev => prev + (currentTime - this.startTime));
            setStartTime(currentTime);

            if (this.score >= 8) {
                setIsGameFinished(true);
            }
            }
        }


        destroy() {
            if (this.mallet) {
              this.mallet.destroy();
            }
            if (this.malletHit) {
                this.malletHit.destroy();
              }
            super.destroy();
          }
      }

      const config = {
        type: Phaser.AUTO,
        parent: 'game-container',
        width: 400,
        height: 400,
        backgroundColor: '#87CEEB',
        scene: GameScene,
      };

      gameRef.current = new Phaser.Game(config);
    };

    initPhaser();

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
      gameInitializedRef.current = false;
    };
  }, []);

  const handleSubmit = async () => {
    try {
      const timePerClick = totalClicks > 0 ? totalTime / totalClicks : 0;
      const response = await axios.post('/api/validate-captcha', {
        score: gameRef.current?.scene?.scenes[0]?.score || 0, // Access internal score
        time: timePerClick,
        mouseMovements,
      });

      if (response.data.isValid) {
        alert("CAPTCHA validé avec succès !");
      } else {
        alert("CAPTCHA échoué, réessayez.");
      }
    } catch (error) {
      console.error('Error validating CAPTCHA:', error);
      alert("Erreur lors de la validation du CAPTCHA.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Don't center vertically, keep top alignment
      height: '100vh',  // To make sure the content is in view
      textAlign: 'center',
      paddingTop: '20px',
    }}>
      <div 
        style={{
          backgroundColor: '#f9f9f9',
          padding: '10px 20px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
          maxWidth: '400px',
        }}
      >
        🎯 Objectif : Tapez les taupes sans bandana pour marquer des points !
      </div>
      
      <div 
        id="game-container" 
        style={{ 
          position: 'relative', 
          width: '400px', 
          height: '400px',
          cursor: 'none'
        }}
      ></div>
      
      {isGameFinished && (
        <button 
          onClick={handleSubmit}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#4285F4',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
          }}
        >
          Valider CAPTCHA
        </button>
      )}
    </div>
  );
};

export default WhackAMoleGame;
