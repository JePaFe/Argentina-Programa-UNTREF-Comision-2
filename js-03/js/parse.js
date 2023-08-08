let num = "16y"; // string

num = parseInt(num);

// console.log(num); // number

let apples = "2";
let oranges = "3";

// ambos valores convertidos a números antes del operador binario suma
// console.log(typeof +apples);
// console.log( (+apples) + (+oranges) ); // 5

let num2 = "16.45kl3";

// num2 = parseFloat(num2);
num2 = Number(num2);

// console.log(num2);

// --- Boolean

let dato = undefined;

// 0, "", null, undefined == false

console.log(Boolean(dato));
