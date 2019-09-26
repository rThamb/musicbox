export class Track {

    public title: string;
    public authour: string;
    public videoId: string;
    public category: string;

    constructor(title: string, author: string, vid: string, cate: string) { 
        this.title = title;
        this.authour = author; 
        this.videoId = vid;
        this.category = cate;
    }
}
