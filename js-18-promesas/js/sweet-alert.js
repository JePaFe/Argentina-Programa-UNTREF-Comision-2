function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const ejecutarOperacion = (operacion) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() < 0.5;
      if (exito) {
        resolve(operacion + " existo");
      } else {
        reject(new Error(operacion + " error"));
      }
    }, getRandomIntInclusive(100, 2000));
  });
};

const mostrarMensaje = (mensaje, icon = "success") => {
  Swal.fire({
    icon: icon,
    title: mensaje,
  });
};

document.querySelector("#btn-1").addEventListener("click", () => {
  ejecutarOperacion("Operación 1")
    .then((response) => mostrarMensaje("btn-1 " + response))
    .catch((error) => mostrarMensaje("btn-1 " + error, "error"));
});

document.querySelector("#btn-2").addEventListener("click", () => {
  ejecutarOperacion("Operación 2")
    .then((response) => mostrarMensaje("btn-2 " + response))
    .catch((error) => mostrarMensaje("btn-2 " + error, "error"));
});

document.querySelector("#btn-3").addEventListener("click", () => {
  ejecutarOperacion("Operación 3")
    .then((response) => mostrarMensaje("btn-3 " + response))
    .catch((error) => mostrarMensaje("btn-3 " + error, "error"));
});
