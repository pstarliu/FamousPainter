import painterMod = require('painter');
import painterLoaderMod = require('paintLoader');
import rendererMod = require('renderer');

export var painters: painterMod.Painter[]
export var renderer: rendererMod.Renderer = null;

(() => {
    var painterSelect = (<HTMLSelectElement> document.getElementById('FamousPainter'));

    painterSelect.onchange = (e) => loadPainters();

    var loader = new painterLoaderMod.PaintLoader('JSON/famousPainters.json');

    loader.load();

    renderer = new rendererMod.Renderer();

    //renderer.renderInfo('Finished initialize');
})();

function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('FamousPainter'));
    
    // debug code
    //var info = (<HTMLDivElement> document.getElementById('debugInfo'));
    //info.innerHTML += 'load painters initial <br />';

    try {
        var painter = painters
            .filter(p => p.name === el.value)[0];

        //info.innerHTML += 'load painter ' + painter.name +  ' <br />';
        renderer.renderPainter(painter);
    }
    catch (ex) { alert(ex.message) }

    //info.innerHTML += 'load painters finished <br />';
}
