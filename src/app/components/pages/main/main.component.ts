import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pokeData = null;
  open = false;

  constructor() { }

  ngOnInit(): void {

  }

  onOpenDetails(e) {

    this.pokeData = e;
    this.open = true;
  }

  onCloseDetails() {
    this.open = false;

  }

}
