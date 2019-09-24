import { Injectable } from '@angular/core';
import { Track } from '../../models/track.js'; 

@Injectable({
  providedIn: 'root'
})
export class TrackRepoService {

  private tracks: Track[];

  constructor() { 
    this.tracks = [];
    this.tracks.push(new Track('Hold on', 'drake', 'xxxx', 'hip-hop'));
    this.tracks.push(new Track('Butterfly', 'Scott', 'xxxx', 'hip-hop'));
    this.tracks.push(new Track('Empire', 'Jz', 'xxxx', 'hip-hop'));
    this.tracks.push(new Track('Hn', 'yolo', 'xxxx', 'hip-hop'));
  }

  addTrack(track: Track): void{
  }

  deleteTrack(track: Track): void{
  }

  getAllTracks(): Track[]{
    return this.tracks;
  }

  getTrackByCategory(category: string): Track[]{
    return null;
  }






}
