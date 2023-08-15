
// function mensajeConsole(texto) {
//   console.log(texto + "!!!");
// }

// function mensajeAlert(texto) {
//   alert(texto + "!!!");
// }

// let write = function (texto) {
//   document.write(texto);
// };

function write(texto) {
    document.write(texto);
  }
  
  //                      callback = console.log
  //                      callback = alert
  function mensaje(texto, callback) {
    callback(texto + "!!!");
  }
  
  mensaje("Hola", console.log);
  mensaje("Hola", alert);
  mensaje("Hola", write);
  
  // mensajeConsole("Hola");
  // mensajeAlert("Hola");
  