import { Component, OnInit, Input } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service'
import { Movie } from '../../services/movie'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private service: MoviesServiceService) { }
  movies: Movie[];
  value = 'batman'

  ngOnInit() {
    this.getMovies()
  }
  getMovies(): void {
    this.service.getMovies(this.value)
      .subscribe(movies => this.movies = movies);
  }
  searchMovies(ev){
    this.value = ev.target.value
    this.getMovies()
  }
}
