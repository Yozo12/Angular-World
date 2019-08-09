import { Component, OnInit } from '@angular/core';
import { CittaService } from 'src/app/services/citta.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Review } from 'src/app/model/review';
import { Author } from 'src/app/model/author';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse, HttpResponseBase, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
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
  alert: Alert[] = [{
    type: 'danger',
    message: 'non sei loggato!'
  }]
  review: Review[];
  author: Author;
  directive: boolean;
  ok: boolean;
  condizione: ResponseType;
  key: boolean;
  trigger: boolean;
  name: string;
  pass: string;

  constructor(private cityService: CittaService, private route: ActivatedRoute, private config: NgbModalConfig, private modal: NgbModal) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit() {
    this.trigger;

    this.author = new Author
    this.key = false;
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
    this.modal.open(content);
  }

  close(alert: Alert) {
    this.alert.splice(this.alert.indexOf(alert), 1);
  }

  saveAuthor(name: String, id: number, pass1: any, pass2: any) {
    this.author.idAuthor = id;
    this.author.name = name;
    this.author.pass1 = pass1;
    this.author.pass2 = pass2;
    if ((this.author.pass1 === this.author.pass2) && this.author.name != null && this.key == false && this.author.pass1 != null) {
      this.cityService.insertAuthor(this.author).subscribe((res) => {
        console.log(res);
        console.log('success');
        this.key = false;
        this.ok = true;
        this.trigger = true;
      },
        (error) => {
          console.log(error);
          console.log('failed');
          this.key = true;
        }
      );
    }
    else {
      alert('password non corrispondenti o formato nome non corretto')
    }
  }

  login() {
    this.cityService.login(this.name, this.pass).subscribe((res) => {
      console.log(res)

    },
      (error) => {
        console.log(error)
      });
  }

  changeOk() {
    this.ok = !this.ok;
    this.directive = !this.directive;
  }

  changeKey() {
    this.key = !this.key;
  }

  changeTrigger() {
    this.trigger = !this.trigger;
  }

}