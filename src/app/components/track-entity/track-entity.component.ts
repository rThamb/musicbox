import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/track'
import { TrackDiscoveryService } from '../../services/track-discovery/track-discovery.service';
import { TrackRepoService } from '../../services/track-repo/track-repo.service';


@Component({
  selector: 'app-track-entity',
  templateUrl: './track-entity.component.html',
  styleUrls: ['./track-entity.component.css']
})
export class TrackEntityComponent implements OnInit {

  @Input() genre: string;
  @Input() currentLibrary: Track[];

  public track: Track; 

  constructor(public trackFinder: TrackDiscoveryService, public trackRepo: TrackRepoService) { 
    this.track = new Track('','','', ''); 
  }

  ngOnInit() {
  }

  addTrack(){
    debugger;
    this.trackFinder.findTrackVideo(this.track.title, this.track.authour).subscribe(
      (data: any) => {
        console.log(data);
          this.track.videoId = this.trackFinder.reponseVideoIdParser(data);
          this.track.category = this.genre;
          this.writeIntoRepo(); 
      });
      
    //displaly spinner
  }

  writeIntoRepo(){
    this.trackRepo.addTrack(this.track);
    this.currentLibrary.push(this.track);
    this.track = new Track('','','','');
    //write
    //reload
    //turn off spinner.
  }

}
