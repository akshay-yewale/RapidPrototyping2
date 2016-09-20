module GameObject {

    export enum PlayerState {
        IDLE, PLAY, DEATH
    };

    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;
        Right_Arrow : Phaser.Key;
        Left_Arrow : Phaser.Key;
        Esc_key: Phaser.Key;
        position_X: number;
        POsition_Y: number;
        speed: number;
       
        
        constructor(game:Phaser.Game, i_X: number, i_Y: number) {
            super(game, i_X, i_Y, "HERO_WALKING", 0);
            this.game = game;
            this.Right_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.Right_Arrow.onDown.add(Player.prototype.MoveRight, this);
            this.Left_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.Left_Arrow.onDown.add(Player.prototype.MoveLeft, this);
            this.Esc_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.Esc_key.onDown.add(Player.prototype.QuitGame, this);
            this.anchor.set(0.0, 1.0);
            this.StartPoint();
        }

        update() {
            if (this.Right_Arrow.isDown) {
                this.MoveRight();
            }

            if (this.Left_Arrow.isDown) {
                this.MoveLeft();
            }
        }

        MoveRight() {
            //add function to move right
            this.x += 8;
            if (this.x+this.width > this.game.width)
                this.x = this.game.width-this.width;
        }

        MoveLeft() {
            //add function to move left
            this.x -= 8;
            if (this.x < 0)
                this.x = 0;
        }

        QuitGame() {
            // code to exit the game

        }

        StartPoint() {
            //define Starting point of game
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.game.physics.arcade.enableBody(true);
          
            this.playerState = PlayerState.PLAY;
            this.speed = 5;

            // player = this.game.add.sprite(this.game.width / 2, this.game.height - 50,"playerObject");

            this.loadTexture("playerObject");
            this.animations.add("PLAY");
            this.animations.play("PLAY", 0, true);
            

        }
    }
}