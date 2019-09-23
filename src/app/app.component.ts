import { Component, ViewChild } from '@angular/core';
import { PlayerComponent } from './components/player/player.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicbox';

  //@ViewChild(app-player) child: PlayerComponent;

}
