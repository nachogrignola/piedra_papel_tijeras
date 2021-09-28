import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  message = ''

  color = ''

  result: {
    message: string;
    user: string;
    computer: string;
  }

  images = [
    {
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

  constructor(private serviceHome: HomeService) { }

  ngOnInit() {}


  play = (user:string) => {
  
    const COMPUTER = this.serviceHome.getChoiceFromComputer()
    const USER = user
    this.resultado(USER, COMPUTER);
  }

  resultado = (user:string, computer:string) => {

    //para comprobar respuesta
    const choises = `${user}${computer}`

    //traducir mensaje
    const pc = this.traductor(computer)

    switch (choises) {
      case 'rs':
      case 'sp':
      case 'pr':
        this.message = `Ganaste, la computadora eligio ${pc}`
        this.color = 'success'
        this.result = {
          message: 'Ganaste',
          user: user,
          computer: computer
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        this.message = `Perdiste, la computadora eligio ${pc}`
        this.color = 'danger'
        this.result = {
          message: 'Perdiste',
          user: user,
          computer: computer
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        this.message = 'Empate, no esta tan mal..'
        this.color = 'warning'
        this.result = {
          message: 'Empate',
          user: user,
          computer: computer
        };
        break;
      }
  }

  traductor = (value:string) => {

    const dic = {
      r:'piedra',
      p:'papel',
      s:'tijeras'
    }

    return dic[value] 

  }

}
