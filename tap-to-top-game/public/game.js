// game.js
class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // Charger l'image de la taupe et des trous
    this.load.image('mole', '/assets/mole.png');
    this.load.image('hole', '/assets/hole.png');  // Un trou fixe
  }

  create() {
    this.score = 0;
    this.gameOverFlag = false;
    this.timeToNextMole = 0;

    // Taille de l'image (ajustée pour la scène)
    const holeSize = 100; // Taille du trou
    const moleSize = 80;  // Taille de la taupe

    // Afficher le score
    this.scoreText = this.add.text(20, 20, 'Score: 0', {
      font: '24px Arial',
      fill: '#000000'
    });

    // Créer un tableau de 3 trous fixes
    this.holes = [
      this.add.sprite(150, 300, 'hole').setInteractive(),
      this.add.sprite(350, 300, 'hole').setInteractive(),
      this.add.sprite(550, 300, 'hole').setInteractive(),
    ];

    // Ajuster la taille des trous
    this.holes.forEach(hole => {
      hole.setDisplaySize(holeSize, holeSize); // Redimensionner le trou
    });

    // Initialiser les taupes (initialement invisibles)
    this.moles = [
      this.add.sprite(150, 300, 'mole').setAlpha(0).setInteractive(),
      this.add.sprite(350, 300, 'mole').setAlpha(0).setInteractive(),
      this.add.sprite(550, 300, 'mole').setAlpha(0).setInteractive(),
    ];

    // Ajuster la taille des taupes
    this.moles.forEach(mole => {
      mole.setDisplaySize(moleSize, moleSize); // Redimensionner la taupe
    });

    // Ajouter un événement de clic pour chaque taupe
    this.moles.forEach(mole => {
      mole.on('pointerdown', this.hitMole, this);
    });
  }

  update(time, delta) {
    if (this.gameOverFlag) return;

    // Gérer le temps avant l'apparition de la prochaine taupe
    this.timeToNextMole -= delta;
    if (this.timeToNextMole <= 0) {
      this.showMoles();
      this.timeToNextMole = Phaser.Math.Between(1000, 2000); // Réinitialiser le délai
    }
  }

  // Faire apparaître 3 taupes, une d'entre elles étant une "taupe piège"
  showMoles() {
    if (this.gameOverFlag) return;

    // Mélanger les taupes pour avoir une taupe piège aléatoire
    const randomMole = Phaser.Utils.Array.GetRandom(this.moles);
    const trapMole = Phaser.Utils.Array.GetRandom(this.moles);

    // S'assurer que la taupe piège n'est pas la même que la taupe à taper
    if (randomMole === trapMole) {
      return; // Si la taupe piège est la même que la taupe à taper, on ne fait rien
    }

    // Afficher les taupes
    this.moles.forEach(mole => mole.setAlpha(1)); // Afficher toutes les taupes

    // Faire disparaître la taupe piège
    trapMole.setAlpha(0);

    // Ajouter un délai pour que les taupes disparaissent après un moment
    this.time.delayedCall(1000, () => {
      this.moles.forEach(mole => mole.setAlpha(0)); // Cacher toutes les taupes après 1 seconde
    });
  }

  // Lorsque le joueur clique sur une taupe
  hitMole(mole) {
    if (this.gameOverFlag) return;

    // Si on clique sur la taupe piège, on perd un point
    if (mole.alpha === 0) {
      this.score -= 1; // Réduire le score
    } else {
      this.score += 1; // Ajouter un point
    }

    // Mettre à jour le texte du score
    this.scoreText.setText('Score: ' + this.score);
  }

  // Fin du jeu
  gameOver() {
    this.gameOverFlag = true;
    this.add.text(400, 300, 'Game Over', {
      font: '48px Arial',
      fill: '#ff0000'
    }).setOrigin(0.5, 0.5);
    
    this.add.text(400, 360, 'Score Final: ' + this.score, {
      font: '24px Arial',
      fill: '#000000'
    }).setOrigin(0.5, 0.5);
  }
}

// Configuration du jeu Phaser
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MainScene,
  parent: 'game-container',
};

const game = new Phaser.Game(config);
