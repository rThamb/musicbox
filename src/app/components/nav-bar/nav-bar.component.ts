import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public header: string;
  constructor() {
    this.header = 'Home';
  }

  ngOnInit() {
  }

  setHeader(header){
    this.header = header;
  }

}
