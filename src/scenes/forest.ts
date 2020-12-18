import 'phaser';
import { Player } from '~/objects/player/Player';

export class Forest extends Phaser.Scene {
  private player?: Player;

  preload() {
    this.load.tilemapTiledJSON('wallJson', 'assets/scenario/wall.json');
    this.load.image('wall@2x', 'assets/scenario/wall@2x.png');
    this.load.image('crosshair', 'assets/atack/crosshair@2x.png');
    this.load.spritesheet('positions', 'assets/player/positions@2x.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('run', 'assets/player/run@2x.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('walk', 'assets/player/walk@2x.png', {
      frameWidth: 64,
      frameHeight: 64,
    });
  }
  create() {
    this.player = new Player(this.anims, this.physics, this.input);

    const map = this.add.tilemap('wallJson');
    const wallTiles = map.addTilesetImage('wall@2x', 'wall@2x');

    const wallHidden = map
      .createStaticLayer('wall-hidden', wallTiles, -50, 0)
      .setZ(10);
    const cornerstone = map
      .createStaticLayer('cornerstone', wallTiles, -50, 0)
      .setZ(10);
    const wall = map.createStaticLayer('wall', wallTiles, -50, 0).setZ(10);

    cornerstone.setCollisionByProperty({ collider: true });
    wallHidden.setCollisionByProperty({ collider: true });
    wall.setCollisionByProperty({ collider: true });

    this.player.setColliders([cornerstone, wall, wallHidden]);
  }

  update() {
    this.player?.update();
  }
}
