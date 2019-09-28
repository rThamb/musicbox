import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule } from '@angular/forms';

//App specific Items
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { LibraryComponent } from './components/library/library.component';
import { TrackDiscoveryService } from './services/track-discovery/track-discovery.service';
import { GenreComponent } from './components/genre/genre.component';
import { GenreEntityComponent } from './components/genre-entity/genre-entity.component';
import { TrackEntityComponent } from './components/track-entity/track-entity.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LibraryComponent,
    GenreComponent,
    GenreEntityComponent,
    TrackEntityComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrackDiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
