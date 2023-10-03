// const miObjeto = {
//   nombre: "Juan",
// };

// Object.defineProperty(miObjeto, "dni", { value: 98765432, writable: false });

// miObjeto.dni = 23456789;

// ---

class MiClase {
  constructor() {
    this._dni = 98765432;
  }

  get dni() {
    return this._dni;
  }
}

const miObjeto = new MiClase();

miObjeto._dni = 345678;
