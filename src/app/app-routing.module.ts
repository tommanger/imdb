import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './cmps/movies-list/movies-list.component';
import { MovieDetailsComponent } from './cmps/movie-details/movie-details.component';
import { MovieReviewsComponent } from './cmps/movie-reviews/movie-reviews.component';
import {EditReviewsComponent } from './cmps/edit-reviews/edit-reviews.component';
import { OpenStoryComponent } from './cmps/open-story/open-story.component'

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'openstory/:imdbID', component: OpenStoryComponent },
  {
    path: 'movie/:imdbID', component: MovieDetailsComponent, children: [
      { path: '', component: MovieReviewsComponent },
      { path: 'edit/:id', component: EditReviewsComponent },
      { path: 'edit', component: EditReviewsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
