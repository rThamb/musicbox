import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { TrackDiscoveryService } from '../../services/track-discovery/track-discovery.service';

//Classe using, Repo Service
import { TrackRepoService } from '../../services/track-repo/track-repo.service';
import {Track } from '../../models/track.js';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  //value is set by the parent component
  videoId: String;

  constructor(public trackRepo: TrackRepoService) {}

  ngOnInit() {}

  setVideoId(videoId){
    this.videoId = videoId;
  }

  playSong(videoId){
    var url = "https://www.youtube.com/watch?v=" + videoId;
	  var handle = window.open(url, "s", "width= 350, height= 50, left=1125, top=768, resizable=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no");
  }

  test(){
    let tracks = this.trackRepo.getAllTracks();
    debugger;
    console.log(tracks);
  }
  
}
