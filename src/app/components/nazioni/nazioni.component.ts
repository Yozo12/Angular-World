import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NazioniService } from 'src/app/services/nazioni.service';
import { Country } from 'src/app/model/country';
import { ContinentComponent } from '../continent/continent.component';




@Component({
  selector: 'app-nazioni',
  templateUrl: './nazioni.component.html',
  styleUrls: ['./nazioni.component.css']
})
export class NazioniComponent implements OnInit {
nation:Country[];
continent:string;
  constructor(private countryService : NazioniService) { }

  ngOnInit() {
    this.nation=[];
    this.showAllCountries();
    this.continent;
  }
  
  
showAllCountries(){
  this.countryService.nationByContinent(this.continent)
  .subscribe((res) => {
    this.nation = res.body as Country[];
  });

}
}