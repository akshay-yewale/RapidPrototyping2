var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject;
(function (GameObject) {
    //Person status
    (function (PersonState) {
        PersonState[PersonState["STARTING"] = 0] = "STARTING";
        PersonState[PersonState["INAIR"] = 1] = "INAIR";
        PersonState[PersonState["DEAD"] = 2] = "DEAD";
    })(GameObject.PersonState || (GameObject.PersonState = {}));
    var PersonState = GameObject.PersonState;
    var Person = (function (_super) {
        __extends(Person, _super);
        //Constructon gets game and coords
        function Person(game, x, y) {
            _super.call(this, game, x, y, "HERO_WALKING", 0);
            this.game = game;
            this.fallingSpeed = 0;
            //Starts walking animation
            this.anchor.set(0.0, 1.0);
            this.StartAnimation();
            this.StartPhysics();
        }
        Person.prototype.update = function () {
            if (this.position.y > this.game.height - 1) {
                //Put in death state here
                this.DeadPhysics();
            }
            _super.prototype.update.call(this);
        };
        Person.prototype.StartAnimation = function () {
            this.scale.setTo(0.5, 0.5);
            this.playerState = PersonState.STARTING;
            this.fallingSpeed = 50;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.fallingSpeed, true);
        };
        Person.prototype.StartPhysics = function () {
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            //  This gets it moving
            this.body.velocity.setTo(90, 240);
            //  This makes the game world bounce-able
            this.body.collideWorldBounds = true;
            this.body.checkCollision.down = false;
            //  This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
            //this.body.bounce.set(1.01);
            this.body.gravity.set(0, 180);
        };
        Person.prototype.DeadPhysics = function () {
            this.animations.stop();
            this.body.velocity.setTo(0, 0);
            this.game.physics.enable(false);
        };
        //Make sure person doesnt bounce to much
        Person.MAX_SPEED = 100;
        return Person;
    }(Phaser.Sprite));
    GameObject.Person = Person;
})(GameObject || (GameObject = {}));
//# sourceMappingURL=Person.js.map