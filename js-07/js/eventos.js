document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");

  titulo.addEventListener("click", () => {
    console.log("Se hizo click en el h1");

    titulo.style.color = "red";
    titulo.style.fontSize = "4em";
  });

  // function mostrarMensaje() {
  //   console.log("Se hizo click en el h1");
  // }

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Enviando...");
  });
});
