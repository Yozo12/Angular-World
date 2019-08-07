import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CittaService } from 'src/app/services/citta.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocomplete-city',
  templateUrl: './autocomplete-city.component.html',
  styleUrls: ['./autocomplete-city.component.css'],
  providers: [NgbModalConfig, NgbModal],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]

})
export class AutocompleteCityComponent implements OnInit {
  city: City[];
  cityLike: City[];
  drop: boolean;
  text: string;
  modalCity: City;

  constructor(private cityService: CittaService,private router:Router, config: NgbModalConfig, private modal: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

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
    if (initial === "" || initial === null) {
      this.showAllCities()
      this.cityLike = [];
    } else {
      this.cityService.getCitiesByLike(initial).subscribe((res) => {
        this.cityLike = res.body as City[];
        this.city = res.body as City[];
      })
    }
  }
  notDrop() {
    this.drop = !this.drop;
  }
  saveTextSearch(text: string) {
    this.text = text;
    this.ShearchCity(this.text)
    this.drop = !this.drop;

  }
  cityByID(id: number) {
    this.cityService.loadCity(id)
  }
  open(content, city: City, ) {
    this.modalCity = city;
    this.modal.open(content, {centered: true });

  }
  linkToReview(idCity:number){
    this.router.navigate(['review',idCity])
  }
}
