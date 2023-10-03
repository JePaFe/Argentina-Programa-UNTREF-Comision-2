function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.admin = false;

  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

const persona1 = new Persona("Juan", "Perez");
const persona2 = new Persona("Maria", "Garcia");

persona2.admin = true;
persona2.dni = 98765432;

const nombreCompleto = persona2.nombreCompleto();

console.log(persona1.nombre);
