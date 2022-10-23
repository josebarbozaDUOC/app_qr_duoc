export class Usuario {
    //------------------------------------variables
    public correo           = '';
    public password         = '';
    public nombre           = '';
    public preguntaSecreta  = '';
    public respuestaSecreta = '';

    //------------------------------------constructor usuario
    constructor(
      correo:           string,
      password:         string,
      nombre:           string,
      preguntaSecreta:  string,
      respuestaSecreta: string)
    {
      this.correo           = correo;
      this.password         = password;
      this.nombre           = nombre;
      this.preguntaSecreta  = preguntaSecreta;
      this.respuestaSecreta = respuestaSecreta;
    }

    //------------------------------------lista usuarios validos
    public listaUsuariosValidos(): Usuario[]{
      const lista = [];
      lista.push(new Usuario('atorres@duocuc.cl','1234','Ana Torres Leiva'
        ,'Nombre de su mascota','gato'));
      lista.push(new Usuario('avalenzuela@duocuc.cl','qwer','Alberto Valenzuela Nuñez'
        ,'Nombre de su mejor amigo','juanito'));
      lista.push(new Usuario('cfuentes@duocuc.cl','asdf','Carla Fuentes González'
        ,'Lugar de nacimiento de su madre','Valparaíso'));
      return lista;
    }

    //------------------------------------buscar usuario valido (correo y contraseña)
    public buscarUsuarioValido(correo: string, password: string): Usuario{
      return this.listaUsuariosValidos().find(usu => 
        usu.correo === correo && usu.password === password)
    }

    //------------------------------------buscar usuario valido (correo)
    public buscarUsuarioValidoCorreo(correo: string): Usuario{
      return this.listaUsuariosValidos().find(usu => 
        usu.correo === correo)
    }

      //------------------------------------buscar usuario valido (correo)
      public buscarUsuarioValidoRespSecret(respuestaSecreta: string, correo: string): Usuario{
        return this.listaUsuariosValidos().find(usu => 
          usu.respuestaSecreta === respuestaSecreta && usu.correo === correo)
      }

    //------------------------------------validador: nombre
    public validarCorreo(): string {
      if (this.correo.trim() === '') {
        return 'Para ingresar al sistema debe ingresar su email.';
      }
      if (this.correo.length < 3 || this.correo.length > 30) {
        return 'El email debe tener entre 3 y 30 caracteres.';
      }
      return '';
    }
   
    //------------------------------------validador: clave
    public validarPassword(): string {
      if (this.password.trim() === '') {
        return 'Para entrar al sistema debe ingresar la contraseña.';
      }
      if (this.password.length !== 4) {
        return 'La contraseña debe ser de 4 dígitos.';
      }
      return '';
    }
   
    //------------------------------------validador: usuario
    public validarUsuario(): string {
      return this.validarCorreo()
        || this.validarPassword();
    }
  }