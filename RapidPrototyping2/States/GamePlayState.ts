module State {
    export class GamePLayState extends Phaser.State {

        backgroundGamePLay: Phaser.Sprite;

        constructor() {
            super();
        }


        create() {
          
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
        }

       


    }
}