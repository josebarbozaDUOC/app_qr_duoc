import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController} from '@ionic/angular';
import { ToastController } from '@ionic/angular'; 
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Asignatura } from 'src/app/model/Asignatura';

import { LoadingController } from '@ionic/angular';
import jsQR, { QRCode } from 'jsqr';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  public usuario: Usuario;
  public datosAsignatura : Asignatura;
  public isVisible : boolean = true;

  //decorador que toma el #fileinput del html
  @ViewChild('fileinput', { static: false })
  private fileinput: ElementRef;

  @ViewChild('video', { static: false })
  private video: ElementRef;

  @ViewChild('canvas', { static: false })
  private canvas: ElementRef;

  public escaneando: boolean = false;
  public datosQR: string = '';
  public loading: HTMLIonLoadingElement = null;
  

  //se rescata el usuario
  constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController
      , private loadingController: LoadingController
      , private toastController: ToastController)  
      { 
        this.activeroute.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
          } else {
            this.router.navigate(['/login']);
          }
        });
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.limpiarDatos();
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

  public async comenzarEscaneoQR() {
    this.limpiarDatos();
    const mediaProvider: MediaProvider = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.video.nativeElement.srcObject = mediaProvider;
    this.video.nativeElement.setAttribute('playsinline', 'true');
    this.loading = await this.loadingController.create({});
    await this.loading.present();
    this.video.nativeElement.play();
    requestAnimationFrame(this.verificarVideo.bind(this));
    this.isVisible = false;
  }

  //------------------------------método boleano retorna datos del qr
  public obtenerDatosQR(source?: CanvasImageSource): boolean {
    let w = 0;
    let h = 0;
    if (!source) {
      this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
      this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    }
    w = this.canvas.nativeElement.width;
    h = this.canvas.nativeElement.height;
    console.log(w + ' ' + h);

    const context: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
    context.drawImage(source? source : this.video.nativeElement, 0, 0, w, h);
    const img: ImageData = context.getImageData(0, 0, w, h);
    const qrCode: QRCode = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
    if (qrCode) {
      this.escaneando = false;
      this.datosQR = qrCode.data;
      this.mostrarQrOrdenados(this.datosQR);

      this.mostrarMensaje('¡Haz quedado presente!');
      this.clase();
    }
    return this.datosQR !== '';
  }

  //pasar datos del qr a la instancia de clase asignatura
  public mostrarQrOrdenados(datosQR: string): void{
    //pasar el string, a json object
    const objetoDatosQr = JSON.parse(datosQR);

    //instanciar parametros pelados
    this.datosAsignatura = new Asignatura('','','','','','',0,0,'','');
    //parear con las variables
    this.datosAsignatura.sede             = objetoDatosQr.sede;
    this.datosAsignatura.sigla            = objetoDatosQr.idAsignatura;
    this.datosAsignatura.seccion          = objetoDatosQr.seccion;
    this.datosAsignatura.nombreAsignatura = objetoDatosQr.nombreAsignatura;
    this.datosAsignatura.nombreProfesor   = objetoDatosQr.nombreProfesor;
    this.datosAsignatura.dia              = objetoDatosQr.dia;
    this.datosAsignatura.bloqueInicio     = objetoDatosQr.bloqueInicio;
    this.datosAsignatura.bloqueTermino    = objetoDatosQr.bloqueTermino;
    this.datosAsignatura.horaInicio       = objetoDatosQr.horaInicio;
    this.datosAsignatura.horaTermino      = objetoDatosQr.horaFin;
  }

  async verificarVideo() {
    if (this.video.nativeElement.readyState === this.video.nativeElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.escaneando = true;
      }
      if (this.obtenerDatosQR()) {
        console.log(1);
      } else {
        if (this.escaneando) {
          console.log(2);
          requestAnimationFrame(this.verificarVideo.bind(this));
        }
      }
    } else {
      console.log(3);
      requestAnimationFrame(this.verificarVideo.bind(this));
    }
  }

  //------------------------------método del botón cargar img desde archivos
  public cargarImagen(): void {
    this.limpiarDatos();
    this.fileinput.nativeElement.click();
  }

  //------------------------------método pasar la imagen cargada a la variable img
  public verificarArchivoQR(files: FileList): void {
    const file = files.item(0);
    const img = new Image();
    img.onload = () => {
      this.obtenerDatosQR(img);
    }
    img.src = URL.createObjectURL(file);
  }

  //------------------------------método limpiar
  public limpiarDatos(): void {
    this.escaneando = false;
    this.isVisible = true;
    this.datosQR = '';
    this.datosAsignatura = null;
    this.loading = null;
    (document.getElementById('input-file') as HTMLInputElement).value = ''; //javascript 
  }
  
  //------------------------------método detener
  public detenerEscaneoQR(): void {
    this.escaneando = false;
    this.isVisible = true;
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