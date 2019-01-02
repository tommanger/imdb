import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './cmps/movies-list/movies-list.component';
import { MoviePreviewComponent } from './cmps/movie-preview/movie-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './cmps/movie-details/movie-details.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { MovieReviewsComponent } from './cmps/movie-reviews/movie-reviews.component';
import { EditReviewsComponent } from './cmps/edit-reviews/edit-reviews.component';
import { FormsModule } from '@angular/forms';
import { StoryComponent } from './cmps/story/story.component';
import { OpenStoryComponent } from './cmps/open-story/open-story.component'
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviePreviewComponent,
    MovieDetailsComponent,
    NavbarComponent,
    MovieReviewsComponent,
    EditReviewsComponent,
    StoryComponent,
    OpenStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
