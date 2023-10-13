// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ---

const numeros = [3, 5, 9, 1];

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const max = Math.max(3, ...numeros, 3, 20);

console.log(max);
