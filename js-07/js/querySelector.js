// const parrafo = document.getElementById("primer-parrafo");

// parrafo.textContent = "Primer parrafo!!!";
// parrafo.style.color = "red";

// console.log(parrafo);

// ---

// const elemento = document.querySelector('p');
// const elemento = document.querySelector(".verde");
// const elemento = document.querySelector("#primer-parrafo");

// console.log(elemento);

// const elementos = document.querySelectorAll("section p");

// console.log(elementos);

// ---

// const enlace = document.querySelector("section a");

// enlace.setAttribute("href", "https://google.com");
// // enlace.href = "https://google.com";
// // enlace.removeAttribute("href");
// enlace.textContent = "Buscador";

// ---

const elemento = document.createElement("p");

elemento.textContent = "Parrafo dinamico";
elemento.setAttribute("class", "verde");

console.log(elemento);

const article = document.querySelector("article");
article.appendChild(elemento);
