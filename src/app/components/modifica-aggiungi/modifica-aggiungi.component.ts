import { Component, OnInit } from '@angular/core';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { City } from 'src/app/model/city';
import { Country } from 'src/app/model/country';
import { NazioniService } from 'src/app/services/nazioni.service';
import { Body } from 'src/app/model/body';

@Component({
  selector: 'app-modifica-aggiungi',
  templateUrl: './modifica-aggiungi.component.html',
  styleUrls: ['./modifica-aggiungi.component.css']
})
export class ModificaAggiungiComponent implements OnInit {

  city: City[];
  countries: Country[];
  titolo: string;
  constructor
    (private cityService: CittaService,
      private nationService: NazioniService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.city = [];
    this.route.paramMap.subscribe((res) => {
      this.cityService.currentCityid = parseInt(this.route.snapshot.paramMap.get('id'));
    });
    if (this.cityService.currentCityid > 0) {
      this.loadCity(this.cityService.currentCityid);
      this.titolo = 'Modifica Città ';
    } else {
      this.titolo = 'Aggiungi Città';
    }
    this.loadCountries();

  }
  loadCity(id: number) {
    this.cityService.loadCity(id).subscribe((res) => {
      this.city = res.body as City[];
    });
  }
  loadCountries() {
    this.nationService.allCountries().subscribe((res) => {
      this.countries = res.body as Country[];
    });
  }
  modAdd(newCity: string, newPopulation: number, newCodNation: string, id: number) {
    let paramBody = new Body(newCity, newPopulation, newCodNation, id)
    this.cityService.addModCity(paramBody).subscribe((res) => {
      this.router.navigate(['citta', paramBody.codeCountry]);
    });
  }
}
