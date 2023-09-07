document.addEventListener("keydown", (event) => {
  console.log("keydown", event.key);
});

document.addEventListener("keyup", (event) => {
  console.log("keyup", event.key);
});

document.addEventListener("keypress", (event) => {
  console.log("keypress", event.key);
});
