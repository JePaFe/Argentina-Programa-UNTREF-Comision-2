class MiClase {
  #privada;

  constructor() {
    this.#privada = 123;
  }

  set privada(valor) {
    this.#privada = valor;
  }

  get privada() {
    return this.#privada;
  }
}

const miObjeto = new MiClase();

// console.log(miObjeto.#privada);

miObjeto.privada = 456;

console.log(miObjeto.privada);
