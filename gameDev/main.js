var game = new Phaser.Game(1220, 600, Phaser.AUTO);

game.state.add('state0', demo.state0);
game.state.start('state0');
