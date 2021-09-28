import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  images = [
    {
    src:'/assets/images/piedra.png',
    alt:'rock',
    click:'rock'
    },
    {
      src:'/assets/images/papel.png',
      alt:'paper',
      click:'paper'
    },
    {
        src:'/assets/images/tijeras.png',
        alt:'scissors',
        click:'scissors'
    }
]

  constructor() { }

  ngOnInit() {}


  play = (jugo:string) => console.log(jugo)

}
