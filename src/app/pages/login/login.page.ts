import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; //para pasar info usuario entre login y home 
import { ToastController } from '@ionic/angular';           //para mensajes flotantes
import { Usuario } from 'src/app/model/Usuario';            //import USUARIO

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //instancia de usuario
  public usuario: Usuario;

  //pasamos los parámetros directos al constructor
  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario('','','','','');
    this.usuario.correo = '';
    this.usuario.password = '';
    this.usuario.nombre = '';
    this.usuario.preguntaSecreta = '';
    this.usuario.respuestaSecreta = '';
  }

  ngOnInit() {
  }

  public irRecuperarPassword():void{
    this.router.navigate(['/recuperarpassword']);
  }

  //método ingresar
  public ingresar(): void {
  
    if(!this.validarUsuario(this.usuario)) {
      return;
    }
 
    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    //Navegamos hacia el Home y nos llevamos los datos del usuario
    this.router.navigate(['/home'], navigationExtras);
  }


  public validarUsuario(usuario: Usuario): boolean {
 
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValido(
      this.usuario.correo, this.usuario.password);
 
    if (user) {
      this.usuario = user;
      return true;
    }
    else{
      this.mostrarMensaje('Las credenciales no son correctas');
      return false;
    }
  }

  //utilizamos el toast para mensaje
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
}
