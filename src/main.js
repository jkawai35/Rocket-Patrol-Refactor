//Jaren Kawai
//Rocket Patrol II: Refactored
//Time to complete assignment: 8 hours
//Mods:
//  New timing method - 5pts x
//  Two player mode - 5pts x
//  Display time remaining - 3pts x
//  4 New explosion sounds - 3 pts x
//  New title screen - 3pts x
//  High score - 1pts x
//Sources used:
//  All sounds taken from mixkit https://mixkit.co/free-sound-effects/explosion/
//  Generating random numbers https://www.w3schools.com/jsref/jsref_random.asp#:~:text=JavaScript%20Math.random()&text=The%20Math.random()%20method,not%20including%201%20(exclusive).
//  Received guidance from housemate (hasn't taken CMPM 120 and hasn't used Phaser, but knows JavaScript) - only for new timing method, only ideas given

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyT, keyP;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//set high score
let highScore = 0;

//set two player score
let scoreTobeat = 0;

//set multiplayer
let twoPlayer = false;
let playertwoturn = false;
let player2over = false;