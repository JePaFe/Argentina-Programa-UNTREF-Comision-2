let parrafo = "Consequuntur corporis iure ut neque voluptatum.";
let num = 15;

function sumar(a, b) {
  return a + b;
}

const user = {
  nombre: "Juan",
  apellido: "Perez",
};

let texto = `<div id="container">
    <p class="parrafo">${parrafo}</p>
            <p>Saepe adipisci cum porro maxime distinctio ${num * 2}.</p>

    <p class="parrafo destacado">
        ${user.nombre} ${user.apellido}. Lorem ipsum dolor sit ${sumar(17, 3)}.
    </p>
</div>`;

parrafo =
  '<p class="parrafo destacado">' +
  user.nombre +
  " " +
  user.apellido +
  ", " +
  sumar(17, 3) +
  ".</p>";

let seccion1 = document.querySelector(".seccion-1");
seccion1.innerHTML = texto;

console.log(texto, seccion1, parrafo);
