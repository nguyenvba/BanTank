class Bullet{
  constructor(x,y){
    this.sprite = TankOnline.game.add.sprite(x,y, 'bulletRight');
    TankOnline.game.physics.arcade.enable(this.sprite);
}
  update(directionX){
    if(directionX >0){
      this.sprite.body.velocity.x= 15000;
    }
    else {
      this.sprite.body.velocity.x =0;
    }
  }
}
