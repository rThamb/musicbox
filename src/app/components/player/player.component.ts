import { Component, OnInit, ViewChild } from '@angular/core';
import { TrackDiscoveryService } from '../../services/track-discovery/track-discovery.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private videoId: String;

  constructor(public trackFinder: TrackDiscoveryService) {}

  ngOnInit() {}

  setVideoId(videoId){
    this.videoId = videoId;
  }

  outsidePlayEvent(){ 

    debugger;
    this.trackFinder.findTrackVideo('Just Hold On', "Drake");
    var id = "QYkUk3MyIJY";
    this.playSong(id);
  }

  playSong(videoId){
    var url = "https://www.youtube.com/watch?v=" + videoId;
	  var handle = window.open(url, "s", "width= 350, height= 50, left=1125, top=768, resizable=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no");
  }
  
}
