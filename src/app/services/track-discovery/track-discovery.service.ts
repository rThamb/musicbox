import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackDiscoveryService {

  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = ""; 
   }

  findTrackVideo(title: string, author: string): any{
    //spaces need to be replace with +
    var searchTerm = (title  + " " + author + " official audio").split(' ').join('+');
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ searchTerm + "&type=video&key=" + this.apiKey;
    return this.http.get(url); 
  }

  reponseVideoIdParser(data): string{
    return data.items[0].id.videoId;
  }


}
