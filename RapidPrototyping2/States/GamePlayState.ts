module State {
    export class GamePLayState extends Phaser.State {

        player: GameObject.Player;
        game: Phaser.Game;
        backgroundGamePLay: Phaser.Sprite;
        person: GameObject.Person;

        constructor() {
            super();
        }


        create() {
          
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
           
            this.player = new GameObject.Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
            this.newPerson();
            this.game.add.existing(this.person);
        }

        newPerson()
        {
            //Later for random spawning
            this.person = new GameObject.Person(this.game, 0, this.game.height / 2);
        }
    }
}