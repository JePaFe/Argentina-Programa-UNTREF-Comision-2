let num1 = 2;
let num2 = 3;
let resultado;

resultado = num1 + num2;
console.log("La suma es: " + resultado);

resultado = num1 - num2;
console.log("La resta es: " + resultado);

resultado = num1 * num2;
console.log("La multiplicacion es: " + resultado);

resultado = num1 / num2;
console.log("La division es: " + resultado);

resultado = num1 % num2;
console.log("La modulo es: " + resultado);

// ---

let i = 0;

// ++ suma uno
// postfija i++
// prefija ++i

resultado = i++; // resultado = 0, i = 1
console.log(resultado, i);

i = 3;

i--;
console.log(i); // 2

i = i - 1;
console.log(i); // 2 - 1 = 1

i -= 1;
console.log(i); // 0

// --- Asigancion

let num3;
num3 = 20;

// let num4 = 29;

// num3 = num3 + 1;
// num3 += 1;
num3++;
console.log("La suma es: " + num3);

// num3 = num3 - 3;
num3 -= 3;
console.log("La resta es: " + num3);

// num3 = num3 * 1;
num3 *= 2;
console.log("La multiplicacion es: " + num3);

// num3 = num3 / 2;
num3 /= 2;
console.log("La division es: " + num3);

// num3 = num3 % 1;
num3 %= 3;
console.log("La modulo es: " + num3);

num3 = 2;

num3 **= 3;
console.log("La potencia es: " + num3);
