// document.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// ---

const body = document.querySelector("body");
const section = document.querySelector("section");
const h1 = document.querySelector("h1");

h1.addEventListener("click", (event) => {
  //   event.stopPropagation();
  console.log("Click en h1");
});

section.addEventListener("click", () => {
  console.log("Click en section");
});

body.addEventListener("click", () => {
  console.log("Click en body");
});

// ---

// document.addEventListener("mouseover", (event) => {
//   console.log(event.clientX, event.clientX);
// });
