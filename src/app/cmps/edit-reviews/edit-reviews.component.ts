import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'
import { MoviesServiceService } from '../../services/movies-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-reviews',
  templateUrl: './edit-reviews.component.html',
  styleUrls: ['./edit-reviews.component.scss']
})
export class EditReviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private service: MoviesServiceService) { }
  review = null
  ngOnInit() {
    const reviewId = this.route.snapshot.paramMap.get('id');
    if(reviewId) this.getReviewById(reviewId)

  }
  goBack() {
    this.location.back()
  }
  sendReview(ev){
    const movieId = this.route.snapshot.parent.paramMap.get('imdbID');
    if(this.review){
      this.review.name = ev.target[0].value
      this.review.review = ev.target[1].value
      this.service.sendReview(this.review)
    }else{
      let currReview = {
        name: ev.target[0].value,
        review: ev.target[1].value,
        movieId
      }
      this.service.sendReview(currReview)
    }
    this.goBack()
  }
  getReviewById(id){
    this.review = this.service.getReviewById(id)
  }
}
