import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NazioniService } from 'src/app/services/nazioni.service';
import { Constant } from 'src/app/const/constant';
import { Country } from 'src/app/model/country';


@Component({
  selector: 'app-citta',
  templateUrl: './citta.component.html',
  styleUrls: ['./citta.component.css']
})
export class CittaComponent implements OnInit {
  city: City[];
  nation: Country[];
  AZ = Constant.AZ;
  POPA = Constant.POPA;
  constructor(private cityService: CittaService,
    private route: ActivatedRoute,
    private router: Router,
    private nationService: NazioniService) { }


  ngOnInit() {

    this.nation = [];
    this.city = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nationService.currentNation = params.get('codeCountry');
      this.showAllCities();
      this.getNameNation(this.nationService.currentNation);
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
  ordinaCity(ord: string) {
    this.cityService.ordinaCity(this.nationService.currentNation, ord).subscribe((res) => {
      if (ord === Constant.AZ) {
        this.AZ = Constant.ZA;
      } else {
        this.AZ = Constant.AZ;
      }
      if (ord === Constant.POPA) {
        this.POPA = Constant.POPD;
      } else {
        this.POPA = Constant.POPA;
      }
      this.city = res.body as City[];
    });
  }

  goToModPage(id: number) {
    this.router.navigate(['modifica-aggiungi', id]);
  };

  goToAddPage() {
    this.router.navigate(['modifica-aggiungi']);
  };

  getNameNation(codeCountry: string) {

    this.cityService.getNation(codeCountry).subscribe((res) => {
      this.nation = res.body as Country[];

    });

  }
}