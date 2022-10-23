"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_BASTARDO_ProyectosIonic_Control1_Barboza_Tapia_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);





 //para pasar info usuario entre login y home 

 //para mensajes flotantes

 //import USUARIO

let LoginPage = class LoginPage {
  //pasamos los parámetros directos al constructor
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

  ngOnInit() {}

  irRecuperarPassword() {
    this.router.navigate(['/recuperarpassword']);
  } //método ingresar


  ingresar() {
    if (!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');
    const navigationExtras = {
      state: {
        usuario: this.usuario
      }
    }; //Navegamos hacia el Home y nos llevamos los datos del usuario

    this.router.navigate(['/home'], navigationExtras);
  }

  validarUsuario(usuario) {
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValido(this.usuario.correo, this.usuario.password);

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

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/*Acá cambiamos los estilos del html login*/\nion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n}\nion-item {\n  --padding-bottom: 10px;\n}\nion-content {\n  background-color: primary;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsMkNBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUo7QUFBQTtFQUNJLHNCQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0FBSUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypBY8OhIGNhbWJpYW1vcyBsb3MgZXN0aWxvcyBkZWwgaHRtbCBsb2dpbiovXG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG59XG5pb24taXRlbXtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHByaW1hcnk7XG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--uso de ANIMATE: https://animate.style/-->\n<head>\n  <link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</head>\n\n<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <img class=\"logo animate__animated animate__fadeInLeft\" \n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/1024px-Logo_DuocUC.svg.png\">\n\n      <h1 class=\"animate__animated animate__fadeInRight\">Asistencia QR</h1>\n      <p class=\"animate__animated animate__fadeInLeft\">Tu app para siempre quedar presente</p>\n    </ion-label>\n  </ion-title>\n\n  <div class=\"ion-padding-vertical\">\n    <ion-card class=\"ion-text-center ion-padding-vertical animate__animated animate__zoomIn\">\n\n      <ion-card-title class=\"ion-text-center\">\n        <ion-label>\n          <h2>¡Bienvenido!</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Ingresa tu correo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.correo\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" >Ingresa tu contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button shape=\"block\" (click)=\"ingresar()\">Ingresar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n\n      <ion-label>\n        <br>\n        <a [routerLink]=\"['/recuperarpassword']\">Recuperar contraseña</a>\n      </ion-label>\n\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map