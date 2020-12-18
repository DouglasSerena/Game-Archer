import Phaser from 'phaser';
import { Forest } from './scenes/forest';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Forest],
  backgroundColor: '#4caf50',
};

export default new Phaser.Game(config);
