//Jaren Kawai
//Rocket Patrol II: Refactored
//Time to complete assignment:
//Mods:
//  New timing method - 5pts x
//  Mouse control - 5pts
//  Display time remaining - 3pts x
//  4 New explosion sounds - 3 pts x
//  New title screen - 3pts x
//  High score - 1pts
//Sources used:
//  All sounds taken from mixkit https://mixkit.co/free-sound-effects/explosion/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;