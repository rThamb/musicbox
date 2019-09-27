import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genre-entity',
  templateUrl: './genre-entity.component.html',
  styleUrls: ['./genre-entity.component.css']
})
export class GenreEntityComponent implements OnInit {

  public genre: Genre; 

  constructor() { 
    this.genre = new Genre('');
  }

  ngOnInit() {
  }

  addGenre(){
    alert("Add " + this.genre.name);
  }

}
