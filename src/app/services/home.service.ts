import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  images = [{
    src:'/assets/images/piedra.png',
    alt:'rock',
    click:'r'
    },
    {
      src:'/assets/images/papel.png',
      alt:'paper',
      click:'p'
    },
    {
        src:'/assets/images/tijeras.png',
        alt:'scissors',
        click:'s'
    }
  ]
  getChoiceFromComputer(): string {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  getImages(){
    return this.images;
  }

}
