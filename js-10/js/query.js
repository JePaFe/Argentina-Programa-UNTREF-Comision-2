let parrafo = document.querySelector("#seccion-1 p:nth-child(2)");
// console.log(parrafo);

parrafo.textContent = "Seleccionado con querySelector";

// ---

let parrafos = document.querySelectorAll("#seccion-1 p:nth-child(2)");
// console.log(parrafos);

parrafos = document.querySelectorAll("p.destacado");
console.log(parrafos);

const parrafosArray = [];

for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);

  parrafosArray.push(parrafos[i]);
}

console.log(parrafosArray);

console.log(Array.from(parrafos));
