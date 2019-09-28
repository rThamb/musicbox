import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../models/genre';
import { GenreRepoService } from '../../services/genre-repo/genre-repo.service';


@Component({
  selector: 'app-genre-entity',
  templateUrl: './genre-entity.component.html',
  styleUrls: ['./genre-entity.component.css']
})
export class GenreEntityComponent implements OnInit {

  public genre: Genre;
  
  @Input() 
  private currentGenre: Genre[];

  constructor(public genreRepo: GenreRepoService) { 
    this.genre = new Genre('');
  }

  ngOnInit() {
  }

  addGenre(){
    this.genreRepo.addGenre(this.genre);
    this.currentGenre.push(this.genre);
  }

}
