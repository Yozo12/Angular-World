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
  continent;
  constructor(private countryService: NazioniService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.nation = [];
    //this.continent = (this.route.snapshot.paramMap.get('continent'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.continent = params.get('continent');
      console.log("lettura params");
      this.showAllCountries();
    });
    
    console.log("Fine init");
  }

  showAllCountries() {
    this.countryService.nationByContinent(this.continent)
      .subscribe((res) => {
        this.nation = res.body as Country[];
        console.log("ricevute nazioni");
      });
    console.log("fine chiamata nazioni");
  }
  goBack() {
    this.router.navigate(['']);
  }
}