var Game;
(function (Game) {
    var RapidPrototyping2 = (function () {
        function RapidPrototyping2() {
            this.game = new Phaser.Game(1820, 920, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        RapidPrototyping2.prototype.preload = function () {
            this.game.load.image("titleScreen", "/Content/Images/titleScreen.png");
            this.game.load.image("backgroundGamePLay", "/Content/Images/gamePlayBackground.png");
            this.game.load.image("playerObject", "/Content/Images/PlayerObject.png");
            //Spritesheets
            this.game.load.atlasXML("HERO_WALKING", "/Content/Images/Hero_Walking.png", "/Content/Images/Hero_Walking.xml");
        };
        RapidPrototyping2.prototype.create = function () {
            this.game.state.add("TitleScreen", State.TitleScreeen, true);
            this.game.state.add("GamePLayState", State.GamePLayState, false);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return RapidPrototyping2;
    }());
    Game.RapidPrototyping2 = RapidPrototyping2;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.RapidPrototyping2();
};
//# sourceMappingURL=app.js.map