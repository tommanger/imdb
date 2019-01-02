import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent implements OnInit {

  constructor(private service: MoviesServiceService, private route: ActivatedRoute) { }
  reviews = []

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('imdbID');
    this.reviews = this.service.loadReviews(id)
  }
  deleteReview(reviewId){
    this.reviews = this.service.deleteReview(reviewId)
  }

}
