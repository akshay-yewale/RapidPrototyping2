var Game;
(function (Game) {
    var RapidPrototyping2 = (function () {
        function RapidPrototyping2() {
            this.game = new Phaser.Game(1820, 920, Phaser.AUTO, 'content', {
                create: create,
                preload: preload,
            });
            function preload() {
            }
            function create() {
            }
        }
        return RapidPrototyping2;
    }());
    Game.RapidPrototyping2 = RapidPrototyping2;
    window.onload = function () {
        var game = new Game.RapidPrototyping2();
    };
})(Game || (Game = {}));
//# sourceMappingURL=app.js.map