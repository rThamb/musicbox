import { Component, OnInit } from '@angular/core';
import { GenreRepoService } from '../../services/genre-repo/genre-repo.service'
import { Genre } from '../../models/genre.js'; 


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  private genres: Genre[];

  constructor(public genreRepo: GenreRepoService) { 
    this.genres = genreRepo.getAllGenre();
  }

  ngOnInit() {
  }

  getAllGenres(){

  }

}
