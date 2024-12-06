'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const WhackAMoleGame = () => {
  const [score, setScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [mouseMovements, setMouseMovements] = useState([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const gameRef = useRef(null); // Ref to store Phaser game instance
  const gameInitializedRef = useRef(false); // Track if the game is initialized

  useEffect(() => {
    if (gameInitializedRef.current) {
      return; // If the game is already initialized, do not re-initialize
    }

    const initPhaser = async () => {
      const Phaser = (await import('phaser')).default;
      console.log("Initializing Phaser game..."); // Debugging line

      gameInitializedRef.current = true; // Mark the game as initialized

      class GameScene extends Phaser.Scene {
        constructor() {
          super({ key: 'GameScene' });
          this.score = 0;
          this.moles = [];
          this.mouseMovements = [];  // Store mouse movements
          this.mouseLastPos = { x: 0, y: 0 }; // Last mouse position
          this.mouseStartTime = Date.now();  // Time tracking mouse movement speed
          this.startTime = Date.now(); // Local start time for Phaser
        }

        preload() {
          this.load.image('hole-back', '/hole-back.png');
          this.load.image('hole-front', '/hole-front.png');
          this.load.image('mole', '/mole.png');
        }

        create() {
          // Capture mouse movements
          this.input.on('pointermove', this.trackMouseMovement, this);

          // Initialize game start time
          if (!startTime) {
            setStartTime(Date.now());  // Set the start time in React state
          }

          // Initialize mole positions
          const positions = [
            { x: 100, y: 100 },
            { x: 200, y: 100 },
            { x: 300, y: 100 },
            { x: 100, y: 200 },
            { x: 200, y: 200 },
            { x: 300, y: 200 },
            { x: 100, y: 300 },
            { x: 200, y: 300 },
            { x: 300, y: 300 },
          ];

          positions.forEach(pos => {
            const holeBack = this.add.image(pos.x, pos.y, 'hole-back')
              .setScale(0.5)
              .setDepth(0);

            const mole = this.add.image(pos.x, pos.y, 'mole')
              .setScale(0.5)
              .setDepth(1)
              .setInteractive()
              .setVisible(false);

            const holeFront = this.add.image(pos.x, pos.y, 'hole-front')
              .setScale(0.5)
              .setDepth(2);

            mole.baseY = pos.y - 30;
            mole.hideY = pos.y + 30;
            mole.showY = pos.y;
            mole.y = mole.hideY;

            mole.on('pointerdown', () => this.hitMole(mole));

            this.moles.push(mole);
          });

          // Logic for spawning moles
          this.time.addEvent({
            delay: 1000,
            callback: this.spawnMole,
            callbackScope: this,
            loop: true,
          });
        }

        trackMouseMovement(pointer) {
          const currentTime = Date.now();
          const timeSinceLastMove = currentTime - (this.mouseStartTime || currentTime);
          if (timeSinceLastMove > 200) {
            this.mouseStartTime = currentTime;

            const movementSpeed = Phaser.Math.Distance.Between(pointer.x, pointer.y, this.mouseLastPos.x, this.mouseLastPos.y);

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
            const mole = Phaser.Utils.Array.GetRandom(availableMoles);

            mole.setVisible(true);
            mole.y = mole.hideY;
            this.tweens.add({
              targets: mole,
              y: mole.showY,
              duration: 200,
              ease: 'Back.easeOut',
              onComplete: () => {
                this.time.delayedCall(800, () => {
                  this.hideMole(mole);
                });
              }
            });
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

        hitMole(mole) {
          if (mole.visible) {
            this.score += 1;
            setScore(this.score);
            setTotalClicks(prev => prev + 1);

            // Calculate total time
            const currentTime = Date.now();
            setTotalTime(prev => prev + (currentTime - this.startTime));
            setStartTime(currentTime);  // Update React state for start time

            this.hideMole(mole);
            if (this.score >= 8) {
              setIsGameFinished(true); // End the game when score reaches 8
            }
          }
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
      console.log("Phaser game initialized successfully.");
    };

    initPhaser();

    return () => {
      if (gameRef.current) {
        console.log("Destroying Phaser game...");
        gameRef.current.destroy(true); // Destroy Phaser game instance when component unmounts
      }
    };
  }, []); // No dependencies, so this will only run once on mount

  const handleSubmit = async () => {
    try {
      const timePerClick = totalClicks > 0 ? totalTime / totalClicks : 0; // Calculate average time per click

      const response = await axios.post('/api/validate-captcha', {
        score,
        time: timePerClick,  // Time per click
        mouseMovements,
      });

      if (response.data.isValid) {
        alert("CAPTCHA validé avec succès !");
      } else {
        alert("CAPTCHA échoué, réessayez.");
      }
    } catch (error) {
      alert("Erreur lors de la validation du CAPTCHA.");
    }
  };

  return (
    <div>
      <div id="game-container" style={{ position: 'relative', width: '400px', height: '400px' }}></div>
      {isGameFinished && (
        <button onClick={handleSubmit}>Valider CAPTCHA</button>
      )}
    </div>
  );
};

export default WhackAMoleGame;
