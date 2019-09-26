import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './components/genre/genre.component';
import { LibraryComponent } from './components/library/library.component'


const routes: Routes = [
    {path: 'library/:t', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const RoutingComponents = [GenreComponent, LibraryComponent]