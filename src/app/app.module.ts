import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { LibraryComponent } from './components/library/library.component';
import { TrackDiscoveryService } from './services/track-discovery/track-discovery.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TrackDiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
