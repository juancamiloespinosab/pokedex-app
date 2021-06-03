import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorTypeService {

  constructor() { }

  async getJSON() {
    let response;

    await fetch('../../assets/types/color.json')
      .then(response => response.json())
      .then(data => {
        response = data;
      });

    return response;
  }

}
