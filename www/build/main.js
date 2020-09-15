webpackJsonp([6],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		276,
		5
	],
	"../pages/educational-consultant-services/educational-consultant-services.module": [
		277,
		4
	],
	"../pages/our-team/our-team.module": [
		278,
		3
	],
	"../pages/tutoring-services/tutoring-services.module": [
		279,
		2
	],
	"../pages/tutoring-sign-up/tutoring-sign-up.module": [
		281,
		1
	],
	"../pages/what-s-happening-now/what-s-happening-now.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tutoring_services_tutoring_services__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_educational_consultant_services_educational_consultant_services__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tutoring_sign_up_tutoring_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_our_team_our_team__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_what_s_happening_now_what_s_happening_now__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tutoring_services_tutoring_services__["a" /* TutoringServicesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tutoring_sign_up_tutoring_sign_up__["a" /* TutoringSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_our_team_our_team__["a" /* OurTeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_what_s_happening_now_what_s_happening_now__["a" /* WhatSHappeningNowPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/educational-consultant-services/educational-consultant-services.module#EducationalConsultantServicesPageModule', name: 'EducationalConsultantServicesPage', segment: 'educational-consultant-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/our-team/our-team.module#OurTeamPageModule', name: 'OurTeamPage', segment: 'our-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoring-services/tutoring-services.module#TutoringServicesPageModule', name: 'TutoringServicesPage', segment: 'tutoring-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/what-s-happening-now/what-s-happening-now.module#WhatSHappeningNowPageModule', name: 'WhatSHappeningNowPage', segment: 'what-s-happening-now', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutoring-sign-up/tutoring-sign-up.module#TutoringSignUpPageModule', name: 'TutoringSignUpPage', segment: 'tutoring-sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tutoring_services_tutoring_services__["a" /* TutoringServicesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tutoring_sign_up_tutoring_sign_up__["a" /* TutoringSignUpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_our_team_our_team__["a" /* OurTeamPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_what_s_happening_now_what_s_happening_now__["a" /* WhatSHappeningNowPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__educational_consultant_services_educational_consultant_services__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoring_services_tutoring_services__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_about_us__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__what_s_happening_now_what_s_happening_now__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToTutoring = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tutoring_services_tutoring_services__["a" /* TutoringServicesPage */]);
    };
    HomePage.prototype.goToConsulting = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */]);
    };
    HomePage.prototype.goHome = function () {
    };
    HomePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_us_about_us__["a" /* AboutUsPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__what_s_happening_now_what_s_happening_now__["a" /* WhatSHappeningNowPage */]);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\home\home.html"*/'<ion-header (swipe)="swipeEvent($event)">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <!--<button ion-button small icon-end>\n      <ion-icon name="home"></ion-icon>\n      Home Icon\n    </button>-->\n\n    <ion-buttons end>\n        \n        <button ion-button (click)="goHome()">\n          <ion-icon large name="home"></ion-icon>\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-content  padding  class="pane">\n  <div class="center">\n\n  <h3>\n    <img src="../../assets/imgs/transparentLogoWithSubhead.webp">\n  </h3>\n \n    <hr>\n\n  <h3>\n    CHOYCES Summer Dance Academy Final Performance\n  </h3>\n\n  <p>\n    <!--<object height="350" width="425">\n<param name="movie" value="https://www.youtube.com/v/R3ymHMgFAps">\n<param name="wmode" value="transparent">\n<embed height="350" src="https://www.youtube.com/v/R3ymHMgFAps?rel=0" type="application/x-shockwave-flash" width="425" wmode="transparent">\n</object>-->\n<iframe width="315" height="315" src="https://www.youtube.com/embed/wGL4LkB0Igw" \nframeborder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; \npicture-in-picture" allowfullscreen></iframe>\n  </p>\n\n  <h3>\n    Educational Consulting\n  </h3>\n\n  <p>\n    CHOYCES offers education consultations to provide students with advice regarding \n    their academics and guide them to their fullest potential.\n  </p>\n  <button ion-button small color="primary" (click)="goToConsulting()">Learn More</button>\n\n\n<h3>\n  Tutoring Services\n</h3>\n<p>\n  CHOYCES offers online tutoring services for students in grade K-12  to help enrich \n  student’s education outside of school.\n</p>\n  <p>\n    <button ion-button small color="primary" (click)="goToTutoring()">Learn More</button>\n  </p>\n\n  <a href="https://choyces.org/sponsor/"><button ion-button small color="gold">Donate \n    / Sponsor</button></a>\n\n\n  <h3>\n    In The News\n  </h3>\n  <hr>\n\n  <ion-card>\n    <ion-card-header>\n      Benefits of Tutoring\n    </ion-card-header>\n    <ion-card-content>\n      “The more academic support students receive, the more likely they are to pass \n      their courses and stay enrolled.”\n\n    <ion-row>\n      <a href="https://www.valleycollege.edu/about-sbvc/offices/office-research-planning/\n      reports/tutoring-performance-measures-final-revisions-review.pdf"> Read More\n      </a>\n    </ion-row>\n    </ion-card-content>\n\n    <hr>\n\n    <ion-card-content>\n      “Tutoring gives students individualized attention that they don’t get in a crowded \n      classroom. This helps children who struggle to keep up, as well as those who aren’t \n      challenged enough.”\n\n    <ion-row>\n      <a href="https://www.oxfordlearning.com/benefits-of-tutoring/"> Read More\n      </a>\n    </ion-row>\n  </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Synchronous vs Asrynchronous Learning\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <a href="https://tophat.com/blog/remote-teaching-when-and-how-to-use-synchronous-\n        vs-asynchronous-methods/"> Remote Teaching: When and How to Use Synchronous vs. \n        Asynchronous Methods\n        </a>\n      </ion-row>\n    </ion-card-content>\n    \n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Creative Education\n    </ion-card-header>\n    <ion-card-content>\n      “Creativity isn’t just responsible for crayon drawings hanging on refrigerators \n      and canvases on gallery walls — research suggests that creative individuals tend \n      to earn more money, live happier lives, and generate more new ideas across all industries”\n   \n\n    <ion-row>\n      <a href="https://www.creativelive.com/blog/creative-education-importance/"> Read More\n      </a>\n    </ion-row>\n  </ion-card-content>\n    <hr>\n\n    <ion-card-content>\n      “Creativity in the classroom goes hand in hand with exceptional student \n      learning, according to a new Gallup study examining U.S. education. Specifically, \n      K-12 teachers who frequently make assignments that require students to think \n      creatively are much more likely than other teachers to observe higher-order \n      cognitive skills in their students”\n    <ion-row>\n      <a href="https://news.gallup.com/opinion/gallup/245600/teachers-promote-creativity-\n      educational-results.aspx"> Read More\n      </a>\n    </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <h3>\n    Testimonials\n  </h3>\n  <hr>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>“Dr. Goolsby is an exceptional professional. She has facilitated \n        multiple Professional Development on de-escalation and techniques to support \n        students in crises. She has effectively created a therapeutic environment where \n        students are able to take a much needed break to de-escalate and reflect!” \n        <p>\n        Andrys Perez <br>\n          NYCDOE Paraprofessional\n        </p>\n      </ion-col>\n      <ion-col col-6>“Ms. Goolsby worked with my twin boys at Mosaic Preparatory School. \n        I have known her for three years and she demonstrated to be hard working and \n        respectful to my family. She is professional and kind. It is an honor and privilege \n        to have met her. Her dedication is outstanding.”\n        <p>\n          Mrs. Cavedo<br>\n          Parent\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p>\n    Copyright © 2020 CHOYCES\n  </p>\n  </div>\n\n<style type="text/css">\n  .pane{\n    background:url(\'../../assets/imgs/background_image.PNG\') top center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    background-size: cover;\n  }\n</style>\n\n<style type="text/css">\ndiv.center{\n  text-align: center;\n  \n}\n</style>\n</ion-content>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n  <ion-buttons start>\n    <h6>\n      Contact Us!\n    </h6>\n\n    <a href="tel:3479166535"><button ion-button icon-only>\n      <ion-icon name="call-outline"></ion-icon>\n    </button></a>\n    \n    <a href="mailto:info@choyces.org"><button ion-button icon-only>\n      <ion-icon name="mail-outline"></ion-icon>\n    </button>\n\n    </a>\n  </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\home\home.html"*/
        })
        /*
        DIRECTION_NONE         1
        DIRECTION_LEFT         2
        DIRECTION_RIGHT        4
        DIRECTION_UP           8
        DIRECTION_DOWN         16
        DIRECTION_HORIZONTAL   6
        DIRECTION_VERTICAL     24
        DIRECTION_ALL          30
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_us_about_us__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tutoring_services_tutoring_services__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_educational_consultant_services_educational_consultant_services__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutoring_sign_up_tutoring_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_our_team_our_team__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_what_s_happening_now_what_s_happening_now__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_us_about_us__["a" /* AboutUsPage */] },
            { title: 'Tutoring Services', component: __WEBPACK_IMPORTED_MODULE_7__pages_tutoring_services_tutoring_services__["a" /* TutoringServicesPage */] },
            { title: 'Educational Consultant Services', component: __WEBPACK_IMPORTED_MODULE_8__pages_educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */] },
            { title: 'Tutoring Sign Up', component: __WEBPACK_IMPORTED_MODULE_9__pages_tutoring_sign_up_tutoring_sign_up__["a" /* TutoringSignUpPage */] },
            { title: 'Our Team', component: __WEBPACK_IMPORTED_MODULE_10__pages_our_team_our_team__["a" /* OurTeamPage */] },
            { title: 'What\'s Happening Now', component: __WEBPACK_IMPORTED_MODULE_11__pages_what_s_happening_now_what_s_happening_now__["a" /* WhatSHappeningNowPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationalConsultantServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutoring_services_tutoring_services__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__our_team_our_team__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EducationalConsultantServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationalConsultantServicesPage = /** @class */ (function () {
    function EducationalConsultantServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EducationalConsultantServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationalConsultantServicesPage');
    };
    EducationalConsultantServicesPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EducationalConsultantServicesPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__our_team_our_team__["a" /* OurTeamPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tutoring_services_tutoring_services__["a" /* TutoringServicesPage */]);
        }
    };
    EducationalConsultantServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-educational-consultant-services',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\educational-consultant-services\educational-consultant-services.html"*/'<!--\n  Generated template for the EducationalConsultantServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (swipe)="swipeEvent($event)">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Educational Consulting</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <h4>\n    Special Education Services\n  </h4>\n  <hr>\n  <p>\n    At C.H.O.Y.C.E.S, we want to ensure that every student has the \n    opportunity to equal access to education. That is why we provide \n    specialized services to assist the student and integrate our services \n    into the school curriculum.\n  </p>\n\n  <h4>\n    Development and Understanding of IEP\n  </h4>\n  <hr>\n  <p>\n    IEP (Individualized Education Program) is a document developed by schools \n    for children who are eligible for special education. We help you to understand \n    the IEP process and guarantee that your child’s unique needs are addressed.\n  </p>\n\n  <h4>\n    Curriculum Planning\n  </h4>\n  <hr>\n  <p>\n    Curriculum planning is the creation and structure of academic experiences. \n    We will help to create a curriculum that is best suited for students, focus \n    on important concepts, and plan out day-today activities, projects, and lessons.\n  </p>\n\n  <h4>\n    Differentiated Instruction\n  </h4>\n  <hr>\n  <p>\n    At C.H.O.Y.C.E.S, we understand that every student’s learning techniques are \n    different and every student’s curriculum begins with students’ interest and \n    experiences. To ensure every student’s needs are met, we individualize our \n    tutoring programs based on areas that need improvement. Tutors will work with \n    students individually at a pace that is comfortable for them to strengthen their skills.\n  </p>\n\n  <h4>\n    Data Driven Instruction\n  </h4>\n  <hr>\n  <p>\n    This process is using data that is gathered and analyzed about students in the \n    classroom and is utilized to improve how students are taught in order to enhance \n    student performance throughout the year. C.H.O.Y.C.E.S is here to help integrate\n     data driven instruction in your classroom!\n  </p>\n\n  <h4>\n    Teacher Observation and APPR\n  </h4>\n  <hr>\n  <p>\n    APPR is an evaluation of teacher performance through the use of student achievement\n     and growth. We will help with the APPR and ensure you are doing what it takes \n     to score high on APPR.\n  </p>\n\n  <h4>\n    Response to Intervention\n  </h4>\n  <hr>\n  <p>\n    This is a method used to help students improve on skills or topics they are \n    struggling with. We will use test scores and assignments to evaluate the \n    student and focus heavily on the area of weakness. Students will be monitored \n    closely to measure progress.\n  </p>\n\n  <h4>\n    Resume Writing\n  </h4>\n  <hr>\n  <p>\n    Having a well-written resume is important to gain the attention of hiring \n    managers. C.H.O.Y.C.E.S will provide services to help improve your resume to \n    accentuate your education, work experience, credentials, and accomplishments.\n  </p>\n\n\n</ion-content>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\educational-consultant-services\educational-consultant-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EducationalConsultantServicesPage);
    return EducationalConsultantServicesPage;
}());

//# sourceMappingURL=educational-consultant-services.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutoringServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutoring_sign_up_tutoring_sign_up__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_about_us__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__educational_consultant_services_educational_consultant_services__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TutoringServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutoringServicesPage = /** @class */ (function () {
    function TutoringServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutoringServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutoringServicesPage');
    };
    TutoringServicesPage.prototype.goToSignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tutoring_sign_up_tutoring_sign_up__["a" /* TutoringSignUpPage */]);
    };
    TutoringServicesPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    TutoringServicesPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_us_about_us__["a" /* AboutUsPage */]);
        }
    };
    TutoringServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutoring-services',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\tutoring-services\tutoring-services.html"*/'<!--\n  Generated template for the TutoringServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (swipe)="swipeEvent($event)">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tutoring Services</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" (click)="goToSignUp()">Schedule A Session</button>\n  \n  <h3>\n    Academics\n  </h3>\n      <hr>\n   <p>\n    We offer tutoring in all major subjects including Math, English Language Arts, \n    Reading, Writing, Science and Social studies through K-12.\n   </p>\n    \n\n  <h3>\n    Test Preparation\n  </h3>\n<hr>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n          SAT Subject\n        </h5>\n        <p>\n          Services are available to assist students to prepare for individual SAT \n          subject tests to improve skills in specific subjects. The sessions take \n          place over the course of 6 hours.\n        </p>\n      </ion-col>\n\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n          SAT / ACT\n        </h5>\n        <p>\n          With our SAT/ACT programs, we will assist students to prepare for these \n          exams or to raise their scores in order to help them feel more confident \n          and prepared for test day. The sessions take place over the course of 19.5 hours.\n        </p>\n      </ion-col>\n\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n          PSAT\n        </h5>\n        <p>\n          Services are available to assist students with the PSAT, an exam taken \n          prior to the SAT. Many of the sessions are over the course of 16.5 hours.\n        </p>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <h3>\n    College Readiness\n  </h3>\n<hr>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:darkgoldenrod;">\n          Application\n        </h5>\n        <p>\n          We provide assistance with every step of the college application and essay process to ensure that deadlines are met and are done efficiently and effectively.\n        </p>\n      </ion-col>\n\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:darkgoldenrod;">\n          Mentorship\n        </h5>\n        <p>\n          We guide each student to ensure that they are taking the correct classes in high school, developing important skills, and exploring extracurricular activities/ volunteer opportunities. \n        </p>\n      </ion-col>\n\n      <ion-col col-4> \n        <h5 style="border:3px; border-style:solid; border-color:darkgoldenrod;">\n          College Research\n        </h5>\n        <p>\n          Finding the correct college for each student is an important, but difficult decision. We provide assistance in finding the one that is the right fit and provides the best opportunities.\n        </p>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\tutoring-services\tutoring-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TutoringServicesPage);
    return TutoringServicesPage;
}());

//# sourceMappingURL=tutoring-services.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutoring_services_tutoring_services__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutUsPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tutoring_services_tutoring_services__["a" /* TutoringServicesPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\about-us\about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (swipe)="swipeEvent($event)"\n>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <img src="../../assets/imgs/cropped-CHOYCES_Logo_Redesign_1-Copy-2.webp" width="80"/>\n      </ion-col>\n      <ion-col col-8>\n        <p>\n          "Creativity is Contagious, Pass It on!" - Albert Einstein\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <h3>About CHOYCES</h3>\n\n  <p>\n    CHOYCES is a profit organization operating in Rochester, New York \n    and has expanded across the United States with skillful expertises \n    since its creation! It is our mission at CHOYCES to help students think \n    creatively, and to provide individualized tutoring to students based on \n    what works for them.\n  </p>\n\n\n\n  <ion-card>\n    <img src="../../assets/imgs/danielleWithBackground.png"/>\n    <ion-card-header>\n      <h4> Dr. Danielle S. Goolsby</h4>\n      <!--<ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>-->\n    </ion-card-header>\n  \n    <ion-card-content>\n      <hr>\n      <p>\n        Danielle S. Goolsby has always had a love for education. She has experience \n        tutoring even before she decided to become an educator. Dr. Goolsby is a \n        native of Rochester, New York. She has a Bachelors in Communication with a \n        minor in Political Science from the University at Buffalo in Buffalo, NY, a \n        Masters in Childhood Education from St. John Fisher College in Rochester, NY, \n        with certifications in both General & Special Education, and completed her \n        Doctorate in Interdisciplinary Education at LIU, C.W. Post, in Long Island, NY.\n    \n      </p>\n    \n      <p>\n        Danielle has been in the education field for 8 years. She has consistently \n        demonstrated proficiency in communication, leadership, conflict resolution, \n        teaching students with disabilities, common core curriculum development, providing \n        professional development for colleagues, mentorship, and staff development.\n      </p>\n    \n      <p>\n        As a leader and educator, Ms. Goolsby is consistently confronted with opportunities \n        to provide needed information to her colleagues, students and their families as well \n        as serve as the go between and liaison for effective communication, pedagogy and education. \n        She has been a staff developer, teacher leader, IEP teacher, and a part of a school leadership \n        team for the past 6 years.  During this time, she has had the opportunity to take part in \n        New York City Quality Review debriefings with administrators and reviewers, create teacher \n        improvement plans, and provide professional development in Special Education, inclusion, \n        classroom and behavior management, literacy, best practices for academic success, and new \n        teacher hires. She has been acknowledged for many things such as academic communication, \n        leadership, and professional mediation among colleagues. As a fluent Spanish speaker, she \n        is able to connect and communicate with native Spanish speakers.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  \n\n  \n\n  <h6>\n    Give your child the tools to succeed by making the right CHOYCES to Creatively Help Our Youth \n    Conquer Education & Success.\n  </h6>\n\n  <p>\n    We believe education plays a major role in gaining knowledge for the necessary skills you need \n    to reach your goals. Some benefits of education are being able to give back to communities, \n    reaching goals and setting standards for your life, as well as setting a good example for others.\n  </p>\n\n  <p>\n    CHOYCES offers tutoring services and manages to provide experience in college readiness. \n    CHOYCES is all about creativity, thus, it has expanded to offer a variety of dance classes \n    and private sessions. We also offer test preparation, and educational consultation. CHOYCES \n    is not limited to the tri-state area, Rochester, or New York State, as it offers virtual \n    tutoring session using Skype.\n  </p>\n\n  <p>\n    Tutoring consists of homework help, as well as, help with struggling areas identified by a\n    progress report by your child\'s teacher and/or the online questionnaire. All tutoring consists \n    of the grade appropriate Common Core Learning Standards.\n  </p>\n  <img src="../../assets/imgs/CHOYCES_Icon_Pencil-Straight.svg" width="1000"\n  height="200"/>\n</ion-content>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__educational_consultant_services_educational_consultant_services__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__what_s_happening_now_what_s_happening_now__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OurTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OurTeamPage = /** @class */ (function () {
    function OurTeamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OurTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OurTeamPage');
    };
    OurTeamPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OurTeamPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__what_s_happening_now_what_s_happening_now__["a" /* WhatSHappeningNowPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__educational_consultant_services_educational_consultant_services__["a" /* EducationalConsultantServicesPage */]);
        }
    };
    OurTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-our-team',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\our-team\our-team.html"*/'<!--\n  Generated template for the OurTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (swipe)="swipeEvent($event)">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Our Team</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h3>\n  Our Team\n</h3>\n<hr>\n\n<ion-card>\n  <img src="../../assets/imgs/Picture1.webp"/>\n    <ion-card-header>\n      <h4> Abuchi</h4>\n      <!--<ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>-->\n    </ion-card-header>\n    <ion-card-content>\n      Abuchi Oguonu graduated from Rutgers University with a Bachelors in \n      Information Technology. He currently works as the lead for the Gaming/App team. \n      Outside of CHOYCES, he works as a Business Intelligence Consultant doing data \n      analytics. In his free time, he enjoys hanging out with friends and doing things \n      that get him out of the house such as hiking, sport, biking, etc.\n    </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <img src="../../assets/imgs/Picture2.webp"/>\n    <ion-card-header>\n      <h4> Aria</h4>\n      <!--<ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>-->\n    </ion-card-header>\n    <ion-card-content>\n      Aria is the current lead for the recruitment department. She knew CHOYCES \n      mission was something she wanted to be a part of and has grown and learned \n      so much from it. Outside of CHOYCES Aria is a junior Rutgers University \n      majoring in management and minoring in psychology. She hopes to go into the \n      HR field once she graduates.\n    </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <img src="../../assets/imgs/Picture3.webp"/>\n    <ion-card-header>\n      <h4> Aldin</h4>\n      <!--<ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>-->\n    </ion-card-header>\n    <ion-card-content>\n      Aldin is a 21-year-old graduate of Nassau Community College with an \n      Associate’s degree in Commercial Arts: Digital Technologies. He has several \n      years of experience as a freelance Graphic Designer, and was a summer Graphic \n      Design intern before taking on the job as a team lead. Outside of CHOYCES, \n      Aldin was a volunteer at the former Pets4Luv animal shelter, he loves animals \n      of all kinds, is an active and vocal advocate for Transgender, Gay, and Lesbian \n      equality, and draws upon his experience as a differently abled, Jewish, LGBT man \n      to further social change and growth. Aldin has also worked on activism for Autism\n       Spectrum Disorder in addition to his work for LGBT rights. \n    </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\our-team\our-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OurTeamPage);
    return OurTeamPage;
}());

//# sourceMappingURL=our-team.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatSHappeningNowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__our_team_our_team__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WhatSHappeningNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatSHappeningNowPage = /** @class */ (function () {
    function WhatSHappeningNowPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhatSHappeningNowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatSHappeningNowPage');
    };
    WhatSHappeningNowPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WhatSHappeningNowPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__our_team_our_team__["a" /* OurTeamPage */]);
        }
    };
    WhatSHappeningNowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-what-s-happening-now',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\what-s-happening-now\what-s-happening-now.html"*/'<!--\n  Generated template for the WhatSHappeningNowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header (swipe)="swipeEvent($event)">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>What\'s Happening Now</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="center">\n  <h2>\n    At CHOYCES we offer many different services and activities! <br>\n    Here is what is currently happening:\n  </h2>\n\n  \n  <h3 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n    CHOYCES Summer Dance Academy\n  </h3>\n  <hr>\n  <iframe width="360" height="315" src="https://www.youtube.com/embed/wGL4LkB0Igw" \n  frameborder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" \n  allowfullscreen></iframe>\n  <p>\n    CHOYCES SUMMER DANCE ACADEMY FINAL PERFORMANCE\n  </p>\n\n  <h3 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n    Social Justice Book Club\n  </h3>\n  <hr>\n  <p>\n    As an advocate for addressing social justice issues, CHOYCES is excited to host \n    our first Social Justice Book Club! Recent events have more than demonstrated that \n    our society has a lot of work to do. We are now faced with a pressing need to discuss \n    current issues with our youth in order to help them grow into knowledgeable and \n    compassionate global citizens. Talking to children about social justice is no easy \n    task, but it’s such an important one; reading and discussing books about human rights \n    topics is a perfect way to start a conservation! Led by a CHOYCES trained educator, our \n    Social Justice Book Club will provide opportunities for your child to tackle implicit \n    biases, explore current social issues more deeply, and foster the courage to fight for \n    their own rights and those around them.\n  </p>\n  <img src="../../assets/imgs/IMG-20200824-WA0000.webp">\n\n  <h3 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n    Summer Coding Class\n  </h3>\n  <hr>\n  <p>\n    Help your children grow this summer by signing them up to learn a new skill! The \n    CHOYCES summer coding academy will help your child learn the fundamentals of coding\n     while also having fun.\n  </p>\n  <img src="../../assets/imgs/WhatsApp-Image-2020-07-16-at-14.19.15.jpg">\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <img src="../../assets/imgs/pic.jpg" height="250">\n      </ion-col>\n      <ion-col col-6>\n        <p>\n          “My kids doing the Coding classes thru Danielle’s CHOYCES program!\n           Great way to keep the kids busy and still learning this summer, as well \n           as keeping kids active through the dance program that was run by Fatima! \n           Thank you so much for this opportunity!”<br>\n          - Brittany Fulmore<br>\n          Parent\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h3 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n    Virtual Summer Dance Academy <br>\n    with FatimaYana (Fatima Simmons)\n  </h3>\n  <hr>\n  <p>\n    CHOYCES is hosting a virtual summer dance academy featuring guest artist \n    FatimaYana (Fatima Simmons) who is the co-founder of C.H.O.Y.C.E.S. and has \n    danced with Lizzo. The summer dance academy will run from July 6th to July 31st \n    and will be open for children ages 5-15. Registration ends on June 30th. Dance \n    experience is NOT required.\n  </p>\n  <img src="../../assets/imgs/sdance.webp">\n\n  <h3 style="border:3px; border-style:solid; border-color:cornflowerblue;">\n    Let\'s Talk About It\n  </h3>\n  <hr>\n  <img src="../../assets/imgs/CHOYCES-4.webp">\n\n  <a href="https://www.facebook.com/choyces/">Check out our Facebook!</a>\n</div>\n</ion-content>\n\n<style type="text/css">\n  .pane{\n    background:url(\'../../assets/imgs/background_image.PNG\') top center fixed;\n    -webkit-background-size: auto;\n    -moz-background-size: auto;\n    background-size: auto;\n  }\n</style>\n\n<style type="text/css">\ndiv.center{\n  text-align: center;\n  \n}\n</style>\n\n<ion-footer (swipe)="swipeEvent($event)">\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\what-s-happening-now\what-s-happening-now.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WhatSHappeningNowPage);
    return WhatSHappeningNowPage;
}());

//# sourceMappingURL=what-s-happening-now.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutoringSignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutoringSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutoringSignUpPage = /** @class */ (function () {
    function TutoringSignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutoringSignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutoringSignUpPage');
    };
    TutoringSignUpPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TutoringSignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutoring-sign-up',template:/*ion-inline-start:"C:\Users\gtgol\MyIonicProject\src\pages\tutoring-sign-up\tutoring-sign-up.html"*/'<!--\n  Generated template for the TutoringSignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tutoring Sign Up</ion-title>\n\n    <ion-buttons end>\n        \n      <button ion-button (click)="goHome()">\n        <ion-icon large name="home"></ion-icon>\n      </button>\n\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h4>\n  Sign up for Tutoring Sessions Today!\n</h4>\n<p>\n  (347)916-6535 &emsp;\n  <a href="mailto:info@choyces.org"> info@choyces.org</a>\n</p>\n<hr>\n\n<h3>\n  Pricing\n</h3>\n<ion-grid>\n  <ion-row>\n    <ion-col col-2>\n      $65 <br>\n      $100 <br>\n      $175 <br>\n      $200\n    </ion-col>\n    <ion-col col-10>\n      1 hour session <br>\n      2 hour session (Save $30) <br>\n      Three 1 hour sessions (Save $20) <br>\n      Three 2 hour sessions (Save $100)\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<h4>\n  Deals\n</h4>\n\n<p>\n  Save $10 for group sessions. <br> <br>\n  $10 off for each additional sibling registered. <br> <br>\n  10% discount for essential workers, including teachers! (Requires proof). <br> <br>\n</p>\n\n<ion-list>\n  <ion-item>\n    <ion-input type="text" placeholder="Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Subject"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text"  placeholder="Message"></ion-input>\n  </ion-item>\n  <ion-item>\n    <button ion-button default menuToggle> Send Message </button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-navbar color="gold">\n    <ion-buttons start>\n      <h6>\n        Contact Us!\n      </h6>\n  \n      <a href="tel:3479166535"><button ion-button icon-only>\n        <ion-icon name="call-outline"></ion-icon>\n      </button></a>\n  \n      <a href="mailto:info@choyces.org"><button ion-button icon-only>\n        <ion-icon name="mail-outline"></ion-icon>\n      </button>\n  \n      </a>\n    </ion-buttons>\n  <ion-buttons end>\n    <h6>\n      Follow us!\n    </h6>\n      \n      <a href="https://www.facebook.com/choyces/"><button ion-button icon-only>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button></a>\n      <a href="http://instagram.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button></a>\n      <a href="http://twitter.com/choycesinc"><button ion-button icon-only>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button></a>\n      <a href="https://www.youtube.com/channel/UC2l5SiGWLrmlckmS4BCvUtQ"><button ion-button icon-only>\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button></a>\n\n  </ion-buttons>  \n</ion-navbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\gtgol\MyIonicProject\src\pages\tutoring-sign-up\tutoring-sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TutoringSignUpPage);
    return TutoringSignUpPage;
}());

//# sourceMappingURL=tutoring-sign-up.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map