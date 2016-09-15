module State {
    export class GamePLayState extends Phaser.State {

        player: GameObject.Player;
        game: Phaser.Game;
        backgroundGamePLay: Phaser.Sprite;

        constructor() {
            super();
        }


        create() {

          
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
           
            this.player = new GameObject.Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);

        }

       


    }
}