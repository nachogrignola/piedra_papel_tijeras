import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  message = ''

  userShot = ''

  color = ''

  result: {
    user: string;
    computer: string;
    message: string;
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


  play = () => {
  
    const USER = this.serviceHome.getChoiceFromComputer()
    const COMPUTER = this.serviceHome.getChoiceFromComputer()
    this.resultado(USER, COMPUTER)
  }

  resultado = (user:string, computer:string) => {

    //para comprobar respuesta
    const choises = `${user}${computer}`

    //traducir mensaje
    const pc = this.traductor(computer)
    const u = this.traductor(user)

    switch (choises) {
      case 'rs':
      case 'sp':
      case 'pr':
        this.userShot = `Te toco: ${u}`
        this.message = `Ganaste, la computadora eligio ${pc}`
        this.color = 'success'
        this.result = {
          user: user,
          computer: computer,
          message: 'Ganaste'
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        this.userShot = `Te toco: ${u}`
        this.message = `Perdiste, la computadora eligio ${pc}`
        this.color = 'danger'
        this.result = {
          user: user,
          computer: computer,
          message: 'Perdiste'
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        this.message = 'Empate, no esta tan mal..'
        this.color = 'warning'
        this.result = {
          user: user,
          computer: computer,
          message: 'Empate'
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
