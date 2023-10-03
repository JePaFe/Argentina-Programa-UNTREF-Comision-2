const persona = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
  admin: true,
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set setNombre(nombreInicial) {
    if (nombreInicial.length > 0) {
      this.nombre = nombreInicial + "!!!";
    }
  },
};

console.log(persona.nombreCompleto);

persona.setNombre = "";
