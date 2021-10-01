import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/result';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {


  @Input() results;

  posY = window.scrollY;

  constructor(private resultService:ResultService) {
      
   }

  ngOnInit() {

  }

  ngOnChanges() {
    
    this.resultService.getResult().subscribe(data => 
      this.results = data
    )
    window.scrollTo(0,this.posY)
  }

}
