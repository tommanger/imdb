(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cmps_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmps/movies-list/movies-list.component */ "./src/app/cmps/movies-list/movies-list.component.ts");
/* harmony import */ var _cmps_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/movie-details/movie-details.component */ "./src/app/cmps/movie-details/movie-details.component.ts");
/* harmony import */ var _cmps_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/movie-reviews/movie-reviews.component */ "./src/app/cmps/movie-reviews/movie-reviews.component.ts");
/* harmony import */ var _cmps_edit_reviews_edit_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/edit-reviews/edit-reviews.component */ "./src/app/cmps/edit-reviews/edit-reviews.component.ts");
/* harmony import */ var _cmps_open_story_open_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/open-story/open-story.component */ "./src/app/cmps/open-story/open-story.component.ts");








var routes = [
    { path: '', component: _cmps_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"] },
    { path: 'openstory/:imdbID', component: _cmps_open_story_open_story_component__WEBPACK_IMPORTED_MODULE_7__["OpenStoryComponent"] },
    {
        path: 'movie/:imdbID', component: _cmps_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"], children: [
            { path: '', component: _cmps_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_5__["MovieReviewsComponent"] },
            { path: 'edit/:id', component: _cmps_edit_reviews_edit_reviews_component__WEBPACK_IMPORTED_MODULE_6__["EditReviewsComponent"] },
            { path: 'edit', component: _cmps_edit_reviews_edit_reviews_component__WEBPACK_IMPORTED_MODULE_6__["EditReviewsComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-navbar></app-navbar>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'imdbfront';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cmps_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/movies-list/movies-list.component */ "./src/app/cmps/movies-list/movies-list.component.ts");
/* harmony import */ var _cmps_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/movie-preview/movie-preview.component */ "./src/app/cmps/movie-preview/movie-preview.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cmps_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/movie-details/movie-details.component */ "./src/app/cmps/movie-details/movie-details.component.ts");
/* harmony import */ var _cmps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/navbar/navbar.component */ "./src/app/cmps/navbar/navbar.component.ts");
/* harmony import */ var _cmps_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/movie-reviews/movie-reviews.component */ "./src/app/cmps/movie-reviews/movie-reviews.component.ts");
/* harmony import */ var _cmps_edit_reviews_edit_reviews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/edit-reviews/edit-reviews.component */ "./src/app/cmps/edit-reviews/edit-reviews.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cmps_story_story_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cmps/story/story.component */ "./src/app/cmps/story/story.component.ts");
/* harmony import */ var _cmps_open_story_open_story_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/open-story/open-story.component */ "./src/app/cmps/open-story/open-story.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");


















var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_15__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cmps_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"],
                _cmps_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_6__["MoviePreviewComponent"],
                _cmps_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailsComponent"],
                _cmps_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _cmps_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__["MovieReviewsComponent"],
                _cmps_edit_reviews_edit_reviews_component__WEBPACK_IMPORTED_MODULE_11__["EditReviewsComponent"],
                _cmps_story_story_component__WEBPACK_IMPORTED_MODULE_13__["StoryComponent"],
                _cmps_open_story_open_story_component__WEBPACK_IMPORTED_MODULE_14__["OpenStoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
            ],
            providers: [
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cmps/edit-reviews/edit-reviews.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cmps/edit-reviews/edit-reviews.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews-container\">\n    <div class=\"flex space\">\n      <h4>Add Review:</h4>\n      <button (click)=\"goBack()\">Back</button>\n    </div>\n    <form (ngSubmit)=\"sendReview($event)\" class=\"flex column add-review\">\n      <input [value]=\"(review) ? review.name : ''\" type=\"text\" placeholder=\"Your name:\">\n      <input class=\"input-review\" [value]=\"(review) ? review.review : ''\" placeholder=\"Your review:\">\n      <button type=\"submit\">Send</button>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/cmps/edit-reviews/edit-reviews.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cmps/edit-reviews/edit-reviews.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviews-container {\n  background: white;\n  padding: 15px;\n  margin-top: 20px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin-bottom: 50px; }\n\nbutton {\n  border: 0;\n  color: white;\n  background-color: #333;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all .3s;\n  padding: 15px;\n  max-height: 50px; }\n\nbutton:hover {\n  background-color: #4e4e4e; }\n\n.add-review {\n  margin-top: 20px; }\n\n.add-review input {\n    height: 40px;\n    background-color: #dfdfdf;\n    border: 0;\n    border-radius: 10px;\n    padding-left: 10px;\n    margin-bottom: 10px;\n    outline: none; }\n\n.add-review .input-review {\n    height: 80px;\n    background-color: #dfdfdf;\n    border: 0;\n    border-radius: 10px;\n    padding: 10px;\n    margin-bottom: 10px;\n    outline: none;\n    font-family: inherit; }\n\n.add-review button {\n    max-width: 80px;\n    align-self: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9lZGl0LXJldmlld3MvQzpcXGRpdlxcYW5ndWxhcmltZGJcXGltZGJmcm9udC9zcmNcXGFwcFxcY21wc1xcZWRpdC1yZXZpZXdzXFxlZGl0LXJldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLFVBQVM7RUFDVCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksMEJBQWlDLEVBQ3BDOztBQUVEO0VBQ0ksaUJBQWdCLEVBd0JuQjs7QUF6QkQ7SUFHUSxhQUFZO0lBQ1osMEJBQXlCO0lBQ3pCLFVBQVM7SUFDVCxvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUNuQixjQUFhLEVBQ2hCOztBQVZMO0lBWVEsYUFBWTtJQUNaLDBCQUF5QjtJQUN6QixVQUFTO0lBQ1Qsb0JBQW1CO0lBQ25CLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLHFCQUFvQixFQUN2Qjs7QUFwQkw7SUFzQlEsZ0JBQWU7SUFDZixxQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jbXBzL2VkaXQtcmV2aWV3cy9lZGl0LXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3cy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbn1cclxuXHJcbi5hZGQtcmV2aWV3e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGlucHV0e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtcmV2aWV3e1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cmps/edit-reviews/edit-reviews.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cmps/edit-reviews/edit-reviews.component.ts ***!
  \*************************************************************/
/*! exports provided: EditReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReviewsComponent", function() { return EditReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditReviewsComponent = /** @class */ (function () {
    function EditReviewsComponent(route, location, service) {
        this.route = route;
        this.location = location;
        this.service = service;
        this.review = null;
    }
    EditReviewsComponent.prototype.ngOnInit = function () {
        var reviewId = this.route.snapshot.paramMap.get('id');
        if (reviewId)
            this.getReviewById(reviewId);
    };
    EditReviewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditReviewsComponent.prototype.sendReview = function (ev) {
        var movieId = this.route.snapshot.parent.paramMap.get('imdbID');
        if (this.review) {
            this.review.name = ev.target[0].value;
            this.review.review = ev.target[1].value;
            this.service.sendReview(this.review);
        }
        else {
            var currReview = {
                name: ev.target[0].value,
                review: ev.target[1].value,
                movieId: movieId
            };
            this.service.sendReview(currReview);
        }
        this.goBack();
    };
    EditReviewsComponent.prototype.getReviewById = function (id) {
        this.review = this.service.getReviewById(id);
    };
    EditReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-reviews',
            template: __webpack_require__(/*! ./edit-reviews.component.html */ "./src/app/cmps/edit-reviews/edit-reviews.component.html"),
            styles: [__webpack_require__(/*! ./edit-reviews.component.scss */ "./src/app/cmps/edit-reviews/edit-reviews.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__["MoviesServiceService"]])
    ], EditReviewsComponent);
    return EditReviewsComponent;
}());



/***/ }),

/***/ "./src/app/cmps/movie-details/movie-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-details/movie-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"details-container\">\n  <div class=\"flex column details-header\">\n    <div class=\"flex space align-center\">\n      <h1>{{movie.Title}} <span>({{movie.Year}})</span></h1>\n      <div>\n        <h1 class=\"details-rate\">{{movie.imdbRating}} <span>/10</span></h1>\n        <h4>{{movie.imdbVotes}}</h4>\n      </div>\n    </div>\n    <div>\n      <h4>{{movie.Rated}} | {{movie.Runtime}} | {{movie.Genre}} | {{movie.Released}} <span>({{movie.Country}})</span></h4>\n    </div>\n  </div>\n  <div class=\"flex\">\n    <img [src]=movie.Poster>\n    <div class=\"flex column details-more\">\n      <h4>{{movie.Plot}}</h4>\n      <h4>Director: <span>{{movie.Director}}</span></h4>\n      <h4>Writer: <span>{{movie.Writer}}</span></h4>\n      <h4>Actors: <span>{{movie.Actors}}</span></h4>\n      <h4>Production: <span>{{movie.Production}}</span></h4>\n      <h4>BoxOffice: <span>{{movie.BoxOffice}}</span></h4>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/cmps/movie-details/movie-details.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-details/movie-details.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-container {\n  background-color: white;\n  margin-top: 90px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  overflow: hidden; }\n\n.details-header {\n  background-color: #333;\n  color: white;\n  padding: 0 15px 25px; }\n\n.details-more {\n  margin: 26px; }\n\n.details-more h4 {\n    margin-bottom: 20px; }\n\n.details-more h4 span {\n      color: #424242; }\n\n.details-rate {\n  margin: 0;\n  padding: 0;\n  font-size: 40px; }\n\nh4 {\n  margin: 0; }\n\nh1 {\n  margin: 0; }\n\nh1 span {\n    color: #a8a8a8;\n    font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZS1kZXRhaWxzL0M6XFxkaXZcXGFuZ3VsYXJpbWRiXFxpbWRiZnJvbnQvc3JjXFxhcHBcXGNtcHNcXG1vdmllLWRldGFpbHNcXG1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLHVDQUFzQztFQUN0QyxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxhQUFZLEVBT2Y7O0FBUkQ7SUFHUSxvQkFBbUIsRUFJdEI7O0FBUEw7TUFLWSxlQUFzQixFQUN6Qjs7QUFHVDtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1YsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxVQUFTLEVBQ1o7O0FBQ0Q7RUFDSSxVQUFTLEVBS1o7O0FBTkQ7SUFHUSxlQUFjO0lBQ2QsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbXBzL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmRldGFpbHMtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAyNXB4O1xyXG59XHJcblxyXG4uZGV0YWlscy1tb3Jle1xyXG4gICAgbWFyZ2luOiAyNnB4O1xyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZGV0YWlscy1yYXRle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5oNHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5oMXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICNhOGE4YTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/cmps/movie-details/movie-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cmps/movie-details/movie-details.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");




var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    MovieDetailsComponent.prototype.getMovie = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('imdbID');
        this.service.getMovieById(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/cmps/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/cmps/movie-details/movie-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__["MoviesServiceService"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.background-image]=\"'url('+movie.Poster+')'\" [routerLink]=\"'/movie/'+ movie.imdbID\" class=\"movie-pre-container\">\n  <h2 class=\"movie-title\">{{movie.Title}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-pre-container {\n  background-position: center;\n  background-size: cover;\n  border-radius: 15px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 0 0 0px #0397D6;\n  transition: all .4s; }\n\n.movie-pre-container:hover {\n  cursor: pointer;\n  box-shadow: inset 0 0 0 7px #0397D6; }\n\n.movie-title {\n  color: white;\n  padding: 0 10px;\n  font-size: 15px;\n  text-shadow: 0 0 20px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZS1wcmV2aWV3L0M6XFxkaXZcXGFuZ3VsYXJpbWRiXFxpbWRiZnJvbnQvc3JjXFxhcHBcXGNtcHNcXG1vdmllLXByZXZpZXdcXG1vdmllLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLHVDQUFzQztFQUN0QyxvQ0FBbUM7RUFDbkMsb0JBQW1CLEVBRXRCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixvQ0FBbUMsRUFDdEM7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixnQkFBZTtFQUNmLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvbW92aWUtcHJldmlldy9tb3ZpZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLXByZS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwcHggIzAzOTdENjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XHJcblxyXG59XHJcbi5tb3ZpZS1wcmUtY29udGFpbmVyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgN3B4ICMwMzk3RDY7XHJcbn1cclxuLm1vdmllLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IGJsYWNrO1xyXG59ICAgIl19 */"

/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.ts ***!
  \***************************************************************/
/*! exports provided: MoviePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewComponent", function() { return MoviePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviePreviewComponent = /** @class */ (function () {
    function MoviePreviewComponent() {
    }
    MoviePreviewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviePreviewComponent.prototype, "movie", void 0);
    MoviePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-preview',
            template: __webpack_require__(/*! ./movie-preview.component.html */ "./src/app/cmps/movie-preview/movie-preview.component.html"),
            styles: [__webpack_require__(/*! ./movie-preview.component.scss */ "./src/app/cmps/movie-preview/movie-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviePreviewComponent);
    return MoviePreviewComponent;
}());



/***/ }),

/***/ "./src/app/cmps/movie-reviews/movie-reviews.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-reviews/movie-reviews.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews-container\">\n  <div class=\"flex space\">\n    <h4>Movie Reviews:</h4>\n    <button routerLink=\"edit\">Add Review</button>\n  </div>\n  <div class=\"reviews-list\">\n    <!-- <h2 *ngIf=\"reviews.length === 0\">No reviews yet</h2> -->\n    <ul *ngIf=\"reviews\">\n      <li *ngFor=\"let review of reviews\" class=\"flex space\">\n        <div>\n          <h4>Name: {{review.name}}</h4>\n          <p>{{review.review}}</p>\n        </div>\n        <div class=\"flex column\">\n          <button [routerLink]=\"'edit/'+review._id\">Edit review</button>\n          <button (click)=\"deleteReview(review._id)\">Delete review</button>\n        </div>\n\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/movie-reviews/movie-reviews.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-reviews/movie-reviews.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviews-container {\n  background: white;\n  padding: 15px;\n  margin-top: 20px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin-bottom: 50px; }\n\nbutton {\n  border: 0;\n  color: white;\n  background-color: #333;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all .3s;\n  padding: 15px;\n  max-height: 55px;\n  font-weight: bold; }\n\nbutton:hover {\n  background-color: #4e4e4e; }\n\n.reviews-list ul {\n  margin: 0;\n  padding: 0; }\n\n.reviews-list li {\n  background-color: #e8ebf5;\n  list-style-type: none;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  padding: 10px 10px 10px 30px;\n  border-radius: 10px;\n  margin-top: 10px; }\n\n.reviews-list button {\n  background-color: white;\n  color: #333;\n  margin: 3px;\n  transition: all .4s; }\n\n.reviews-list button:hover {\n  background-color: #dadada; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZS1yZXZpZXdzL0M6XFxkaXZcXGFuZ3VsYXJpbWRiXFxpbWRiZnJvbnQvc3JjXFxhcHBcXGNtcHNcXG1vdmllLXJldmlld3NcXG1vdmllLXJldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix1Q0FBc0M7RUFDdEMsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLFVBQVM7RUFDVCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLDBCQUFpQyxFQUVwQzs7QUFDRDtFQUVRLFVBQVM7RUFDVCxXQUFVLEVBQ2I7O0FBSkw7RUFNUSwwQkFBeUI7RUFDekIsc0JBQXFCO0VBQ3JCLDZDQUE0QztFQUM1Qyw2QkFBNEI7RUFDNUIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNuQjs7QUFaTDtFQWNRLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFsQkw7RUFvQlEsMEJBQW9DLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY21wcy9tb3ZpZS1yZXZpZXdzL21vdmllLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3cy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuXHJcbn1cclxuLnJldmlld3MtbGlzdHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJmNTtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/cmps/movie-reviews/movie-reviews.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cmps/movie-reviews/movie-reviews.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieReviewsComponent", function() { return MovieReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieReviewsComponent = /** @class */ (function () {
    function MovieReviewsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.reviews = [];
    }
    MovieReviewsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('imdbID');
        this.reviews = this.service.loadReviews(id);
    };
    MovieReviewsComponent.prototype.deleteReview = function (reviewId) {
        this.reviews = this.service.deleteReview(reviewId);
    };
    MovieReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-reviews',
            template: __webpack_require__(/*! ./movie-reviews.component.html */ "./src/app/cmps/movie-reviews/movie-reviews.component.html"),
            styles: [__webpack_require__(/*! ./movie-reviews.component.scss */ "./src/app/cmps/movie-reviews/movie-reviews.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service_service__WEBPACK_IMPORTED_MODULE_2__["MoviesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieReviewsComponent);
    return MovieReviewsComponent;
}());



/***/ }),

/***/ "./src/app/cmps/movies-list/movies-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cmps/movies-list/movies-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-list\">\n  <input class=\"search-movies\" [value]=value type=\"text\" (input)=\"searchMovies($event)\">\n  <div class=\"flex storys\">\n    <app-story *ngFor=\"let movie of movies let idx = index\"\n     [movie]=\"movie\"\n     [movies]=\"movies\"></app-story>\n  </div>\n  <div class=\"list-container\">\n    <app-movie-preview *ngFor=\"let movie of movies\" [movie]=\"movie\"></app-movie-preview>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/movies-list/movies-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/cmps/movies-list/movies-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-list {\n  text-align: center; }\n\n.list-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 200px);\n  grid-gap: 10px;\n  grid-auto-rows: 250px; }\n\n@media screen and (max-width: 1040px) {\n    .list-container {\n      grid-template-columns: repeat(auto-fill, 32%); } }\n\n@media screen and (max-width: 638px) {\n    .list-container {\n      grid-template-columns: repeat(auto-fill, 48%); } }\n\n@media screen and (max-width: 425px) {\n    .list-container {\n      grid-template-columns: repeat(auto-fill, 100%); } }\n\n.search-movies {\n  height: 50px;\n  margin: 10px 0;\n  width: 300px;\n  padding-left: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 10px;\n  border: 0;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  outline: none;\n  transition: all .4s; }\n\n.search-movies:focus {\n  width: 400px;\n  box-shadow: inset 0 0 0 7px #0397D6; }\n\n.storys {\n  overflow: auto;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZXMtbGlzdC9DOlxcZGl2XFxhbmd1bGFyaW1kYlxcaW1kYmZyb250L3NyY1xcYXBwXFxjbXBzXFxtb3ZpZXMtbGlzdFxcbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsZ0RBQStDO0VBQy9DLGVBQWM7RUFDZCxzQkFBcUIsRUFVeEI7O0FBVEc7SUFMSjtNQU1RLDhDQUE0QyxFQVFuRCxFQUFBOztBQU5HO0lBUko7TUFTUSw4Q0FBNEMsRUFLbkQsRUFBQTs7QUFIRztJQVhKO01BWVEsK0NBQThDLEVBRXJELEVBQUE7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osZUFBYztFQUNkLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLFVBQVM7RUFDVCx1Q0FBc0M7RUFDdEMsY0FBYTtFQUNiLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGFBQVk7RUFDWixvQ0FBbUMsRUFDdEM7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY21wcy9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1saXN0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saXN0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIwMHB4KTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLDMyJSk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzhweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCw0OCUpO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEwMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLW1vdmllc3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcclxufVxyXG4uc2VhcmNoLW1vdmllczpmb2N1c3tcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDdweCAjMDM5N0Q2O1xyXG59XHJcbi5zdG9yeXN7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cmps/movies-list/movies-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cmps/movies-list/movies-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");



var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(service) {
        this.service = service;
        this.value = 'batman';
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesListComponent.prototype.getMovies = function () {
        var _this = this;
        this.service.getMovies(this.value)
            .subscribe(function (movies) { return _this.movies = movies; });
    };
    MoviesListComponent.prototype.searchMovies = function (ev) {
        this.value = ev.target.value;
        this.getMovies();
    };
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/cmps/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/cmps/movies-list/movies-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service_service__WEBPACK_IMPORTED_MODULE_2__["MoviesServiceService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/cmps/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/cmps/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNav\" class=\"navbar-container\">\n  <div routerLink=\"\" class=\"logo-container flex align-center\">\n    <img src=\"../../../assets/logo.png\">\n    <div class=\"logo\">\n      <h2>REVIEWS</h2>\n      <h6>Review a movie</h6>\n    </div>\n  </div>\n  <ul class=\"links\">\n    <li routerLink=\"\">Movies</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/cmps/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/cmps/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-container {\n  background: #fff;\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 99; }\n\n.logo {\n  box-sizing: border-box; }\n\n.links {\n  padding: 0;\n  margin: auto 0; }\n\n.links li {\n    list-style-type: none;\n    outline: 0;\n    cursor: pointer;\n    transition: all .3s; }\n\n.links li:hover {\n    color: #0397D6; }\n\nimg {\n  width: 50px;\n  height: 45px;\n  margin-right: 10px; }\n\nh2 {\n  color: #0397D6;\n  font-size: 32px;\n  margin: 0; }\n\nh6 {\n  margin: 0; }\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.logo-container {\n  cursor: pointer;\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9uYXZiYXIvQzpcXGRpdlxcYW5ndWxhcmltZGJcXGltZGJmcm9udC9zcmNcXGFwcFxcY21wc1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLFlBQVc7RUFDWCxjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLHVDQUFtQztFQUNuQyxnQkFBZTtFQUNmLE9BQU07RUFDTixTQUFRO0VBQ1IsWUFBVyxFQUNkOztBQUNEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksV0FBVTtFQUNWLGVBQWMsRUFVakI7O0FBWkQ7SUFJUSxzQkFBcUI7SUFDckIsV0FBVTtJQUNWLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCOztBQVJMO0lBVVEsZUFBYyxFQUNqQjs7QUFFTDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsVUFBUyxFQUNaOztBQUNEO0VBQ0ksVUFBUyxFQUNaOztBQUNEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jbXBzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG4ubG9nb3tcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmxpbmtze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcbiAgICBsaTpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzAzOTdENjtcclxuICAgIH1cclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiAjMDM5N0Q2O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmg2e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5sb2dve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4ubG9nby1jb250YWluZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/cmps/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/cmps/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route) {
        this.route = route;
        this.yPostion = 0;
        this.showNav = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot;
        console.log(id);
        window.addEventListener('scroll', function (ev) {
            if (window.scrollY > _this.yPostion) {
                _this.showNav = false;
            }
            else {
                _this.showNav = true;
            }
            _this.yPostion = window.scrollY;
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/cmps/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/cmps/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/cmps/open-story/open-story.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cmps/open-story/open-story.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"has-slider\">\n    <div class=\"slider\" *ngIf=\"movies.length > 0\">\n        <div id=\"story2\" [style.background-image]=\"'url('+movies[currStory].Poster+')'\" class=\"front-side\">\n        </div>\n        <div *ngIf=\"currStory<movies.length-1\" id=\"story1\" [style.background-image]=\"'url('+movies[currStory+1].Poster+')'\" class=\"left-side\">\n        </div>\n        <div *ngIf=\"currStory>0\" id=\"story3\" [style.background-image]=\"'url('+movies[currStory-1].Poster+')'\" class=\"right-side\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/open-story/open-story.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cmps/open-story/open-story.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-slider {\n  -webkit-perspective: 2000px;\n  perspective: 2000px;\n  -webkit-perspective-origin: center;\n  perspective-origin: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 1000; }\n\n.slider {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 50% -50vw;\n  transform-origin: 50% 50% -50vw;\n  height: 100%;\n  width: 100%;\n  position: relative; }\n\n.slider div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: hidden;\n  font-size: 50px;\n  margin: auto 0;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.back-side {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-transform: translateZ(-100vw) rotateY(-180deg);\n  transform: translateZ(-100vw) rotateY(-180deg); }\n\n.left-side {\n  -webkit-transform: translateX(50vw) translateZ(-50vw) rotateY(90deg);\n  transform: translateX(50vw) translateZ(-50vw) rotateY(90deg); }\n\n.right-side {\n  -webkit-transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg);\n  transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9vcGVuLXN0b3J5L0M6XFxkaXZcXGFuZ3VsYXJpbWRiXFxpbWRiZnJvbnQvc3JjXFxhcHBcXGNtcHNcXG9wZW4tc3RvcnlcXG9wZW4tc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBQ25CLG1DQUFrQztFQUNsQywyQkFBMEI7RUFDMUIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixjQUFhLEVBQ2hCOztBQUNEO0VBQ0kscUNBQW9DO0VBQ3BDLDZCQUE0QjtFQUM1Qix3Q0FBdUM7RUFFdkMsZ0NBQStCO0VBQy9CLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCOztBQUNEO0VBRVEsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0NBQW1DO0VBQ25DLDRCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjO0VBSWQsY0FBYTtFQUliLG9CQUFtQjtFQUduQixzQkFBcUI7RUFDckIsNkJBQTRCO0VBQzVCLHVCQUFzQixFQUN6Qjs7QUFJTDtFQUNJLGlDQUFnQztFQUVoQyx5QkFBd0I7RUFDeEIsdURBQXNEO0VBQ3RELCtDQUE4QyxFQUNqRDs7QUFFRDtFQUNJLHFFQUFvRTtFQUNwRSw2REFBNEQsRUFDL0Q7O0FBRUQ7RUFDSSx1RUFBc0U7RUFDdEUsK0RBQThELEVBQ2pFIiwiZmlsZSI6InNyYy9hcHAvY21wcy9vcGVuLXN0b3J5L29wZW4tc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzLXNsaWRlcntcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDIwMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAyMDAwcHg7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogY2VudGVyO1xyXG4gICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLnNsaWRlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgLTUwdnc7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlIC01MHZ3O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAtNTB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zbGlkZXJ7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5iYWNrLXNpZGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwdncpIHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHZ3KSByb3RhdGVZKC0xODBkZWcpO1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwdncpIHRyYW5zbGF0ZVooLTUwdncpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwdncpIHRyYW5zbGF0ZVooLTUwdncpIHJvdGF0ZVkoOTBkZWcpO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTB2dykgdHJhbnNsYXRlWigtNTB2dykgcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHZ3KSB0cmFuc2xhdGVaKC01MHZ3KSByb3RhdGVZKC05MGRlZyk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cmps/open-story/open-story.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cmps/open-story/open-story.component.ts ***!
  \*********************************************************/
/*! exports provided: OpenStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenStoryComponent", function() { return OpenStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var OpenStoryComponent = /** @class */ (function () {
    function OpenStoryComponent(location, route, service) {
        this.location = location;
        this.route = route;
        this.service = service;
        this.value = 'batman';
        this.movies = [];
    }
    OpenStoryComponent.prototype.ngOnInit = function () {
        this.getMovies();
        setTimeout(this.set, 1000, this);
    };
    OpenStoryComponent.prototype.goBack = function () {
        this.location.back();
    };
    OpenStoryComponent.prototype.set = function (that) {
        var sliderEl = document.querySelector('.slider'); // NEW: our element
        console.log(sliderEl);
        var slideCount = 3; // NEW: the total # of slides
        var sliderManager = new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Manager"](sliderEl);
        sliderManager.add(new hammerjs__WEBPACK_IMPORTED_MODULE_4__["Pan"]({ threshold: 0, pointers: 0 }));
        sliderManager.on('pan', function (e) {
            var percentage = 100 / slideCount * e.deltaX / window.innerWidth;
            if (that.currStory === 0 && e.deltaX > 0)
                return;
            if (that.currStory === that.movies.length - 1 && e.deltaX < 0)
                return;
            var transformPercentage360 = 90 * (e.deltaX / 360);
            // sliderEl.style.transform = 'rotateY(' + transformPercentage360 + 'deg)';
            // if (e.deltaY > 0) sliderEl.style.top = e.deltaY + 'px'
            if (e.isFinal) { // NEW: this only runs on event end
                if (e.deltaY > 200) {
                    that.goBack();
                }
                else {
                    // sliderEl.style.top = '0'
                }
                if (percentage < (-33 / 2)) {
                    goToSlide();
                    that.currStory++;
                }
                else if (percentage > (33 / 2)) {
                    goToSlide();
                    that.currStory--;
                }
                else
                    goToSlide();
            }
        });
        // NEW: function that changes the slide
        var goToSlide = function () {
            if (that.currStory === 0)
                return;
            // sliderEl.style.transform = 'rotateY(0)';
        };
    };
    OpenStoryComponent.prototype.getMovies = function () {
        var _this = this;
        this.service.getMovies(this.value)
            .subscribe(function (movies) {
            _this.movies = movies;
            var id = _this.route.snapshot.paramMap.get('imdbID');
            _this.currStory = _this.movies.findIndex(function (movie) { return movie.imdbID === id; });
        });
    };
    OpenStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-story',
            template: __webpack_require__(/*! ./open-story.component.html */ "./src/app/cmps/open-story/open-story.component.html"),
            styles: [__webpack_require__(/*! ./open-story.component.scss */ "./src/app/cmps/open-story/open-story.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_movies_service_service__WEBPACK_IMPORTED_MODULE_3__["MoviesServiceService"]])
    ], OpenStoryComponent);
    return OpenStoryComponent;
}());



/***/ }),

/***/ "./src/app/cmps/story/story.component.html":
/*!*************************************************!*\
  !*** ./src/app/cmps/story/story.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [routerLink]=\"'/openstory/'+movie.imdbID\"\n  [style.background-image]=\"'url('+movie.Poster+')'\"\n  class=\"story\">\n</div>"

/***/ }),

/***/ "./src/app/cmps/story/story.component.scss":
/*!*************************************************!*\
  !*** ./src/app/cmps/story/story.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".story {\n  width: 60px;\n  height: 60px;\n  margin: 3px;\n  background-size: cover;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9zdG9yeS9DOlxcZGl2XFxhbmd1bGFyaW1kYlxcaW1kYmZyb250L3NyY1xcYXBwXFxjbXBzXFxzdG9yeVxcc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY21wcy9zdG9yeS9zdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeXtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cmps/story/story.component.ts":
/*!***********************************************!*\
  !*** ./src/app/cmps/story/story.component.ts ***!
  \***********************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoryComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoryComponent.prototype, "movies", void 0);
    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/cmps/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.scss */ "./src/app/cmps/story/story.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/services/movies-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/movies-service.service.ts ***!
  \****************************************************/
/*! exports provided: MoviesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesServiceService", function() { return MoviesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MoviesServiceService = /** @class */ (function () {
    function MoviesServiceService(http) {
        this.http = http;
    }
    MoviesServiceService.prototype.getMovies = function (search) {
        return this.http.get("http://www.omdbapi.com/?apikey=bdfb6376&s=" + search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.Search;
        }));
    };
    MoviesServiceService.prototype.getMovieById = function (movieId) {
        return this.http.get("http://www.omdbapi.com/?apikey=bdfb6376&i=" + movieId);
    };
    MoviesServiceService.prototype.sendReview = function (review) {
        var reviews = JSON.parse(localStorage.getItem('reviews'));
        if (!reviews)
            reviews = [];
        if (!review._id) {
            review._id = this.makeid(8);
            reviews.unshift(review);
        }
        else {
            var idx = reviews.findIndex(function (currReview) { return currReview._id === review._id; });
            reviews.splice(idx, 1, review);
        }
        localStorage.setItem('reviews', JSON.stringify(reviews));
    };
    MoviesServiceService.prototype.loadReviews = function (movieId) {
        var reviews = JSON.parse(localStorage.getItem('reviews'));
        if (!reviews)
            return;
        return reviews.filter(function (movie) { return movie.movieId === movieId; });
    };
    MoviesServiceService.prototype.getReviewById = function (id) {
        var reviews = JSON.parse(localStorage.getItem('reviews'));
        if (!reviews)
            return;
        return reviews.filter(function (movie) { return movie._id === id; })[0];
    };
    MoviesServiceService.prototype.deleteReview = function (id) {
        var reviews = JSON.parse(localStorage.getItem('reviews'));
        var idx = reviews.findIndex(function (currReview) { return currReview._id === id; });
        reviews.splice(idx, 1);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        return reviews;
    };
    MoviesServiceService.prototype.makeid = function (num) {
        var text = "";
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < num; i++) {
            text += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        return text;
    };
    MoviesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesServiceService);
    return MoviesServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\div\angularimdb\imdbfront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map