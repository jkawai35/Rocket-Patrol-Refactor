class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        //loading audio
        this.load.audio("sfx_select", "./assets/blip_select12.wav");
        this.load.audio("sfx_rocket", "./assets/rocket_shot.wav");
        this.load.audio("sfx_explosion1", "./assets/explosion1.wav");
        this.load.audio("sfx_explosion2", "./assets/explosion2.wav");
        this.load.audio("sfx_explosion3", "./assets/explosion3.wav");
        this.load.audio("sfx_explosion4", "./assets/explosion4.wav");
        this.load.image("starfield", "./assets/starfield.png");

    }
    
    create(){
        //menu settings
        let menuConfig = {
            fontFamily: "Impact",
            fontSize: "26px",
            backgroundColor: "#CB223E",
            color: "#000",
            align: "center",
            padding: {
                top: 7,
                bottom: 7,
            },
            fixedWidth: 0
        }

        this.starfield = this.add.tileSprite(0,0,640,480, "starfield").setOrigin(0,0);
        
        this.add.rectangle(0, borderUISize + borderPadding + 117, game.config.width, 67, 0x680A2A).setOrigin(0,0);

        //show menu text
        menuConfig.color = "#FFF"
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 145, "ROCKET PATROL II", menuConfig).setOrigin(0.5);
        menuConfig.fontSize = "50px";
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 15, "REFACTORED", menuConfig).setOrigin(0.5);

        menuConfig.fontSize = "26px";
        menuConfig.backgroundColor = "#F9DE2C";
        menuConfig.color = "#000";
        this.add.text(game.config.width/2, game.config.height/2 + 75, "Use ←→ arrows to move & (F) to fire", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 75, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);

        menuConfig.backgroundColor = "#44F019";
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 125, "Shoot the spaceships to earn more points and time!", menuConfig).setOrigin(0.5);

    
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        //check for novice
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
        //check for expert
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
    }
}