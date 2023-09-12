const numeros = [10, 4, 1, 20, 6, 9];

//                                        50          9
const total = numeros.reduce(function (acumulador, numero) {
  return (acumulador += numero);
}, 0);

console.log(total);
console.log(total / numeros.length);

// ---

const parrafos = document.querySelectorAll("p");

const arrayParrafos = Array.from(parrafos);

// ---

const h1 = document.querySelector("h1");

const click_h1 = () => {
  console.log("Click h1");
};

h1.addEventListener("click", click_h1);

// h1.removeEventListener("click", click_h1);

console.log(getEventListeners(h1));
