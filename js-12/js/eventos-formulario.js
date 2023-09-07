const form = document.querySelector("form");

const inputNombre = form.querySelector("#nombre");
inputNombre.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const selectProvincia = form.querySelector("#provincia");
selectProvincia.addEventListener("change", (event) => {
  console.log(event.target.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(inputNombre.value);

  if (inputNombre.value == "") {
    alert("El nombre es obligatorio");
  } else {
    event.target.submit();
  }
});

// ---

// document.querySelector("a").addEventListener("click", (event) => {
//   event.preventDefault();

//   window.location = event.target.getAttribute("href"); // event.target.href;
// });
