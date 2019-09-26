import { Component, OnInit, ViewChild  } from '@angular/core';
//Classe using, Repo Service
import { TrackRepoService } from '../../services/track-repo/track-repo.service';
import {Track } from '../../models/track.js';

import {PlayerComponent } from '../player/player.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  private category: string;

  //view should be binded to this
  private songs: Track[];
  
  @ViewChild(PlayerComponent, {static: false}) player: PlayerComponent;

  constructor(private route: ActivatedRoute, public trackRepo: TrackRepoService) {
    let genre = this.route.snapshot.paramMap.get('t');
    this.category = genre; 
    this.songs = trackRepo.getAllTracks();
   }


  ngOnInit() {
  }

  setCategory(category: string){
    this.category = category;
    this.songs = this.trackRepo.getTrackByCategory(category);
  }


  playSongTest(){
    var id = 'an3UERXQv2s';
    this.player.playSong(id);
  }

  playSong(track: Track){
    this.player.playSong(track.videoId);
  }

}
