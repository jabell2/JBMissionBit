var menuState = {
    create: function(){
      
        var nameLabel = game.add.text(80, 80, 'In Between the Lines', { font: '50px Fantasy', fill: '#ffffff'});
        
        var startLabel = game.add.text.(80, game.world.height - 80, 'press the "S" key to start', {font : '25px Fantasy', fill: '#ffffff'} );
        
        var skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        
        skey.onDown.addOnce(this.start, this);
    },
    
    start: function(){
      game.state.start('state0');  
    },
    
};