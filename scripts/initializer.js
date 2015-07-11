define(["require", "exports", 'paintLoader', 'renderer'], function (require, exports, painterLoaderMod, rendererMod) {
    exports.painters;
    exports.renderer = null;
    (function () {
        var painterSelect = document.getElementById('FamousPainter');
        painterSelect.onchange = function (e) { return loadPainters(); };
        var loader = new painterLoaderMod.PaintLoader('JSON/famousPainters.json');
        loader.load();
        exports.renderer = new rendererMod.Renderer();
        //renderer.renderInfo('Finished initialize');
    })();
    function loadPainters() {
        var el = document.getElementById('FamousPainter');
        try {
            var painter = exports.painters.filter(function (p) { return p.name === el.value; })[0];
            //info.innerHTML += 'load painter ' + painter.name +  ' <br />';
            exports.renderer.renderPainter(painter);
        }
        catch (ex) {
            alert(ex.message);
        }
        //info.innerHTML += 'load painters finished <br />';
    }
});
//# sourceMappingURL=initializer.js.map