import { Injectable } from '@angular/core';
import { Genre } from '../../models/genre.js'; 
import { Track } from '../../models/track.js'; 


@Injectable({
  providedIn: 'root'
})
export class GenreRepoService {

  private genres: Genre[];

  constructor() { 
    this.genres = []; 
    this.genres.push(new Genre("hip-hop"));
    this.genres.push( new Genre("Late Night Drive"));
  }

  getAllGenre(): Genre[]{
    return this.genres; 
  }

}
