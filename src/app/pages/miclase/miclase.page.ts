import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Asignatura } from 'src/app/model/Asignatura';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.page.html',
  styleUrls: ['./miclase.page.scss'],
})
export class MiclasePage implements OnInit {

  public datosAsignatura : Asignatura;
  public datosQR: String = '';
  public usuario: Usuario;

  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController
  , private loadingController: LoadingController)  
  { 
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
        this.datosQR = this.router.getCurrentNavigation().extras.state.datosQR;
        this.datosAsignatura = this.router.getCurrentNavigation().extras.state.datosAsignatura;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  //-----------------------ir a page inicio
  public inicio(): void{

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario,
        datosQR: this.datosQR,
        datosAsignatura: this.datosAsignatura
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }

  //-----------------------ir a page mi clase
  public clase(): void{

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario,
        datosQR: this.datosQR,
        datosAsignatura: this.datosAsignatura
      }
    };
    this.router.navigate(['/miclase'], navigationExtras);
  }
}
