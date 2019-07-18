import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NazioniService } from 'src/app/services/nazioni.service';

@Component({
  selector: 'app-citta',
  templateUrl: './citta.component.html',
  styleUrls: ['./citta.component.css']
})
export class CittaComponent implements OnInit {
  city: City[];

  constructor(private cityService: CittaService,
    private route: ActivatedRoute,
    private router: Router,
    private nationService: NazioniService) { }

  ngOnInit() {
    this.city = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nationService.currentNation = params.get('codeCountry');
      this.showAllCities();
    });
  }

  showAllCities() {
    this.cityService.allCities(this.nationService.currentNation)
      .subscribe((res) => {
        this.city = res.body as City[];

      });

  }

  goBack() {
    this.router.navigate(['']);

  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id).subscribe((res) => {

      this.showAllCities();

    });

  }
}
