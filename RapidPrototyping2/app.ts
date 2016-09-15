module Game {

    export class RapidPrototyping2 {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1820, 920, Phaser.AUTO, 'content',
                {
                    create: this.create,
                    preload: this.preload
                });

        }
            preload() {
                this.game.load.image("titleScreen", "/Content/Images/titleScreen.png");
                this.game.load.image("backgroundGamePLay", "/Content/Images/gamePlayBackground.png");
            }

             create() {
                 this.game.state.add("TitleScreen", State.TitleScreeen, true);
                 this.game.state.add("GamePLayState", State.GamePLayState, false);
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            }
        }

 }   

window.onload = () => {
    var game = new Game.RapidPrototyping2();
};