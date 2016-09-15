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
            //Starts walking animation
            super(game, x, y, "HERO_WALKING", 0);
        }

    }
}