class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.admin = false;
  }

  nombreCompleto() {
    return this.nombre + " " + this.apellido + "!!!";
  }
}

const persona1 = new Persona("Juan", "Perez");

console.log(persona1.nombreCompleto());
