import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../../services/movies-service.service'
import * as Hammer from 'hammerjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-open-story',
  templateUrl: './open-story.component.html',
  styleUrls: ['./open-story.component.scss'],
})
export class OpenStoryComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private service: MoviesServiceService) { }
  value = 'batman'
  movies = []
  currStory: number

  ngOnInit() {
    this.getMovies()
    setTimeout(this.set, 1000, this)
  }
  goBack() {
    this.location.back()
  }
  set(that) {
    var sliderEl = document.querySelector('.slider'); // NEW: our element
    console.log(sliderEl)
    var slideCount = 3; // NEW: the total # of slides
    var sliderManager = new Hammer.Manager(sliderEl);
    sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
    sliderManager.on('pan', function (e) {
      var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
      if (that.currStory === 0 && e.deltaX > 0) return
      if (that.currStory === that.movies.length - 1 && e.deltaX < 0) return

      var transformPercentage360 = 90 * (e.deltaX / 360)
      // sliderEl.style.transform = 'rotateY(' + transformPercentage360 + 'deg)';
      // if (e.deltaY > 0) sliderEl.style.top = e.deltaY + 'px'


      if (e.isFinal) { // NEW: this only runs on event end
        if (e.deltaY > 200) {
          that.goBack()
        } else {
          // sliderEl.style.top = '0'
        }
        if (percentage < (-33 / 2)) {
          goToSlide();
          that.currStory++
        }
        else if (percentage > (33 / 2)) {
          goToSlide();
          that.currStory--
        }
        else
          goToSlide();
      }
    });

    // NEW: function that changes the slide
    var goToSlide = () => {
      if (that.currStory === 0) return
      // sliderEl.style.transform = 'rotateY(0)';
    };

  }
  getMovies(): void {
    this.service.getMovies(this.value)
      .subscribe(movies => {
        this.movies = movies
        const id = this.route.snapshot.paramMap.get('imdbID');
        this.currStory = this.movies.findIndex(movie => movie.imdbID === id)
      });
  }
}
