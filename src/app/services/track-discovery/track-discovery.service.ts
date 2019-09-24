import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackDiscoveryService {

  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = ""; 
   }

  findTrackVideo(title: string, author: string){
    //spaces need to be replace with +
    var searchTerm = (title  + "By: " + author).split(' ').join('+');
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ searchTerm + "&type=video&key=" + this.apiKey;
    debugger;
    this.http.get(url).subscribe(
      (data: any) => {
          let vidIdFound = data.items[0].id.videoId;
      });
  }


}
