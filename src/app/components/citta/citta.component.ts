import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-citta',
  templateUrl: './citta.component.html',
  styleUrls: ['./citta.component.css']
})
export class CittaComponent implements OnInit {
  city:City[];
  paramNation:string;
  constructor(private cityService :CittaService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.city=[];
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paramNation = params.get('codeCountry');
      this.showAllCities();
  });
}
showAllCities(){
  this.cityService. allCities(this.paramNation)
      .subscribe((res) => {
        this.city = res.body as City[];

      });

  }
}
