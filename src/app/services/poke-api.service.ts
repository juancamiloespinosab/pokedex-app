import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private API_URL: string = 'https://pokeapi.co/api/v2';
  private LIMIT: number = 50;
  private nextQuery: string = '';


  constructor(private http: HttpClient) { }

  async getAllPokemons(offset) {
    let pokeList = [];

    let uri = `${this.API_URL}/pokemon?limit=${this.LIMIT}&offset=${offset}`;
    let response = (await this.httpRequest(uri)).results;

    for (let element of response) {
      let pokemon = await this.httpRequest(element.url);

      let poke = {
        id: pokemon.id,
        info: `#${pokemon.id} - ${pokemon.name.toUpperCase()}`,
        imgUrl: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.slice(0, 2),
        abilities: pokemon.abilities,
        stats: pokemon.stats
      }

      pokeList.push(poke)
    }



    return pokeList;
  }

  getPokemon(keywordOrId) {
    let uri = `${this.API_URL}/pokemon/${keywordOrId}`;

  }

  async httpRequest(uri: string) {
    let response;

    let promise = this.http.get(uri).toPromise();
    await promise.then(data => {
      response = data

    })

    return response;
  }
}
