import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-preguntasecreta',
  templateUrl: './preguntasecreta.page.html',
  styleUrls: ['./preguntasecreta.page.scss'],
})
export class PreguntasecretaPage implements OnInit {

  //instancia de usuario
  public usuario: Usuario;

  //public respuesta: string ="";

  constructor(
    private activeroute:       ActivatedRoute
    , private router:          Router
    , private alertController: AlertController
    , private toastController: ToastController
    ) { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
        this.usuario.respuestaSecreta = '';
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
 
  ngOnInit() {
  }

  //método recuperar
  public recuperar(): void {

    if(!this.validarUsuario(this.usuario)) {
      this.mostrarMensaje('Respuesta: INCORRECTA');
      //this.mostrarMensaje(this.respuesta);
      this.router.navigate(['/incorrecto']);
      return;
    }
  
    this.mostrarMensaje('Respuesta: CORRECTA');
    //this.mostrarMensaje(this.respuesta);
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    //Navegamos hacia la pag paso 3 o 4 y nos llevamos los datos del usuario
    this.router.navigate(['/correcto'], navigationExtras);
  }

  public validarUsuario(usuario: Usuario): boolean {
 
    //se utilizan los datos ingresados por el usuario
    const user = this.usuario.buscarUsuarioValidoRespSecret(
      this.usuario.respuestaSecreta, this.usuario.correo);
 
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