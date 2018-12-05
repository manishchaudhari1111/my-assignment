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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div class=\"container\">\n  <div class=\"row r-items\">\n    <ul class=\"c-items\">\n      <li class=\"c-item\" [ngClass]=\"{'show-img': imagesArray[0].showImg}\">\n        <img src=\"../assets/images/header01.jpg\">\n      </li>\n      <li class=\"c-item\" [ngClass]=\"{'show-img': imagesArray[1].showImg}\">\n        <img src=\"../assets/images/header02.jpg\">\n      </li>\n      <li class=\"c-item\" [ngClass]=\"{'show-img': imagesArray[2].showImg}\">\n        <img src=\"../assets/images/header03.jpg\">\n      </li>\n    </ul>\n  </div>\n  <div class=\"row r-numbers\">\n    <div class=\"c-numbers\">\n      <div class=\"c-number\" (click)=\"changeSlide(0)\" [ngClass]=\"{'selected-img': imagesArray[0].showImg}\"><img src=\"../assets/images/header01.jpg\"><span>1</span></div>\n      <div class=\"c-number\" (click)=\"changeSlide(1)\" [ngClass]=\"{'selected-img': imagesArray[1].showImg}\"><img src=\"../assets/images/header02.jpg\"><span>2</span></div>\n      <div class=\"c-number\" (click)=\"changeSlide(2)\" [ngClass]=\"{'selected-img': imagesArray[2].showImg}\"><img src=\"../assets/images/header03.jpg\"><span>3</span></div>\n    </div>\n  </div>\n  <!-- <div class=\"clip-container\">\n    <div class=\"clip1\"></div>\n    <div class=\"clip2\"></div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 900px;\n  margin: 50px auto;\n  padding: 0px 20px; }\n  .container .r-items {\n    margin-bottom: 10px; }\n  .container .row {\n    border: 2px solid #b1b1b1;\n    border-radius: 5px;\n    width: 100%;\n    margin: 20px auto; }\n  .container .row .c-item {\n      display: none;\n      -webkit-transform-origin: 50% 50%;\n              transform-origin: 50% 50%;\n      -webkit-animation-name: change-slide;\n              animation-name: change-slide;\n      -webkit-animation-duration: 300ms;\n              animation-duration: 300ms;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-animation-iteration-count: 1;\n              animation-iteration-count: 1;\n      -webkit-animation-timing-function: cubic-bezier(0, 0.24, 0.24, 0.98);\n              animation-timing-function: cubic-bezier(0, 0.24, 0.24, 0.98); }\n  .container .row .c-item.show-img {\n        display: block; }\n  .container .row .c-items {\n      -webkit-perspective: 1000px;\n              perspective: 1000px;\n      height: 400px;\n      padding: 0px 15px; }\n  .container .row li {\n      list-style: none; }\n  .container .row img {\n      width: 100%;\n      height: 400px; }\n  .container .c-numbers {\n    display: flex;\n    justify-content: center;\n    background-color: #b1b1b1; }\n  .container .c-numbers .c-number {\n      border: 2px solid #fff;\n      border-radius: 50%;\n      height: 50px;\n      width: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      margin: 5px;\n      cursor: pointer; }\n  .container .c-numbers .c-number span {\n        position: absolute;\n        color: #fff;\n        font-size: 1.5rem;\n        font-weight: bold; }\n  .container .c-numbers .c-number img {\n        border-radius: 100%;\n        height: 100%;\n        opacity: 0.5;\n        transition: opacity 0.3s, -webkit-transform 0.3s;\n        transition: opacity 0.3s, transform 0.3s;\n        transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s; }\n  .container .c-numbers .c-number.selected-img {\n        cursor: default; }\n  .container .c-numbers .c-number.selected-img img {\n          opacity: 1;\n          -webkit-transform: scale3d(0.75, 0.75, 1);\n                  transform: scale3d(0.75, 0.75, 1); }\n  .container .c-numbers .c-number:hover img {\n        opacity: 0.95;\n        -webkit-transform: scale3d(0.75, 0.75, 1);\n                transform: scale3d(0.75, 0.75, 1); }\n  .container .clip-container {\n    margin-bottom: 20px;\n    height: 200px; }\n  .container .clip2 {\n    background-color: #f78195;\n    height: 100%;\n    width: 50%;\n    -webkit-clip-path: polygon(100% 99%, 0% 100%, 100% 1%);\n            clip-path: polygon(100% 99%, 0% 100%, 100% 1%);\n    float: right; }\n  .container .clip1 {\n    background-color: #f78195;\n    width: 50%;\n    height: 100%;\n    -webkit-clip-path: polygon(100% 100%, 0% 100%, 0 0);\n            clip-path: polygon(100% 100%, 0% 100%, 0 0);\n    float: left; }\n  @-webkit-keyframes change-slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  25% {\n    opacity: 0.25;\n    -webkit-transform: scale(0.25);\n            transform: scale(0.25); }\n  75% {\n    opacity: 0.75;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  50% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes change-slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  25% {\n    opacity: 0.25;\n    -webkit-transform: scale(0.25);\n            transform: scale(0.25); }\n  75% {\n    opacity: 0.75;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  50% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZDpcXEFuZ3VsYXJcXG15LWFzc2lnbm1lbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsa0JBQWlCLEVBaUdwQjtFQXBHRDtJQUtRLG9CQUFtQixFQUN0QjtFQU5MO0lBUVEsMEJBQXlCO0lBQ3pCLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsa0JBQWlCLEVBMEJwQjtFQXJDTDtNQWFZLGNBQWE7TUFDYixrQ0FBeUI7Y0FBekIsMEJBQXlCO01BQ3pCLHFDQUE0QjtjQUE1Qiw2QkFBNEI7TUFDNUIsa0NBQXlCO2NBQXpCLDBCQUF5QjtNQUN6QixzQ0FBNkI7Y0FBN0IsOEJBQTZCO01BQzdCLHFDQUE0QjtjQUE1Qiw2QkFBNEI7TUFDNUIscUVBQTREO2NBQTVELDZEQUE0RCxFQUkvRDtFQXZCVDtRQXFCZ0IsZUFBYyxFQUNqQjtFQXRCYjtNQTBCWSw0QkFBbUI7Y0FBbkIsb0JBQW1CO01BQ25CLGNBQWE7TUFDYixrQkFBaUIsRUFDcEI7RUE3QlQ7TUErQlksaUJBQWdCLEVBQ25CO0VBaENUO01Ba0NZLFlBQVc7TUFDWCxjQUFhLEVBQ2hCO0VBcENUO0lBdUNRLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsMEJBQXlCLEVBdUM1QjtFQWhGTDtNQTJDWSx1QkFBc0I7TUFDdEIsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixZQUFXO01BQ1gsY0FBYTtNQUNiLHdCQUF1QjtNQUN2QixvQkFBbUI7TUFDbkIsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxnQkFBZSxFQTJCbEI7RUEvRVQ7UUFzRGdCLG1CQUFrQjtRQUNsQixZQUFXO1FBQ1gsa0JBQWlCO1FBQ2pCLGtCQUFpQixFQUNwQjtFQTFEYjtRQTREZ0Isb0JBQW1CO1FBQ25CLGFBQVk7UUFDWixhQUFZO1FBQ1osaURBQXdDO1FBQXhDLHlDQUF3QztRQUF4QyxpRUFBd0MsRUFDM0M7RUFoRWI7UUFrRWdCLGdCQUFlLEVBS2xCO0VBdkViO1VBb0VvQixXQUFVO1VBQ1YsMENBQWlDO2tCQUFqQyxrQ0FBaUMsRUFDcEM7RUF0RWpCO1FBMEVvQixjQUFhO1FBQ2IsMENBQWlDO2dCQUFqQyxrQ0FBaUMsRUFDckM7RUE1RWhCO0lBa0ZRLG9CQUFtQjtJQUNuQixjQUFhLEVBQ2hCO0VBcEZMO0lBc0ZRLDBCQUF5QjtJQUN6QixhQUFZO0lBQ1osV0FBVTtJQUNWLHVEQUE4QztZQUE5QywrQ0FBOEM7SUFDOUMsYUFBWSxFQUNmO0VBM0ZMO0lBNkZRLDBCQUF5QjtJQUN6QixXQUFVO0lBQ1YsYUFBWTtJQUNaLG9EQUEyQztZQUEzQyw0Q0FBMkM7SUFDM0MsWUFBVyxFQUNkO0VBR0w7RUFDSTtJQUNJLFdBQVU7SUFDViw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFFdkI7SUFDSSxjQUFhO0lBQ2IsK0JBQXNCO1lBQXRCLHVCQUFzQixFQUFBO0VBRTFCO0lBQ0ksY0FBYTtJQUNiLCtCQUFzQjtZQUF0Qix1QkFBc0IsRUFBQTtFQUUxQjtJQUNJLGFBQVk7SUFDWiw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQUE7RUFFekI7SUFDSSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBLEVBQUE7RUFuQjNCO0VBQ0k7SUFDSSxXQUFVO0lBQ1YsNEJBQW1CO1lBQW5CLG9CQUFtQixFQUFBO0VBRXZCO0lBQ0ksY0FBYTtJQUNiLCtCQUFzQjtZQUF0Qix1QkFBc0IsRUFBQTtFQUUxQjtJQUNJLGNBQWE7SUFDYiwrQkFBc0I7WUFBdEIsdUJBQXNCLEVBQUE7RUFFMUI7SUFDSSxhQUFZO0lBQ1osOEJBQXFCO1lBQXJCLHNCQUFxQixFQUFBO0VBRXpCO0lBQ0ksV0FBVTtJQUNWLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAuci1pdGVtc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYjFiMWIxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAuYy1pdGVte1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogY2hhbmdlLXNsaWRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAuMjQsIDAuMjQsIDAuOTgpO1xyXG4gICAgICAgICAgICAmLnNob3ctaW1ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmMtaXRlbXN7XHJcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYy1udW1iZXJze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcclxuICAgICAgICAuYy1udW1iZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNlbGVjdGVkLWltZ3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNsaXAtY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5jbGlwMntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc4MTk1O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDk5JSwgMCUgMTAwJSwgMTAwJSAxJSk7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmNsaXAxe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzgxOTU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTAwJSwgMCUgMTAwJSwgMCAwKTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBrZXlmcmFtZXMgY2hhbmdlLXNsaWRle1xyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMjUle1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTsgXHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imagesArray = [{ showImg: true }, { showImg: false }, { showImg: false }];
        this.changeSlide = function (index) {
            for (var i = 0; i < this.imagesArray.length; i++) {
                if (i === index) {
                    this.imagesArray[i].showImg = true;
                }
                else {
                    this.imagesArray[i].showImg = false;
                }
            }
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! d:\Angular\my-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map