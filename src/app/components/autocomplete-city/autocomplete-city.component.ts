import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CittaService } from 'src/app/services/citta.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-autocomplete-city',
  templateUrl: './autocomplete-city.component.html',
  styleUrls: ['./autocomplete-city.component.css']
})
export class AutocompleteCityComponent implements OnInit {
  city: City[];
  cityLike: City[];
  drop: boolean;
  text: string;

  constructor(private cityService: CittaService) { }

  ngOnInit() {
    this.drop = false;
    this.city = [];
    this.cityLike = []


    this.showAllCities();
    this.ShearchCity(null);


  }
  showAllCities() {
    this.cityService.allCitiesFromWorld().subscribe((res) => {
      this.city = res.body as City[];
    })
  };
  ShearchCity(initial: String) {
    this.cityService.getCitiesByLike(initial).subscribe((res) => {
      this.cityLike = res.body as City[];
      this.city = res.body as City[];
    })
  }
  notDrop() {
    this.drop = !this.drop;
  }
  saveTextSearch(text: string) {
    this.text = text;
    if (this.text =null) {

      this.showAllCities()
    }
    else { this.ShearchCity(this.text) }
    this.drop = !this.drop;

  }
  cityByID(id: number) {
    this.cityService.loadCity(id)
  }
}
