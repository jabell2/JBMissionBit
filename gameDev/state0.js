var demo = {};
var cursors;
var square;
var speed = 3;
var obstacle;
var platforms;

var spacekey;
demo.state0 = function(){};

demo.state0.prototype = {
    
    preload: function(){
       game.load.spritesheet('square', 'assets/spritesheets/WalkingSquare.png', 120, 155);
       game.load.spritesheet('ledge', 'assets/spritesheets/ledge.png', 1250, 15);
        
        game.load.spritesheet('obstacle', 'assets/spritesheets/ledge2.png', 100, 60);
        
        game.load.spritesheet('ledge3', 'assets/spritesheets/ledge3.png', 1250, 10);
        
    },
    
    create: function(){
        
        game.world.setBounds(0,0,1265,10)
        
        game.stage.backgroundColor = '#ffffff';
//        ledge3 = game.add.sprite(0, 570, 'ledge3');
        
        square = game.add.sprite(0, 0, 'square'); 
         
        cursors = game.input.keyboard.createCursorKeys();
//        ledge2 = game.add.sprite(0, 125, 'ledge2');
        
        game.physics.enable(square);
        

        
        square.body.gravity.y = 100;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
//        game.physics.enable(ledge);
        
//        game.physics.enable(ledge2);
        
//        game.physics.enable(ledge3);
        
//        ledge3.body.checkCollision.up = true;
        
        
//        ledge2.body.checkCollision.up = true;
        
        platforms= game.add.group();
        platforms.enableBody = true;
        
        var ledge = platforms.create(0, 565, 'ledge');
        ledge.body.immovable = true;
        
        var ledge = platforms.create(0, 125, 'ledge');
        ledge.body.immovable = true;
        
        var obstacle = platforms.create(400, 520, 'obstacle');
        obstacle.body.immovable = true;
        
        this.spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
           
   square.animations.add('walk', [0,1,2,], 3.5);
      
        
        
    },
    
    update: function(){
        square.animations.play('walk');
        game.physics.arcade.collide(platforms, square);
      
      if(cursors.right.isDown){
          square.body.velocity.x = 300;
      }
    else if(this.spacekey.isDown){
            square.body.velocity.y = -200;
        }
        else{
            square.body.velocity.x = 0;
            square.animations.stop();
            square.frame = 0;
        }
        if(cursors.up.isDown){
            square.body.velocity.y = -550;
        }
       
    }
    
    //render: function(){
    // game.debug.spriteInfo(square, 20, 32); 
//}
//        game.debug.bodyInfo(sprite, 16, 24);
    
    
};

