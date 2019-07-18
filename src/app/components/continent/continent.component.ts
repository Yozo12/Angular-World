import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ContinentServiceService } from 'src/app/services/continent-service.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {
    continent:string [];
    paramCont:string;
  constructor(private continentService: ContinentServiceService) { }

  ngOnInit() {
    this.continent;
    this.showAllContinent();
  }
  showAllContinent() {
    this.continentService.showAll()
      .subscribe((res) => {
        this.continent = res.body;
      });
    }
addContinent(paramCont:string){
  this.paramCont=paramCont;
 
}
}