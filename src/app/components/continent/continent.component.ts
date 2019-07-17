import { Component, OnInit } from '@angular/core';
import { ContinentServiceService } from 'src/app/services/continent-service.service';
import { Continent } from 'src/app/model/continent';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {
  continent:string [];

  constructor(private swService: ContinentServiceService) { }

  ngOnInit() {
    this.continent;
    this.showAllContinent();
  }
  showAllContinent() {
    this.swService.showAll()
      .subscribe((res) => {
        this.continent = res.body;
      });

}
}