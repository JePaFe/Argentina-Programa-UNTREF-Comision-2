let parrafo = document.querySelector("#seccion-1 p.destacado");

parrafo.addEventListener("click", function () {
  console.log("Clic en #seccion-1 p.destacado");
});

// ---

let seccion = document.querySelector("#seccion-1");

let boton = document.querySelector("#crear-parrafo");

boton.addEventListener("click", function () {
  const parrafo = document.createElement("p");
  parrafo.setAttribute("class", "destacado");
  parrafo.textContent = "Lorem ipsum dolor sit.";
  seccion.appendChild(parrafo);

//   parrafo.addEventListener("click", function (event) {
//     console.log("Clic en #seccion-1 p.destacado");
//     console.log(event.target.textContent);
//   });
});

// seccion.addEventListener("click", function (event) {
//   //   console.log(
//   //     event,
//   //     event.target,
//   //     event.target.classList,
//   //     event.target.tagName
//   //   );

//   if (
//     event.target.tagName == "P" &&
//     event.target.classList.contains("destacado")
//   ) {
//     console.log("Es un parrafo destacado");
//   }
// });

// ---

let element = seccion.firstElementChild;
if (element) {
  seccion.removeChild(element);
}

element = seccion.firstElementChild;
console.log(element);
if (element) {
  seccion.removeChild(element);
}

element = seccion.firstElementChild;
console.log(element);
if (element) {
  seccion.removeChild(element);
}

console.log("EOF");
