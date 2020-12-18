export function animations(anims: Phaser.Animations.AnimationManager) {
  const animation: Phaser.Types.Animations.Animation[] = [
    /********************************** DOWN **********************************/
    {
      key: 'down',
      frames: [{ key: 'positions', frame: 0 }],
      frameRate: 20,
    },
    {
      key: 'walk-down',
      frames: anims.generateFrameNumbers('walk', {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-down',
      frames: anims.generateFrameNumbers('run', {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /********************************* RIGHT **********************************/
    {
      key: 'right',
      frames: [{ key: 'positions', frame: 2 }],
      frameRate: 20,
    },
    {
      key: 'walk-right',
      frames: anims.generateFrameNumbers('walk', {
        start: 12,
        end: 17,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-right',
      frames: anims.generateFrameNumbers('run', {
        start: 12,
        end: 17,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /******************************* DOWN RIGHT *******************************/
    {
      key: 'down-right',
      frames: [{ key: 'positions', frame: 7 }],
      frameRate: 20,
    },
    {
      key: 'walk-down-right',
      frames: anims.generateFrameNumbers('walk', {
        start: 6,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-down-right',
      frames: anims.generateFrameNumbers('run', {
        start: 6,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /******************************** UP RIGHT ******************8*************/
    {
      key: 'up-right',
      frames: [{ key: 'positions', frame: 7 }],
      frameRate: 20,
    },
    {
      key: 'walk-up-right',
      frames: anims.generateFrameNumbers('walk', {
        start: 18,
        end: 23,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-up-right',
      frames: anims.generateFrameNumbers('run', {
        start: 18,
        end: 23,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /*********************************** UP ***********************************/
    {
      key: 'up',
      frames: [{ key: 'positions', frame: 4 }],
      frameRate: 20,
    },
    {
      key: 'walk-up',
      frames: anims.generateFrameNumbers('walk', {
        start: 24,
        end: 29,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-up',
      frames: anims.generateFrameNumbers('run', {
        start: 24,
        end: 29,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /********************************** LEFT **********************************/
    {
      key: 'left',
      frames: [{ key: 'positions', frame: 6 }],
      frameRate: 20,
    },
    {
      key: 'walk-left',
      frames: anims.generateFrameNumbers('walk', {
        start: 36,
        end: 41,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-left',
      frames: anims.generateFrameNumbers('run', {
        start: 36,
        end: 41,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /******************************* DOWN LEFT *******************************/
    {
      key: 'down-left',
      frames: [{ key: 'positions', frame: 7 }],
      frameRate: 20,
    },
    {
      key: 'walk-down-left',
      frames: anims.generateFrameNumbers('walk', {
        start: 43,
        end: 48,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-down-left',
      frames: anims.generateFrameNumbers('run', {
        start: 43,
        end: 48,
      }),
      frameRate: 10,
      repeat: -1,
    },
    /******************************** UP LEFT ********************************/
    {
      key: 'up-left',
      frames: [{ key: 'positions', frame: 7 }],
      frameRate: 20,
    },
    {
      key: 'walk-up-left',
      frames: anims.generateFrameNumbers('walk', {
        start: 30,
        end: 35,
      }),
      frameRate: 10,
      repeat: -1,
    },
    {
      key: 'run-up-left',
      frames: anims.generateFrameNumbers('run', {
        start: 30,
        end: 35,
      }),
      frameRate: 10,
      repeat: -1,
    },
  ];

  animation.forEach((config) => {
    anims.create(config);
  });
}
