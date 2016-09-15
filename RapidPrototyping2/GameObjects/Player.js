var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject;
(function (GameObject) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["PLAY"] = 1] = "PLAY";
        PlayerState[PlayerState["DEATH"] = 2] = "DEATH";
    })(GameObject.PlayerState || (GameObject.PlayerState = {}));
    var PlayerState = GameObject.PlayerState;
    ;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, i_X, i_Y) {
            _super.call(this, game, i_X, i_Y, "HERO_WALKING", 0);
            this.game = game;
            this.Right_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.Right_Arrow.onDown.add(Player.prototype.MoveRight, this);
            this.Left_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.Left_Arrow.onDown.add(Player.prototype.MoveLeft, this);
            this.Esc_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.Esc_key.onDown.add(Player.prototype.QuitGame, this);
            this.anchor.set(0.0, 1.0);
            this.StartPoint();
        }
        Player.prototype.update = function () {
            if (this.Right_Arrow.isDown) {
                this.MoveRight();
            }
            if (this.Left_Arrow.isDown) {
                this.MoveLeft();
            }
        };
        Player.prototype.MoveRight = function () {
            //add function to move right
            this.x += 8;
            if (this.x + this.width > this.game.width)
                this.x = this.game.width - this.width;
        };
        Player.prototype.MoveLeft = function () {
            //add function to move left
            this.x -= 8;
            if (this.x < 0)
                this.x = 0;
        };
        Player.prototype.QuitGame = function () {
            // code to exit the game
        };
        Player.prototype.StartPoint = function () {
            //define Starting point of game
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.playerState = PlayerState.PLAY;
            this.speed = 5;
            // player = this.game.add.sprite(this.game.width / 2, this.game.height - 50,"playerObject");
            this.loadTexture("playerObject");
            this.animations.add("PLAY");
            this.animations.play("PLAY", 0, true);
        };
        return Player;
    }(Phaser.Sprite));
    GameObject.Player = Player;
})(GameObject || (GameObject = {}));
//# sourceMappingURL=Player.js.map