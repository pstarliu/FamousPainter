import interfaceMod = require('interfaces');

export class Painter implements interfaceMod.IPainter {
    //birthplace, nationality, and birthdate of the painter
    //"name": "Michelangelo",
    //"style:": "Renaissance",
    //"examples: ": ["David", "Sistine Chapel", "The Last Judgement"]
    name: string;
    style: string;
    examples: interfaceMod.IExample[]
    birthplace: string;
    nationality: string;
    birthdate: Date;

    constructor(painter: interfaceMod.IPainter) {
        this.name = painter.name;
        this.style = painter.style;
        this.examples = painter.examples;
        this.birthplace = painter.birthplace;
        this.birthdate = painter.birthdate;
        this.nationality = painter.nationality;
    }
} 