import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { LibraryComponent } from './components/library/library.component';
import { TrackDiscoveryService } from './services/track-discovery/track-discovery.service';
import { GenreComponent } from './components/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LibraryComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TrackDiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
