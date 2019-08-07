import { Component, OnInit } from '@angular/core';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Review } from 'src/app/model/review';
import { Author } from 'src/app/model/author';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 alert:Alert[]=[{type: 'danger',
 message: 'non sei loggato!'}]
  review: Review[];
  author: Author;
  directive: boolean;
  constructor(private cityService: CittaService, private route: ActivatedRoute, private config: NgbModalConfig, private modal: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.directive = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityService.currentCityid = parseInt(params.get('idcity'))

    });





  }
  showAllReviewCityById(id: number) {
    this.cityService.getReview(id).subscribe((res) => {
      this.review = res.body as Review[];
    })
  }
  open(content) {

    this.modal.open(content, { centered: true });

  }
  close(alert: Alert) {
    this.alert.splice(this.alert.indexOf(alert), 1);
  }

}


