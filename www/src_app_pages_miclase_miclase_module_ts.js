"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_miclase_miclase_module_ts"],{

/***/ 1736:
/*!*********************************************************!*\
  !*** ./src/app/pages/miclase/miclase-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiclasePageRoutingModule": () => (/* binding */ MiclasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _miclase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miclase.page */ 6294);




const routes = [
    {
        path: '',
        component: _miclase_page__WEBPACK_IMPORTED_MODULE_0__.MiclasePage
    }
];
let MiclasePageRoutingModule = class MiclasePageRoutingModule {
};
MiclasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MiclasePageRoutingModule);



/***/ }),

/***/ 5464:
/*!*************************************************!*\
  !*** ./src/app/pages/miclase/miclase.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiclasePageModule": () => (/* binding */ MiclasePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _miclase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miclase-routing.module */ 1736);
/* harmony import */ var _miclase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miclase.page */ 6294);







let MiclasePageModule = class MiclasePageModule {
};
MiclasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _miclase_routing_module__WEBPACK_IMPORTED_MODULE_0__.MiclasePageRoutingModule
        ],
        declarations: [_miclase_page__WEBPACK_IMPORTED_MODULE_1__.MiclasePage]
    })
], MiclasePageModule);



/***/ }),

/***/ 6294:
/*!***********************************************!*\
  !*** ./src/app/pages/miclase/miclase.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiclasePage": () => (/* binding */ MiclasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _miclase_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./miclase.page.html?ngResource */ 1552);
/* harmony import */ var _miclase_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miclase.page.scss?ngResource */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let MiclasePage = class MiclasePage {
    constructor(activeroute, router, alertController, loadingController) {
        this.activeroute = activeroute;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.datosQR = '';
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
                this.datosQR = this.router.getCurrentNavigation().extras.state.datosQR;
                this.datosAsignatura = this.router.getCurrentNavigation().extras.state.datosAsignatura;
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() {
    }
    //-----------------------ir a page inicio
    inicio() {
        const navigationExtras = {
            state: {
                usuario: this.usuario,
                datosQR: this.datosQR,
                datosAsignatura: this.datosAsignatura
            }
        };
        this.router.navigate(['/home'], navigationExtras);
    }
    //-----------------------ir a page mi clase
    clase() {
        const navigationExtras = {
            state: {
                usuario: this.usuario,
                datosQR: this.datosQR,
                datosAsignatura: this.datosAsignatura
            }
        };
        this.router.navigate(['/miclase'], navigationExtras);
    }
};
MiclasePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
MiclasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-miclase',
        template: _miclase_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_miclase_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MiclasePage);



/***/ }),

/***/ 6208:
/*!************************************************************!*\
  !*** ./src/app/pages/miclase/miclase.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".qrcode {\n  background-color: aqua;\n  padding: 7rem;\n}\n\n.logo {\n  width: 50%;\n}\n\n.espaciado {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pY2xhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoibWljbGFzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXJjb2Rle1xuICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcbiAgICBwYWRkaW5nOiA3cmVtO1xufVxuLmxvZ297XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5lc3BhY2lhZG97XG4gICAgd2lkdGg6IDE1MHB4O1xufSJdfQ== */";

/***/ }),

/***/ 1552:
/*!************************************************************!*\
  !*** ./src/app/pages/miclase/miclase.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<!--HEADER-->\n<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <!--Mostrar el logo DUOC-->\n      <img class=\"logo animate__animated animate__pulse\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n    </ion-item>\n    <ion-title #titulo>\n      <div class=\"animate__animated animate__fadeInLeft\">Sistema de Asistencia QR</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--BODY-->\n<ion-content>\n  <div class=\"ion-padding-vertical\">\n\n    <!--Mostrar seudoTABS-->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button shape=\"block\" (click)=\"inicio()\">Inicio</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"block\" (click)=\"clase()\">Mi clase</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <!--TÍTULO-->\n    <ion-card-title class=\"ion-text-center\">\n      <ion-label>\n        <h4 class=\"animate__animated animate__pulse\">Datos de Clase</h4>\n      </ion-label>\n    </ion-card-title>\n\n    <!--DATOS DEL QR-->\n    <ion-card-title>\n      <ion-card class=\"animate__animated animate__zoomIn\">\n        <table *ngIf=\"datosAsignatura\">\n          <tr><td class=\"espaciado\">Sede</td><td>{{ datosAsignatura.sede }}</td></tr>\n          <tr><td>Sigla</td>                <td>{{ datosAsignatura.sigla }}</td></tr>\n          <tr><td>Seccion</td>              <td>{{ datosAsignatura.seccion }}</td></tr>\n          <tr><td>Nombre de Asignatura</td> <td>{{ datosAsignatura.nombreAsignatura }}</td></tr>\n          <tr><td>Nombre de Profesor</td>   <td>{{ datosAsignatura.nombreProfesor }}</td></tr>\n          <tr><td>Dia</td>                  <td>{{ datosAsignatura.dia }}</td></tr>\n          <tr><td>Bloque de Inicio</td>     <td>{{ datosAsignatura.bloqueInicio }}</td></tr>\n          <tr><td>Bloque de Termino</td>    <td>{{ datosAsignatura.bloqueTermino }}</td></tr>\n          <tr><td>Hora de Inicio</td>       <td>{{ datosAsignatura.horaInicio }}</td></tr>\n          <tr><td>Hora de Termino</td>      <td>{{ datosAsignatura.horaTermino }}</td></tr>\n        </table>\n      </ion-card>\n    </ion-card-title>\n\n    <!--Mostrar CIERRE DE SESIÓN-->\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\n      <ion-label>\n        <a routerLink=\"\">Cerrar sesión</a>\n      </ion-label>\n    </ion-card>\n  \n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_miclase_miclase_module_ts.js.map