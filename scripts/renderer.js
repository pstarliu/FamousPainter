define(["require", "exports"], function (require, exports) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainter = function (painter) {
            //Update description
            var el = document.getElementById('painterDesc');
            el.innerHTML = "<b>Born: &nbsp;</b>" + painter.birthdate + "</br>";
            el.innerHTML += "<b>Birthpalce: &nbsp;</b>" + painter.birthplace + "</br>";
            el.innerHTML += "<b>Nationality: &nbsp;</b>" + painter.nationality + "</br>";
            el.innerHTML += "<b>Style: &nbsp;</b>" + painter.style;
            var courselExamples = document.getElementById('carousel-inner-examples');
            var counter = 0;
            courselExamples.innerHTML = '';
            painter.examples.forEach(function (e) {
                var item = document.createElement("div");
                if (counter++ == 0)
                    item.className = "item active";
                else {
                    item.className = "item";
                }
                var img = document.createElement("img");
                img.alt = e.name;
                img.src = e.thumbnail;
                img.className = "img-responsive";
                var caption = document.createElement("div");
                caption.className = "carousel-caption";
                caption.innerHTML += '<h3>' + e.name + '(' + e.year + ')' + '</h3>';
                item.appendChild(img);
                item.appendChild(caption);
                courselExamples.appendChild(item);
            });
        };
        Renderer.prototype.renderPainters = function (painters) {
            var painterSelect = document.getElementById('FamousPainter');
            painters.forEach(function (p) {
                var opt = document.createElement('option');
                opt.setAttribute('name', p.name);
                opt.innerHTML = p.name;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderError = function () {
            var examples = document.getElementById('examples');
            examples.innerHTML = 'Unable to load data!';
        };
        Renderer.prototype.renderInfo = function (text) {
            var info = document.getElementById('debugInfo');
            info.innerHTML += text + '<br />';
        };
        return Renderer;
    })();
    exports.Renderer = Renderer;
});
//# sourceMappingURL=renderer.js.map