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
            this.backgroundGamePLay = this.add.sprite(0, 0, "backgroundGamePLay");
            this.backgroundGamePLay.scale.setTo(this.game.width / this.backgroundGamePLay.width, this.game.height / this.backgroundGamePLay.height);
        };
        return GamePLayState;
    }(Phaser.State));
    State.GamePLayState = GamePLayState;
})(State || (State = {}));
//# sourceMappingURL=GamePlayState.js.map