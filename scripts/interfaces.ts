export interface IPainter {
    name: string;
    style: string;
    examples: IExample[];
    birthplace: string;
    nationality: string;
    birthdate: Date;
}

export interface IExample {
    name: string;
    year: string;
    url: string;
    thumbnail: string;
}
