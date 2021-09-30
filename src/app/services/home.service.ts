import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getChoiceFromComputer(): string {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

}
