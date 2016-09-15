module GameObject {

    export enum PlayerState {
        IDLE, PLAY, DEATH
    };

    export class PLayer extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;
        Right_Arrow : Phaser.Key;
        Left_Arrow : Phaser.Key;
        Esc_key: Phaser.Key;
        position_X: number;
        POsition_Y: number;


        constructor(game:Phaser.Game, i_X: number, i_Y: number) {
            super(game, i_X, i_Y, "", 0);
            this.game = game;
            this.Right_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.Right_Arrow.onDown.add(PLayer.prototype.MoveRight, this);
            this.Left_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.Left_Arrow.onDown.add(PLayer.prototype.MoveLeft, this);
            this.Esc_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.Esc_key.onDown.add(PLayer.prototype.QuitGame, this);
            this.anchor.set(0.0, 1.0);
            this.StartPoint();
        }

        MoveRight() {
            //add function to move right
        }

        MoveLeft() {
            //add function to move left
        }

        QuitGame() {
            // code to exit the game
        }

        StartPoint() {
            //define Starting point of game

        }
    }
}