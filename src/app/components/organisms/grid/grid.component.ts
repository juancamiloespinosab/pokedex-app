import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { PokeApiService } from 'src/app/services/poke-api.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  totalPages: number = 0;
  actualPage: number = 0;
  pokeDataList = [];

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  async getAllPokemons() {
    let pokeList = await this.pokeApiService.getAllPokemons(this.actualPage);
    this.actualPage += this.pokeApiService.LIMIT;

    pokeList.forEach(element => {
      this.pokeDataList.push(element)

    })
  }


  onScroll() {
    this.getAllPokemons()

  }
}


