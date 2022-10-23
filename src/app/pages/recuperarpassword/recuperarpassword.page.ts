import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
import { Usuario } from 'src/app/model/Usuario'; 

@Component({
  selector: 'app-recuperarpassword',
  templateUrl: './recuperarpassword.page.html',
  styleUrls: ['./recuperarpassword.page.scss'],
})
export class RecuperarpasswordPage implements OnInit {

  //instancia de usuario
  public usuario: Usuario;

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

  //método recuperar
  public recuperar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }
  
    this.mostrarMensaje('Correo válido');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    //Navegamos hacia la pag paso 2 y nos llevamos los datos del usuario
    this.router.navigate(['/preguntasecreta'], navigationExtras);
  }

  public validarUsuario(usuario: Usuario): boolean {
 
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValidoCorreo(
      this.usuario.correo);
 
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