export class Serie{
    id: number;
    title: string;
    productor: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
    constructor(idE: number, titleE: string, productorE: string, seasonsE: number, descriptionE: string, linkE: string, imageE: string){
        this.id = idE;
        this.title = titleE;
        this.productor = productorE;
        this.seasons = seasonsE;
        this.description = descriptionE;
        this.link = linkE;
        this.image = imageE;
    }
}