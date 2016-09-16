module GameObject {
    //Person status
    export enum PersonState { STARTING, INAIR, DEAD }

    export class Person extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PersonState
        // Contains person speed
        fallingSpeed: number;
        //Make sure person doesnt bounce to much
        public static MAX_SPEED: number = 100;
        //Constructon gets game and coords
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "HERO_WALKING", 0);
            this.game = game;
            this.fallingSpeed = 0;
            //Starts walking animation
            this.anchor.set(0.0, 1.0);
            this.StartAnimation();
            this.StartPhysics();


        }

        update() {
            if (this.position.y > this.game.height - 1)
            {
                //Put in death state here
                this.DeadPhysics();
            }
            this.game.physics.arcade.overlap(this, GameObject.Player);
            super.update();
        }

        StartAnimation() {
            this.scale.setTo(0.5, 0.5);
            this.playerState = PersonState.STARTING;
            this.fallingSpeed = 50;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.fallingSpeed, true);         
        }

        StartPhysics()
        {
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            //  This gets it moving
            this.body.velocity.setTo(90, 240);
            //  This makes the game world bounce-able
            this.body.collideWorldBounds = true;
            this.body.checkCollision.down = false;
            //  This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
            //this.body.bounce.set(1.01);
            this.body.gravity.set(0, 180);
        }

        DeadPhysics()
        {
            this.animations.stop();
            this.body.velocity.setTo(0, 0);
            this.game.physics.enable(false); 
        }

    }
}