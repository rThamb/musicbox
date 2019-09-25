import { Injectable } from '@angular/core';
import { Track } from '../../models/track.js'; 

@Injectable({
  providedIn: 'root'
})
export class TrackRepoService {

  private tracks: Track[];

  constructor() { 
    this.tracks = [];
    this.tracks.push(new Track('Just Hold On', 'Drake', 'QKYkZnxZ3ZA', 'hip-hop'));
    this.tracks.push(new Track('Empire State of Mind', 'JayZ', 'an3UERXQv2s', 'hip-hop'));
    this.tracks.push(new Track('Butterfly Effect', 'Travis Scott', 'SiWVfhECEGQ', 'hip-hop'));
    this.tracks.push(new Track('Sicko Mode', 'Travis Scott', 'd-JBBNg8YKs', 'hip-hop'));
  }

  addTrack(track: Track): void{
  }

  deleteTrack(track: Track): void{
  }

  getAllTracks(): Track[]{
    return this.tracks;
  }

  getTrackByCategory(category: string): Track[]{
    return this.tracks;
  }






}
