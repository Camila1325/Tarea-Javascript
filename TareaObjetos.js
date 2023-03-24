//TAREA

/*
1. Crear un objeto que tenga un mínimo dos métodos,
además debe tener una propiedad que sea un objeto
*/

const crearAlumno = {
    primerNombre: 'Mateo',
    primerApellido: 'Perez',
    segundoApellido: 'Restrepo',
    edad: 22,
    documentoIdentidad: 43548867,
    genero: 'Masculino',
    becado: true,
    email: 'mateo.perez@universidadmayor.com',
    carrera:{
        nombreCarrera: 'Diseño Gráfico',
        semestreActual: 'Primer Semestre',
        cantMateriaInscritas: 3,
        nombreMaterias: 'Taller Herramientas Digitales, Semiótica, Lengua Materna',
    },

    //Método
    matricularAlumno:function(){
        return `El alumno ${this.primerNombre} ${this.primerApellido} ha sido matriculado con éxito.`
    },
};


console.log(crearAlumno);
console.log(crearAlumno.matricularAlumno());

/* 2. Crear una clase que herede de otra. 
Debe poseer mínimo 3 propiedades para el constructor
*/

class CrearPersonaje {
    //Constructor de la clase CrearPersonajes
    constructor(nombrePersonaje, colorPiel, colorCabello, generoPersonaje, nivel){
        this.nombrePersonaje = nombrePersonaje;
        this.colorPiel = colorPiel;
        this.colorCabello = colorCabello;
        this.generoPersonaje = generoPersonaje;
        this.nivel = nivel;
    }

    //Método
    saludoPersonaje(){
        return 'Hola, ¿Quieres escoger mi habilidad?'
    }
}

const Personaje = new CrearPersonaje('Rote.Queen', 'Mestiza', 'Rojo', 'Femenino', 0);
console.log(Personaje);
console.log(Personaje.saludoPersonaje());

//Clase del personaje arquero
class Arquero extends CrearPersonaje{
    //Contructor de la clase Habilidades
    constructor(nombrePersonaje, colorPiel, colorCabello, generoPersonaje, nivel, habilidad, lanzarFlechas){
        super(nombrePersonaje, colorPiel, colorCabello, generoPersonaje, nivel);
        this.habilidad = habilidad;
        this.lanzarFlechas = lanzarFlechas;           
        }

    //Método
     habilidadPersonaje(){
        return `El personaje ${this.nombrePersonaje} tiene la habilidad de ${this.habilidad} y puede lanzar flechas`
     }
}

//Crear un personaje, en este caso el personaje será un arquero.
let personaje = new Arquero ('Metarly', 'Negra', 'Café Oscuro', 'Maculino', 1, 'Arquería', true);
console.log(personaje);
console.log(personaje.habilidadPersonaje());

//Clase del personaje volador
class Volador extends CrearPersonaje{
    //Contructor de la clase Habilidades
    constructor(nombrePersonaje, colorPiel, colorCabello, generoPersonaje, nivel, habilidad, crearTormentas){
        super(nombrePersonaje, colorPiel, colorCabello, generoPersonaje, nivel);
        this.habilidad = habilidad;
        this.crearTormentas = crearTormentas;           
        }

    //Método
     habilidadPersonaje(){
        return `El personaje ${this.nombrePersonaje} tiene la habilidad de ${this.habilidad}, para tener el poder de Crear Tormentas debes avanzar hasta el nivel 5.`
    }
}

//Crear un personaje, en este caso el personaje será un volddor.
personaje = new Volador ('Venti', 'Blanco', 'Negro', 'Femenino', 1, 'Volar', false);
console.log(personaje);
console.log(personaje.habilidadPersonaje());


