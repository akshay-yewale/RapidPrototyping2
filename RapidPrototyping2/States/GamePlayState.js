var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var State;
(function (State) {
    var GamePLayState = (function (_super) {
        __extends(GamePLayState, _super);
        function GamePLayState() {
            _super.call(this);
        }
        GamePLayState.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
            this.player = new GameObject.Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);
            this.person = new GameObject.Person(this.game, 0, (this.game.height / 2));
            this.game.add.existing(this.person);
        };
        GamePLayState.prototype.update = function () {
            if (this.game.physics.arcade.overlap(this.player, this.person))
                _super.prototype.update.call(this);
        };
        return GamePLayState;
    }(Phaser.State));
    State.GamePLayState = GamePLayState;
})(State || (State = {}));
