import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { HomeService } from 'src/app/services/home.service';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  message = ''

  userShot = ''

  color = ''

  results = []

  images = []

  empty = true

  constructor(private serviceHome: HomeService, private resultService: ResultService) { 
   this.images = this.serviceHome.getImages();
   this.resultService.deleteResults().subscribe();
  }

  ngOnInit() {

  }

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
        this.enviar(u,pc,'Ganaste');
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        this.userShot = `Te toco: ${u}`
        this.message = `Perdiste, la computadora eligio ${pc}`
        this.color = 'danger'
        this.enviar(u,pc,'Perdiste');
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        this.userShot = `Te toco: ${u}`
        this.message = 'Empate, no esta tan mal..'
        this.color = 'warning'
        this.enviar(u,pc,'Empate');
        break;
      }
  }

  traductor = (value:string) => {
    const dic = {
      r:'piedra',
      p:'papel',
      s:'tijera'
    }
    return dic[value] 
  }

  enviar = (u:string, pc:string, message:string) => {
    let result = new Result(u,pc, message);
    this.resultService.saveResult(result).subscribe()
    this.getResults()
    this.empty = false;
   }

   getResults(){
    this.resultService.getResult().subscribe(data => {
      this.results = data;
    })
   }

   reiniciar(){
     this.resultService.deleteResults().subscribe();
     this.resultService.getResult().subscribe( data => this.results = data);
     this.empty = true;
     this.message = '';
     this.userShot = '';
   }

}
