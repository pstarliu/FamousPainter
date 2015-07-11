define(["require", "exports"], function (require, exports) {
    var Painter = (function () {
        function Painter(painter) {
            this.name = painter.name;
            this.style = painter.style;
            this.examples = painter.examples;
            this.birthplace = painter.birthplace;
            this.birthdate = painter.birthdate;
            this.nationality = painter.nationality;
        }
        return Painter;
    })();
    exports.Painter = Painter;
});
//# sourceMappingURL=painter.js.map