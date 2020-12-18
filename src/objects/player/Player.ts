import 'phaser';
import { animations } from './Animations';

export class Player {
  private player?: Phaser.Physics.Arcade.Sprite;
  private crosshair?: Phaser.Physics.Arcade.Image;
  private speed = 1.0;

  get get() {
    return this.player as Phaser.Physics.Arcade.Sprite;
  }

  private keysPress = {
    isPressDown: false,
    isPressRight: false,
    isPressLeft: false,
    isPressUp: false,
    isPressShift: false,
  };

  constructor(
    private anims: Phaser.Animations.AnimationManager,
    private physics: Phaser.Physics.Arcade.ArcadePhysics,
    private input: Phaser.Input.InputPlugin
  ) {
    this.crosshair = this.physics.add.image(50, 100, 'crosshair');
    this.crosshair.setCollideWorldBounds(false);
    this.crosshair.debugShowBody = false;

    this.player = this.physics.add.sprite(50, 50, 'positions', 0);
    this.player.setCollideWorldBounds(true);
    this.player.setBodySize(14, 6);
    this.player.body.setOffset(25, 35);

    animations(this.anims);

    this.handleKeyBoard();
    this.handleMouse();
  }

  public update() {}

  public setColliders(
    objects:
      | Phaser.GameObjects.GameObject
      | Phaser.GameObjects.GameObject[]
      | Phaser.GameObjects.Group
      | Phaser.GameObjects.Group[]
  ) {
    this.physics.add.collider(
      this.player as Phaser.Physics.Arcade.Sprite,
      objects
    );
  }

  private handleMouse() {
    this.input.on('pointermove', (pointer: PointerEvent) => {
      this.crosshair?.setX(pointer.x);
      this.crosshair?.setY(pointer.y);
    });
  }

  private handleKeyBoard() {
    // KEYBOARD DOWN
    this.input.keyboard.addKey('s').on('down', () => this.moveDown());
    this.input.keyboard.addKey('d').on('down', () => this.moveRight());
    this.input.keyboard.addKey('w').on('down', () => this.moveUp());
    this.input.keyboard.addKey('a').on('down', () => this.moveLeft());
    this.input.keyboard.addKey('a').on('down', () => this.moveLeft());
    this.input.keyboard.addKey('SHIFT').on('down', () => {
      this.keysPress.isPressShift = true;
      this.speed = 2.0;
      this.verifyPressKeys();
    });
    this.input.keyboard.addKey('SHIFT').on('up', () => {
      this.keysPress.isPressShift = false;
      this.speed = 1.0;
      this.verifyPressKeys();
    });

    // KEYBOARD UP
    this.input.keyboard.addKey('s').on('up', (e) => {
      this.keysPress.isPressDown = false;

      this.player?.anims.play('down');
      this.player?.setVelocityY(0);

      this.verifyPressKeys();
    });
    this.input.keyboard.addKey('d').on('up', (e) => {
      this.keysPress.isPressRight = false;

      this.player?.anims.play('right');
      this.player?.setVelocityX(0);

      this.verifyPressKeys();
    });
    this.input.keyboard.addKey('w').on('up', (e) => {
      this.keysPress.isPressUp = false;

      this.player?.setVelocityY(0);
      this.player?.anims.play('up');

      this.verifyPressKeys();
    });
    this.input.keyboard.addKey('a').on('up', (e) => {
      this.keysPress.isPressLeft = false;

      this.player?.anims.play('left');
      this.player?.setVelocityX(0);

      this.verifyPressKeys();
    });
  }

  private verifyPressKeys = () => {
    this.keysPress.isPressDown && this.moveDown();
    this.keysPress.isPressUp && this.moveUp();
    this.keysPress.isPressLeft && this.moveLeft();
    this.keysPress.isPressRight && this.moveRight();
  };

  // DOWN
  private moveDown() {
    this.player?.anims.play(
      this.keysPress.isPressShift ? 'run-down' : 'walk-down'
    );
    this.player?.setVelocityY(100 * this.speed);
    this.keysPress.isPressDown = true;

    if (this.keysPress.isPressLeft) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-down-left' : 'walk-down-left'
      );
      this.player?.setVelocityX(-100 * this.speed);
    }
    if (this.keysPress.isPressRight) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-down-right' : 'walk-down-right'
      );
      this.player?.setVelocityX(100 * this.speed);
    }
  }

  // UP
  private moveUp() {
    this.player?.anims.play(this.keysPress.isPressShift ? 'run-up' : 'walk-up');
    this.player?.setVelocityY(-100 * this.speed);
    this.keysPress.isPressUp = true;

    if (this.keysPress.isPressLeft) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-up-left' : 'walk-up-left'
      );
      this.player?.setVelocityX(-100 * this.speed);
    }
    if (this.keysPress.isPressRight) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-up-right' : 'walk-up-right'
      );
      this.player?.setVelocityX(100 * this.speed);
    }
  }

  // LEFT
  private moveLeft() {
    this.player?.anims.play(
      this.keysPress.isPressShift ? 'run-left' : 'walk-left'
    );
    this.player?.setVelocityX(-100 * this.speed);
    this.keysPress.isPressLeft = true;

    if (this.keysPress.isPressDown) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-down-left' : 'walk-down-left'
      );
      this.player?.setVelocityY(100 * this.speed);
    }
    if (this.keysPress.isPressUp) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-up-left' : 'walk-up-left'
      );
      this.player?.setVelocityY(-100 * this.speed);
    }
  }

  // RIGHT
  private moveRight() {
    this.player?.anims.play(
      this.keysPress.isPressShift ? 'run-right' : 'walk-right'
    );
    this.player?.setVelocityX(100 * this.speed);
    this.keysPress.isPressRight = true;

    if (this.keysPress.isPressDown) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-down-right' : 'walk-down-right'
      );
      this.player?.setVelocityY(100 * this.speed);
    }
    if (this.keysPress.isPressUp) {
      this.player?.anims.play(
        this.keysPress.isPressShift ? 'run-up-right' : 'walk-up-right'
      );
      this.player?.setVelocityY(-100 * this.speed);
    }
  }
}
