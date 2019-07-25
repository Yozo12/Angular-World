import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Country } from 'src/app/model/country';
import { NazioniService } from 'src/app/services/nazioni.service';


@Component({
  selector: 'app-nazioni',
  templateUrl: './nazioni.component.html',
  styleUrls: ['./nazioni.component.css']
})
export class NazioniComponent implements OnInit {
  nation: Country[];
  continent: string;
  codeCountry: string;
  constructor(private countryService: NazioniService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.nation = [];
    //this.continent = (this.route.snapshot.paramMap.get('continent'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.continent = params.get('continent');

      this.showAllCountries();

    });


  }

  showAllCountries() {
    this.countryService.nationByContinent(this.continent)
      .subscribe((res) => {
        this.nation = res.body as Country[];

      });

  }
  goBack() {
    this.router.navigate(['']);
  }
  goToCityByCodeCountry(codeCountry: string) {
    this.codeCountry = codeCountry;
    this.router.navigate(['citta', this.codeCountry])
  }
}