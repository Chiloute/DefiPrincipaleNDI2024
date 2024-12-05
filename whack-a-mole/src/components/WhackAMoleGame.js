'use client';
import { useEffect, useRef } from 'react';

const WhackAMoleGame = () => {
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
          this.score = 0;
          this.moles = [];
        }

        preload() {
          // Load the hole background and foreground images
          this.load.image('hole-back', '/hole-back.png');
          this.load.image('hole-front', '/hole-front.png');
          this.load.image('mole', '/mole.png');
        }

        create() {
          // Add background
          this.add.rectangle(200, 200, 400, 400, 0x87CEEB);

          // Add score text
          this.scoreText = this.add.text(10, 10, 'Score: 0', {
            fontSize: '24px',
            fill: '#000',
            fontFamily: 'Arial'
          }).setDepth(3); // Always on top

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

            // In your GameScene class, modify the create() method where we set up the moles:

            positions.forEach(pos => {
                // Create hole back (depth 0)
                const holeBack = this.add.image(pos.x, pos.y, 'hole-back')
                .setScale(0.5)
                .setDepth(0);
            
                // Create mole (depth 1)
                const mole = this.add.image(pos.x, pos.y, 'mole')
                .setScale(0.5)
                .setDepth(1)
                .setInteractive()
                .setVisible(false);
            
                // Create hole front (depth 2)
                const holeFront = this.add.image(pos.x, pos.y, 'hole-front')
                .setScale(0.5)
                .setDepth(2);
            
                // Store initial y position for animation
                mole.baseY = pos.y - 30;
                mole.hideY = pos.y + 30; // Hidden position (slightly below base position)
                mole.showY = pos.y ; // Shown position (slightly above base position)
                mole.y = mole.hideY; // Start hidden
                
                // Add click handler
                mole.on('pointerdown', () => this.hitMole(mole));
            
                this.moles.push(mole);
            });
            

          // Start spawning moles
          this.time.addEvent({
            delay: 1000,
            callback: this.spawnMole,
            callbackScope: this,
            loop: true
          });
        }

        spawnMole() {
          const availableMoles = this.moles.filter(mole => !mole.visible);
          if (availableMoles.length > 0) {
            const mole = Phaser.Utils.Array.GetRandom(availableMoles);
            
            // Show mole with animation
            mole.setVisible(true);
            mole.y = mole.hideY; // Start from hidden position
            this.tweens.add({
              targets: mole,
              y: mole.showY,
              duration: 200,
              ease: 'Back.easeOut',
              onComplete: () => {
                // Hide mole after a delay if not hit
                this.time.delayedCall(800, () => {
                  if (mole.visible) {
                    this.hideMole(mole);
                  }
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
            this.scoreText.setText(`Score: ${this.score}`);
            this.hideMole(mole);
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
    };

    initPhaser();

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
      gameInitializedRef.current = false;
    };
  }, []);

  return <div id="game-container" />;
};

export default WhackAMoleGame;
