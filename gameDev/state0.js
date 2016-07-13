var demo = {};
var cursors;
var square;
var speed = 3;
var obstacles;
var ledge1;
var ledge2;

var spacekey;
demo.state0 = function(){};

demo.state0.prototype = {
    
    preload: function(){
        game.load.spritesheet('square', 'assets/spritesheets/WalkingSquare.png', 100, 300);
//        game.load.spritesheet('square', 'assets/spritesheets/WalkingSquare.png', 94, 76);
        game.load.spritesheet('ledge', 'assets/spritesheets/ledge.png', 1250, 15);
        
        game.load.spritesheet('obstacle', 'assets/spritesheets/ledge2.png', 100, 60);
        
        game.load.spritesheet('ledge3', 'assets/spritesheets/ledge3.png', 1250, 10);
        
    },
    
    create: function(){
//        Set up
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,2800,10)
        game.stage.backgroundColor = '#ffffff';
        
//        Square
        square = game.add.sprite(0,0, 'square'); 
        square.anchor.setTo(.5,.5);
        game.physics.enable(square);
        square.body.gravity.y = 300;
        
        square.collideWorldBounds = true;
        square.animations.add('walk', [0,1,2,3,4], 5.5);
        game.camera.follow(square);
        
        
//        Bottom Ledge
        ledge1 = game.add.sprite(0, 565, 'ledge');
        ledge1.width = 2800;
        
        game.physics.enable(ledge1);
        ledge1.body.immovable = true;
        
//        Top Ledge
        ledge2 = game.add.sprite(0, 125, 'ledge');
        ledge2.width = 2800;
        game.physics.enable(ledge2);
        ledge2.body.immovable = true;        
        
//        Obstacles group
        obstacles = game.add.group();
        obstacles.enableBody = true;

        obstacle = obstacles.create(400, 520, 'obstacle');
        obstacle.body.immovable = true;
        
//        Input
        cursors = game.input.keyboard.createCursorKeys();
        this.spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },
    
    update: function(){
//        Square movement
        square.body.velocity.x += 1;
        square.animations.play('walk');

//        What happens when the square reaches the end of your game
//        if (square.x === game.world.width)
//        {
////            Game Over text?
////            Next level?
////            Start over?
//        }
        
//        Collision
        game.physics.arcade.collide(obstacles, square);
        game.physics.arcade.collide(ledge1, square);
        game.physics.arcade.collide(ledge2, square);

//        What happens when I press the spacebar?
        if(this.spacekey.isDown){
            square.animations.stop();
            square.body.velocity.x = 0;
            square.body.velocity.y = -200;
            square.body.checkCollision.up = false;

        }
//        What happens when I press the down arrow?
        else if(cursors.down.isDown){
            ledge2.body.checkCollision.up = false;
            square.body.velocity.y = 200;
            square.body.velocity.x = 0;
        }
        else{
            ledge2.body.checkCollision.up = true;
        }
       
    }
    
};

