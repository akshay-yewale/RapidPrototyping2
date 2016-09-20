module GameObject {
    export class Balloon extends Phaser.Sprite {
        game: Phaser.Game;
        movingSpeed: number;
        direction: number;

        constructor(game: Phaser.Game, x: number, y: number, direction: number)
        {
            super(game, x, y, "balloon", 0);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.body.velocity.setTo(100*direction,0);
        }

        update()
        {
            if (this.x > this.game.width)
                this.x = 0;
            super.update();
        }
    }
}