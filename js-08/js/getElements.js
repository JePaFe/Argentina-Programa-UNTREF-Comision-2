// let elementos = document.getElementsByClassName("parrafo");
// // elementos[1].style.color = "red";
// for (let i = 0; i < elementos.length; i++) {
//   elementos[i].style.color = "red";
// }

// const numeros = [1, 6, 3, 9];

// console.log(elementos, numeros);

// elementos = document.querySelectorAll(".parrafo");

// let container = document.getElementById("container");
// let elementos = container.getElementsByClassName("parrafo");

// elementos = document
//   .getElementById("container")
//   .getElementsByClassName("parrafo");

// elementos = document.querySelectorAll("#container .parrafo");

// elementos = document
//   .querySelector("#container")
//   .getElementsByClassName("parrafo");

// ---

let elementos = document.getElementsByTagName("p");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].textContent = "Parrafo Nro " + (i + 1);
}

console.log(elementos);
