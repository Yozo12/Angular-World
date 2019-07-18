import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NazioniService } from 'src/app/services/nazioni.service';
import { Country } from 'src/app/model/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nazioni',
  templateUrl: './nazioni.component.html',
  styleUrls: ['./nazioni.component.css']
})
export class NazioniComponent implements OnInit {
  nation: Country[];
  continent;
  constructor(private countryService: NazioniService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.nation = [];
    this.continent = (this.route.snapshot.paramMap.get('continent'));
  this.showAllCountries();
  }
  showAllCountries() {
    this.countryService.nationByContinent(this.continent)
      .subscribe((res) => {
        this.nation = res.body as Country[];
      });

  }
}