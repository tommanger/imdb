import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../../services/movies-service.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: MoviesServiceService) { }
  movie: object

  ngOnInit() {
    this.getMovie()
  }
  getMovie(): void{
    const id = this.route.snapshot.paramMap.get('imdbID');
    this.service.getMovieById(id)
    .subscribe(movie => this.movie = movie);
  }
}
