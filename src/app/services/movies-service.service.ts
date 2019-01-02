import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie'
import { Observable, of } from 'rxjs';
import { map, findIndex } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getMovies(search: any): Observable<Movie[]> {
    return this.http.get(`http://www.omdbapi.com/?apikey=bdfb6376&s=${search}`)
      .pipe(map((res: any) => {
        return res.Search as Movie[]
      }))
  }
  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=bdfb6376&i=${movieId}`)
  }

  sendReview(review) {
    var reviews = JSON.parse(localStorage.getItem('reviews'))
    if (!reviews) reviews = []
    if(!review._id){
      review._id = this.makeid(8)
      reviews.unshift(review)
    }else{
      var idx = reviews.findIndex(currReview => currReview._id === review._id)
      reviews.splice(idx,1,review) 
    }
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }

  loadReviews(movieId) {
    var reviews = JSON.parse(localStorage.getItem('reviews'))
    if (!reviews) return
    return reviews.filter(movie => movie.movieId === movieId)
  }
  getReviewById(id) {
    var reviews = JSON.parse(localStorage.getItem('reviews'))
    if (!reviews) return
    return reviews.filter(movie => movie._id === id)[0]
  }
  deleteReview(id){
    var reviews = JSON.parse(localStorage.getItem('reviews'))
    var idx = reviews.findIndex(currReview => currReview._id === id)
    reviews.splice(idx,1)
    localStorage.setItem('reviews', JSON.stringify(reviews))
    return reviews
  }
  makeid(num) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < num; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }
}


