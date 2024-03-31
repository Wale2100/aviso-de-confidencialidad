class Tutores {
    constructor(nombre, apellido, edad, curso, asignatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.asignatura = asignatura;
    }

    get accion() {
        const hoy = new Date();
        const horas = hoy.getHours();

        if (horas > 9 && horas < 18) {
            return 'trabajando';
        }else {
            return 'descansando';
        }
    }

    set experiencia(experiencia){
        this._experiencia = experiencia;
        console.log(`La experiencia de ${this._experiencia}`);
    }
    get experiencia(){
        return this._experiencia;
    }

    saludo() {
        console.log('hola, soy ' + this.nombre + ' ' + this.apellido + ' y soy tutor de ' + this.asignatura + ' en el curso de ' + this.curso)
    }
}
const tutor1 = new Tutores('Juan', 'Perez', 30, 'Matematicas', 'Algebra');
tutor1.saludo();
console.log(tutor1.accion);
tutor1.experiencia = 'senior';
console.log(tutor1.experiencia);
