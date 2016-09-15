module Game {

    export class RapidPrototyping2 {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1820, 920, Phaser.AUTO, 'content',
                {
                    create: create,
                    preload: preload,
                });


            function preload() {


            }

            function create() {
            }
        }
    }

    window.onload = () => {
        var game = new Game.RapidPrototyping2();
    };
}