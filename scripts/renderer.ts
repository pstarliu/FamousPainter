import painterMod = require('painter');

export class Renderer {

    renderPainter(painter: painterMod.Painter) {
        
        //Update description
        var el = <HTMLDivElement> document.getElementById('painterDesc');
        el.innerHTML = "<b>Born: &nbsp;</b>" + painter.birthdate + "</br>";
        el.innerHTML += "<b>Birthpalce: &nbsp;</b>" + painter.birthplace + "</br>";
        el.innerHTML += "<b>Nationality: &nbsp;</b>" + painter.nationality + "</br>";
        el.innerHTML += "<b>Style: &nbsp;</b>" + painter.style;

        var courselExamples = <HTMLDivElement> document.getElementById('carousel-inner-examples');
        var counter = 0;

        courselExamples.innerHTML = '';
        painter.examples.forEach(e => {
            var item: HTMLDivElement = document.createElement("div");
            if (counter++ == 0)
                item.className = "item active";
            else {
                item.className = "item";
            }
            var img: HTMLImageElement = document.createElement("img");
            img.alt = e.name;
            img.src = e.thumbnail;
            img.className = "img-responsive";
            var caption: HTMLDivElement = document.createElement("div");
            caption.className = "carousel-caption";
            caption.innerHTML += '<h3>' + e.name + '(' + e.year + ')' + '</h3>';
            item.appendChild(img);
            item.appendChild(caption);
            courselExamples.appendChild(item);
        });
    }

    renderPainters(painters: painterMod.Painter[]) {
        var painterSelect = (<HTMLSelectElement> document.getElementById('FamousPainter'));
        painters.forEach(p => {
            var opt = document.createElement('option');
            opt.setAttribute('name', p.name);
            opt.innerHTML = p.name;
            painterSelect.appendChild(opt);
        });
    }

    renderError() {
        var examples = (<HTMLDivElement> document.getElementById('examples'));
        examples.innerHTML = 'Unable to load data!';
    }

    renderInfo(text: string) {
        var info = (<HTMLDivElement> document.getElementById('debugInfo'));
        info.innerHTML += text + '<br />';
    }
}  
