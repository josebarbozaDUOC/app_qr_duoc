"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recuperarpassword_recuperarpassword_module_ts"],{

/***/ 6505:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/recuperarpassword-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarpasswordPageRoutingModule": () => (/* binding */ RecuperarpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recuperarpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperarpassword.page */ 8094);




const routes = [
    {
        path: '',
        component: _recuperarpassword_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarpasswordPage
    },
    {
        path: 'preguntasecreta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recuperarpassword_preguntasecreta_preguntasecreta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preguntasecreta/preguntasecreta.module */ 445)).then(m => m.PreguntasecretaPageModule)
    }
];
let RecuperarpasswordPageRoutingModule = class RecuperarpasswordPageRoutingModule {
};
RecuperarpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarpasswordPageRoutingModule);



/***/ }),

/***/ 6937:
/*!*********************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/recuperarpassword.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarpasswordPageModule": () => (/* binding */ RecuperarpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recuperarpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperarpassword-routing.module */ 6505);
/* harmony import */ var _recuperarpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperarpassword.page */ 8094);







let RecuperarpasswordPageModule = class RecuperarpasswordPageModule {
};
RecuperarpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperarpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarpasswordPageRoutingModule
        ],
        declarations: [_recuperarpassword_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarpasswordPage]
    })
], RecuperarpasswordPageModule);



/***/ }),

/***/ 8094:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/recuperarpassword.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarpasswordPage": () => (/* binding */ RecuperarpasswordPage)
/* harmony export */ });
/* harmony import */ var _home_BASTARDO_ProyectosIonic_Control1_Barboza_Tapia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recuperarpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperarpassword.page.html?ngResource */ 6146);
/* harmony import */ var _recuperarpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperarpassword.page.scss?ngResource */ 322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);








let RecuperarpasswordPage = class RecuperarpasswordPage {
  constructor(router, toastController) {
    this.router = router;
    this.toastController = toastController;
    this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__.Usuario('', '', '', '', '');
    this.usuario.correo = '';
    this.usuario.password = '';
    this.usuario.nombre = '';
    this.usuario.preguntaSecreta = '';
    this.usuario.respuestaSecreta = '';
  }

  ngOnInit() {} //método recuperar


  recuperar() {
    if (!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('Correo válido');
    const navigationExtras = {
      state: {
        usuario: this.usuario
      }
    }; //Navegamos hacia la pag paso 2 y nos llevamos los datos del usuario

    this.router.navigate(['/preguntasecreta'], navigationExtras);
  }

  validarUsuario(usuario) {
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValidoCorreo(this.usuario.correo);

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

RecuperarpasswordPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

RecuperarpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-recuperarpassword',
  template: _recuperarpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_recuperarpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecuperarpasswordPage);


/***/ }),

/***/ 322:
/*!********************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/recuperarpassword.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\n\nion-item {\n  --padding-bottom: 10px;\n}\n\nion-content {\n  background-color: primary;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhcnBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSiIsImZpbGUiOiJyZWN1cGVyYXJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG5pb24taXRlbXtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHByaW1hcnk7XG4gIH0iXX0= */";

/***/ }),

/***/ 6146:
/*!********************************************************************************!*\
  !*** ./src/app/pages/recuperarpassword/recuperarpassword.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <img class=\"logo animate__animated animate__fadeInLeft\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n      <h1 class=\"animate__animated animate__fadeInRight\">Asistencia QR</h1>\n      <p class=\"animate__animated animate__fadeInLeft\">Tu app para siempre quedar presente</p>\n    </ion-label>\n  </ion-title>\n\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center ion-padding-vertical animate__animated animate__zoomIn\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h3>Recuperar contraseña</h3>\n          <h4>Paso 1: Ingrese su correo</h4>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Ingresa tu correo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.correo\"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button shape=\"block\" (click)=\"recuperar()\">Recuperar contraseña</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n\n      <ion-label>\n        <br>\n        <a routerLink=\"\">Iniciar Sesión</a>\n      </ion-label>\n\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperarpassword_recuperarpassword_module_ts.js.map