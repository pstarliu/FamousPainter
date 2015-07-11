import painterMod = require('painter');
import iniMod = require('initializer');

export class PaintLoader {
    constructor(public url: string) { }

    load() {
        // debug code
        //var info = (<HTMLDivElement> document.getElementById('debugInfo'));
        //info.innerHTML += 'initial inside load <br />';

        try {
            $.getJSON(this.url,(data) => {
                this.mapData(data);
                //iniMod.renderer.renderInfo('load one');
                //iniMod.renderer.renderInfo(data.famousPainters[0].name);
            });
        }
        catch (ex) {
            alert(ex.message);
        }
    }

    mapData(data) {
        // debug code
        //var info = (<HTMLDivElement> document.getElementById('debugInfo'));
        //info.innerHTML += 'map data initial <br />';

        if (data) {
            // debug code
            //info.innerHTML += 'Yeah, we have data<br />';

            var painters: painterMod.Painter[] = data.famousPainters;

            iniMod.painters = [];

            painters.forEach(p => {
                var painter = new painterMod.Painter(p);
                iniMod.painters.push(painter);
            });

            //Render the painters into the select
            iniMod.renderer.renderPainters(painters);
        }
        else {
            iniMod.renderer.renderError();
        }
    }
} 