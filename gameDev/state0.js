var demo = {}; 
var square;
var speed = 6;
var platforms;
var ledge;
demo.state0 = function(){};

demo.state0.prototype = {
    
    preload: function(){
       game.load.spritesheet('square', 'assets/spritesheets/WalkingSquare.png', 120, 155);
       game.load.spritesheet('ledge', 'assets/spritesheets/ledge.png', 100, 90);
    },
    
    create: function(){
        game.stage.backgroundColor = '#facade';
        ledge = game.add.sprite(0, 500, 'ledge')
        square = game.add.sprite(0, 400, 'square'); 
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        platforms = game.add.group();
        
        platforms.enableBody = true;
        
        
    }

};

