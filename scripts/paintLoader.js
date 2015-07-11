define(["require", "exports", 'painter', 'initializer'], function (require, exports, painterMod, iniMod) {
    var PaintLoader = (function () {
        function PaintLoader(url) {
            this.url = url;
        }
        PaintLoader.prototype.load = function () {
            // debug code
            //var info = (<HTMLDivElement> document.getElementById('debugInfo'));
            //info.innerHTML += 'initial inside load <br />';
            var _this = this;
            try {
                $.getJSON(this.url, function (data) {
                    _this.mapData(data);
                    //iniMod.renderer.renderInfo('load one');
                    //iniMod.renderer.renderInfo(data.famousPainters[0].name);
                });
            }
            catch (ex) {
                alert(ex.message);
            }
        };
        PaintLoader.prototype.mapData = function (data) {
            // debug code
            //var info = (<HTMLDivElement> document.getElementById('debugInfo'));
            //info.innerHTML += 'map data initial <br />';
            if (data) {
                // debug code
                //info.innerHTML += 'Yeah, we have data<br />';
                var painters = data.famousPainters;
                iniMod.painters = [];
                painters.forEach(function (p) {
                    var painter = new painterMod.Painter(p);
                    iniMod.painters.push(painter);
                });
                //Render the painters into the select
                iniMod.renderer.renderPainters(painters);
            }
            else {
                iniMod.renderer.renderError();
            }
        };
        return PaintLoader;
    })();
    exports.PaintLoader = PaintLoader;
});
//# sourceMappingURL=paintLoader.js.map