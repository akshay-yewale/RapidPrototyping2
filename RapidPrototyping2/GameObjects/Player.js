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
    var PLayer = (function (_super) {
        __extends(PLayer, _super);
        function PLayer(game, i_X, i_Y) {
            _super.call(this, game, i_X, i_Y, "", 0);
            this.game = game;
            this.Right_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.Right_Arrow.onDown.add(PLayer.prototype.MoveRight, this);
            this.Left_Arrow = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.Left_Arrow.onDown.add(PLayer.prototype.MoveLeft, this);
            this.Esc_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.Esc_key.onDown.add(PLayer.prototype.QuitGame, this);
            this.anchor.set(0.0, 1.0);
            this.StartPoint();
        }
        PLayer.prototype.MoveRight = function () {
            //add function to move right
        };
        PLayer.prototype.MoveLeft = function () {
            //add function to move left
        };
        PLayer.prototype.QuitGame = function () {
            // code to exit the game
        };
        PLayer.prototype.StartPoint = function () {
            //define Starting point of game
        };
        return PLayer;
    }(Phaser.Sprite));
    GameObject.PLayer = PLayer;
})(GameObject || (GameObject = {}));
//# sourceMappingURL=Player.js.map