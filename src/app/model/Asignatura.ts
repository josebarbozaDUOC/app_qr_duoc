export class Asignatura{
    //------------------------------------variables
    public sede             = '';
    public sigla            = '';
    public seccion          = '';
    public nombreAsignatura = '';
    public nombreProfesor   = '';
    public dia              = '';
    public bloqueInicio     = 0;
    public bloqueTermino    = 0;
    public horaInicio       = '';
    public horaTermino      = '';

    //------------------------------------constructor
    constructor(
        sede:               string,
        sigla:              string,
        seccion:            string,
        nombreAsignatura:   string,
        nombreProfesor:     string,
        dia:                string,
        bloqueInicio:       number,
        bloqueTermino:      number,
        horaInicio:         string,
        horaTermino:        string)
      {
        this.sede             = sede;
        this.sigla            = sigla;
        this.seccion          = seccion;
        this.nombreAsignatura = nombreAsignatura;
        this.nombreProfesor   = nombreProfesor;
        this.dia              = dia;
        this.bloqueInicio     = bloqueInicio;
        this.bloqueTermino    = bloqueTermino;
        this.horaInicio       = horaInicio;
        this.horaTermino      = horaTermino;
      }
}