var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var State;
(function (State) {
    var TitleScreeen = (function (_super) {
        __extends(TitleScreeen, _super);
        function TitleScreeen() {
            _super.call(this);
        }
        TitleScreeen.prototype.create = function () {
            this.titleScreenImage = this.add.sprite(0, 0, "titleScreen");
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height / this.titleScreenImage.height);
        };
        return TitleScreeen;
    }(Phaser.State));
    State.TitleScreeen = TitleScreeen;
})(State || (State = {}));
//# sourceMappingURL=TitleScreen.js.map