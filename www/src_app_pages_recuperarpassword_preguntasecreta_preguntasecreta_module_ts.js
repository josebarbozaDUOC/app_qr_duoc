"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperarpassword_preguntasecreta_preguntasecreta_module_ts"],{

/***/ 9157:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/preguntasecreta-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasecretaPageRoutingModule": () => (/* binding */ PreguntasecretaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _preguntasecreta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntasecreta.page */ 3274);




const routes = [
    {
        path: '',
        component: _preguntasecreta_page__WEBPACK_IMPORTED_MODULE_0__.PreguntasecretaPage
    },
    {
        path: 'correcto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recuperarpassword_preguntasecreta_correcto_correcto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./correcto/correcto.module */ 439)).then(m => m.CorrectoPageModule)
    },
    {
        path: 'incorrecto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recuperarpassword_preguntasecreta_incorrecto_incorrecto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./incorrecto/incorrecto.module */ 2226)).then(m => m.IncorrectoPageModule)
    }
];
let PreguntasecretaPageRoutingModule = class PreguntasecretaPageRoutingModule {
};
PreguntasecretaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreguntasecretaPageRoutingModule);



/***/ }),

/***/ 445:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/preguntasecreta.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasecretaPageModule": () => (/* binding */ PreguntasecretaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _preguntasecreta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntasecreta-routing.module */ 9157);
/* harmony import */ var _preguntasecreta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preguntasecreta.page */ 3274);







let PreguntasecretaPageModule = class PreguntasecretaPageModule {
};
PreguntasecretaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preguntasecreta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreguntasecretaPageRoutingModule
        ],
        declarations: [_preguntasecreta_page__WEBPACK_IMPORTED_MODULE_1__.PreguntasecretaPage]
    })
], PreguntasecretaPageModule);



/***/ }),

/***/ 3274:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/preguntasecreta.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasecretaPage": () => (/* binding */ PreguntasecretaPage)
/* harmony export */ });
/* harmony import */ var _home_BASTARDO_ProyectosIonic_Control1_Barboza_Tapia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _preguntasecreta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preguntasecreta.page.html?ngResource */ 8213);
/* harmony import */ var _preguntasecreta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preguntasecreta.page.scss?ngResource */ 4686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let PreguntasecretaPage = class PreguntasecretaPage {
  //public respuesta: string ="";
  constructor(activeroute, router, alertController, toastController) {
    this.activeroute = activeroute;
    this.router = router;
    this.alertController = alertController;
    this.toastController = toastController;
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
        this.usuario.respuestaSecreta = '';
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {} //método recuperar


  recuperar() {
    if (!this.validarUsuario(this.usuario)) {
      this.mostrarMensaje('Respuesta: INCORRECTA'); //this.mostrarMensaje(this.respuesta);

      this.router.navigate(['/incorrecto']);
      return;
    }

    this.mostrarMensaje('Respuesta: CORRECTA'); //this.mostrarMensaje(this.respuesta);

    const navigationExtras = {
      state: {
        usuario: this.usuario
      }
    }; //Navegamos hacia la pag paso 3 o 4 y nos llevamos los datos del usuario

    this.router.navigate(['/correcto'], navigationExtras);
  }

  validarUsuario(usuario) {
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValidoRespSecret(this.usuario.respuestaSecreta, this.usuario.correo);

    if (user) {
      this.usuario = user;
      return true;
    } else {
      this.mostrarMensaje('Las credenciales no son correctas');
      return false;
    }
  } //utilizamos el toast para mensaje


  mostrarMensaje(mensaje, duracion) {
    var _this = this;

    return (0,_home_BASTARDO_ProyectosIonic_Control1_Barboza_Tapia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: mensaje,
        duration: duracion ? duracion : 2000
      });
      toast.present();
    })();
  }

};

PreguntasecretaPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

PreguntasecretaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-preguntasecreta',
  template: _preguntasecreta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_preguntasecreta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PreguntasecretaPage);


/***/ }),

/***/ 4686:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/preguntasecreta.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-item {\n  --padding-bottom: 10px;\n}\n\nion-content {\n  background-color: primary;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWd1bnRhc2VjcmV0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoicHJlZ3VudGFzZWNyZXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbn1cbmlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHJpbWFyeTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 8213:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/preguntasecreta/preguntasecreta.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <img class=\"logo animate__animated animate__fadeInLeft\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n      <h1 class=\"animate__animated animate__fadeInRight\">Asistencia QR</h1>\n      <p class=\"animate__animated animate__fadeInLeft\">Tu app para siempre quedar presente</p>\n    </ion-label>\n  </ion-title>\n\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center ion-padding-vertical animate__animated animate__zoomIn\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h3>Recuperar contraseña</h3>\n          <h4>Paso 2: Responde la pregunta secreta</h4>\n          <h4 *ngIf=\"usuario\">{{ usuario.nombre }}</h4>\n          <h4 *ngIf=\"usuario\">¿{{ usuario.preguntaSecreta }}?</h4>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Escribe aquí tu respuesta</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.respuestaSecreta\"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button shape=\"block\" (click)=\"recuperar()\">Recuperar contraseña</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n\n      <ion-label>\n        <br>\n        <a routerLink=\"\">Iniciar Sesión</a>\n      </ion-label>\n\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperarpassword_preguntasecreta_preguntasecreta_module_ts.js.map