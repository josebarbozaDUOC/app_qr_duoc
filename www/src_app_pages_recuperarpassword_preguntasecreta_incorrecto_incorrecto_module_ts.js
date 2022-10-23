"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperarpassword_preguntasecreta_incorrecto_incorrecto_module_ts"],{

/***/ 3019:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPageRoutingModule": () => (/* binding */ IncorrectoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _incorrecto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto.page */ 9714);




const routes = [
    {
        path: '',
        component: _incorrecto_page__WEBPACK_IMPORTED_MODULE_0__.IncorrectoPage
    }
];
let IncorrectoPageRoutingModule = class IncorrectoPageRoutingModule {
};
IncorrectoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncorrectoPageRoutingModule);



/***/ }),

/***/ 2226:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPageModule": () => (/* binding */ IncorrectoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _incorrecto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto-routing.module */ 3019);
/* harmony import */ var _incorrecto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incorrecto.page */ 9714);







let IncorrectoPageModule = class IncorrectoPageModule {
};
IncorrectoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _incorrecto_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncorrectoPageRoutingModule
        ],
        declarations: [_incorrecto_page__WEBPACK_IMPORTED_MODULE_1__.IncorrectoPage]
    })
], IncorrectoPageModule);



/***/ }),

/***/ 9714:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncorrectoPage": () => (/* binding */ IncorrectoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _incorrecto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incorrecto.page.html?ngResource */ 8479);
/* harmony import */ var _incorrecto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incorrecto.page.scss?ngResource */ 5136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let IncorrectoPage = class IncorrectoPage {
    constructor() { }
    ngOnInit() {
    }
};
IncorrectoPage.ctorParameters = () => [];
IncorrectoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-incorrecto',
        template: _incorrecto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_incorrecto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IncorrectoPage);



/***/ }),

/***/ 5136:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-item {\n  --padding-bottom: 10px;\n}\n\nion-content {\n  background-color: primary;\n}\n\n.sadface {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29ycmVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKIiwiZmlsZSI6ImluY29ycmVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xufVxuaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwcmltYXJ5O1xufVxuLnNhZGZhY2V7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn0iXX0= */";

/***/ }),

/***/ 8479:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/incorrecto/incorrecto.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <img class=\"logo animate__animated animate__fadeInLeft\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n      <h1 class=\"animate__animated animate__fadeInRight\">Asistencia QR</h1>\n      <p class=\"animate__animated animate__fadeInLeft\">Tu app para siempre quedar presente</p>\n    </ion-label>\n  </ion-title>\n\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center ion-padding-vertical animate__animated animate__zoomIn\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h3>Recuperar contraseña</h3>\n          <h2>Lo sentimos pero los datos ingresados no son correctos</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <img class=\"sadface animate__animated animate__fadeInLeft\" \n        src=\"https://pbs.twimg.com/media/DUiXh5iWsAAQSmv.jpg\">\n        </ion-item>\n\n      </ion-card-content>\n\n      <ion-label>\n        <a routerLink=\"\">Iniciar Sesión</a>\n      </ion-label>\n\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperarpassword_preguntasecreta_incorrecto_incorrecto_module_ts.js.map