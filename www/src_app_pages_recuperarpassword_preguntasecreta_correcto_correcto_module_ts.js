"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperarpassword_preguntasecreta_correcto_correcto_module_ts"],{

/***/ 8577:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/correcto/correcto-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPageRoutingModule": () => (/* binding */ CorrectoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _correcto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto.page */ 3080);




const routes = [
    {
        path: '',
        component: _correcto_page__WEBPACK_IMPORTED_MODULE_0__.CorrectoPage
    }
];
let CorrectoPageRoutingModule = class CorrectoPageRoutingModule {
};
CorrectoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorrectoPageRoutingModule);



/***/ }),

/***/ 439:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/correcto/correcto.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPageModule": () => (/* binding */ CorrectoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _correcto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto-routing.module */ 8577);
/* harmony import */ var _correcto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correcto.page */ 3080);







let CorrectoPageModule = class CorrectoPageModule {
};
CorrectoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correcto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorrectoPageRoutingModule
        ],
        declarations: [_correcto_page__WEBPACK_IMPORTED_MODULE_1__.CorrectoPage]
    })
], CorrectoPageModule);



/***/ }),

/***/ 3080:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/correcto/correcto.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectoPage": () => (/* binding */ CorrectoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _correcto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correcto.page.html?ngResource */ 7384);
/* harmony import */ var _correcto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correcto.page.scss?ngResource */ 7925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CorrectoPage = class CorrectoPage {
    constructor(activeroute, router, alertController, toastController) {
        this.activeroute = activeroute;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() {
    }
};
CorrectoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
CorrectoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-correcto',
        template: _correcto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_correcto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorrectoPage);



/***/ }),

/***/ 7925:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/correcto/correcto.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-item {\n  --padding-bottom: 10px;\n}\n\nion-content {\n  background-color: primary;\n}\n\n.successbob {\n  width: 80%;\n}\n\n.nopadding {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnJlY3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBS0oiLCJmaWxlIjoiY29ycmVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwcmltYXJ5O1xufVxuLnN1Y2Nlc3Nib2J7XG4gICAgd2lkdGg6IDgwJTtcbn1cbi5ub3BhZGRpbmd7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 7384:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/correcto/correcto.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <img class=\"logo animate__animated animate__fadeInLeft\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n      <h1 class=\"animate__animated animate__fadeInRight\">Asistencia QR</h1>\n      <p class=\"animate__animated animate__fadeInLeft\">Tu app para siempre quedar presente</p>\n    </ion-label>\n  </ion-title>\n\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center ion-padding-vertical animate__animated animate__zoomIn\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h3>Recuperar contraseña</h3>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <img class=\"successbob animate__animated animate__fadeInLeft\" \n        src=\"https://i.pinimg.com/236x/a3/91/45/a3914535a0dc40f5adf785ab90cbef42.jpg\">\n        </ion-item>\n\n        <h2 class=\"nopadding\">Correcto</h2>\n        <h4 class=\"nopadding\">Tu contraseña es</h4>\n        <h1 class=\"nopadding animate__animated animate__tada\" \n        *ngIf=\"usuario\">{{ usuario.password }}</h1>\n\n      </ion-card-content>\n\n      <ion-label>\n        <a routerLink=\"\">Iniciar Sesión</a>\n      </ion-label>\n\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperarpassword_preguntasecreta_correcto_correcto_module_ts.js.map