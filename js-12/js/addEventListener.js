const h1 = document.querySelector("h1");

// h1.onclick = () => {
//   console.log("Click en h1");
// };

h1.addEventListener("click", () => {
  console.log("1. Click en h1");
});

h1.addEventListener("click", () => {
  console.log("2. Click en h1");
});

h1.addEventListener("dbclick", () => {
  console.log("2. Click en h1");
});
