module State {
    export class GamePLayState extends Phaser.State {
        balloon: GameObject.Balloon;
        player: GameObject.Player;
        game: Phaser.Game;
        backgroundGamePLay: Phaser.Sprite;
        person: GameObject.Person;
        group; 
        constructor() {
            super();
        }


        create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
            //-1 for going left, 1 for right

            this.player = new GameObject.Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);

            this.person = new GameObject.Person(this.game, 0, (this.game.height /2));
            this.game.add.existing(this.person);

            this.group = this.game.add.group();

            for (var i = 0; i < 76; i++) {
                this.group.add(new GameObject.Balloon(this.game, i*24, 0, 1));   
            }

        }

        update()
        {
            if(this.game.physics.arcade.overlap(this.player, this.person))
                super.update();
        }
    }
}