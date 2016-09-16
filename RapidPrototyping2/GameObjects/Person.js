var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject;
(function (GameObject) {
    (function (PersonState) {
        PersonState[PersonState["STARTING"] = 0] = "STARTING";
        PersonState[PersonState["INAIR"] = 1] = "INAIR";
        PersonState[PersonState["DEAD"] = 2] = "DEAD";
    })(GameObject.PersonState || (GameObject.PersonState = {}));
    var PersonState = GameObject.PersonState;
    var Person = (function (_super) {
        __extends(Person, _super);
        function Person(game, x, y) {
            _super.call(this, game, x, y, "HERO_WALKING", 0);
            this.game = game;
            this.fallingSpeed = 0;
            this.anchor.set(0.0, 1.0);
            this.StartAnimation();
            this.StartPhysics();
        }
        Person.prototype.update = function () {
            if (this.position.y > this.game.height - 1) {
                this.DeadPhysics();
            }
            this.game.physics.arcade.overlap(this, GameObject.Player);
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
            this.body.velocity.setTo(90, 240);
            this.body.collideWorldBounds = true;
            this.body.checkCollision.down = false;
            this.body.gravity.set(0, 180);
        };
        Person.prototype.DeadPhysics = function () {
            this.animations.stop();
            this.body.velocity.setTo(0, 0);
            this.game.physics.enable(false);
        };
        Person.MAX_SPEED = 100;
        return Person;
    }(Phaser.Sprite));
    GameObject.Person = Person;
})(GameObject || (GameObject = {}));
