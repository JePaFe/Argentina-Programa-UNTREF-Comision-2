const enlace = document.querySelector("a");

// function prevenir(event) {
//   event.preventDefault();
//   console.log("prevent");
// }

// enlace.addEventListener("click", prevenir);

enlace.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Click en el enlace");
});
