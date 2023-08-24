const parrafo = document.querySelector("#primer-parrafo");

// null, undefined, 0, '', NaN
// if (parrafo != null) {
if (parrafo) {
  console.log(parrafo.firstChild);
  console.log(parrafo.textContent);

  console.log(parrafo.firstChild.nodeValue);
}

// document.querySelector("h1").textContent = parrafo.firstChild.nodeValue;
