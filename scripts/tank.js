// class Tank{
//   constructor(x, y){
//     this.sprite = TankOnline.game.add.sprite(x,y, 'tankDown');
//     TankOnline.game.physics.arcade.enable(this.sprite);
//   }
//
//   update(directionX, directionY){
//     if(directionX <0){
//       this.sprite.body.velocity.x= -150;
//       this.sprite.loadTexture('tankLeft');
//   //loadTexture: load anh
//     }
//     else if(directionX >0){
//       this.sprite.body.velocity.x= 150;
//       this.sprite.loadTexture('tankRight');
//     }
//     else{
//       this.sprite.body.velocity.x =0;
//     }
//
//     if(directionY <0){
//       this.sprite.body.velocity.y= -150;
//       this.sprite.loadTexture('tankUp');
//     }
//     else if(directionY >0){
//       this.sprite.body.velocity.y= 150;
//       this.sprite.loadTexture('tankDown');
//     }
//     else{
//       this.sprite.body.velocity.y =0;
//     }
//   }
// }


class Tank{
  constructor(x, y, group){
    this.sprite = group.create(x, y, 'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);//set tam cua anh
    this.direction = new Phaser.Point(0,1);// direction cho tank
    this.lastShotTime = TankOnline.game.time.now; // thoi gian hien tai cua game time
    this.sprite.body.collideWorldBounds = true; //set tank k di qua tuong duoc
    this.sprite.health =5;

  }

  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -350;
      this.sprite.loadTexture('tankLeft');
      this.direction = new Phaser.Point(-1,0);
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 350;
      this.sprite.loadTexture('tankRight');
      this.direction = new Phaser.Point(1,0);
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction.y < 0){
      this.sprite.body.velocity.y = -350;
      this.sprite.loadTexture('tankUp');
      this.direction = new Phaser.Point(0,-1);
    }
    else if (direction.y > 0){
      this.sprite.body.velocity.y = 350;
      this.sprite.loadTexture('tankDown');
      this.direction = new Phaser.Point(0,1);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }

  fire(){
    if(TankOnline.game.time.now - this.lastShotTime > 200){
      this.lastShotTime = TankOnline.game.time.now;
      new Bullet(this);
    }

  }
}
