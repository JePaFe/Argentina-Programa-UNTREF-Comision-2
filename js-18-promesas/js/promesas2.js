function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function multiplicar(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      reject(new Error("Los parámetros no son numéricos"));
    }
    setTimeout(() => {
      resolve({
        num1: num1,
        num2: num2,
        result: num1 * num2,
      });
    }, getRandomIntInclusive(100, 2000));
  });
}

multiplicar(1, 2)
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    return multiplicar(3, 2);
  })
  .then((res) => console.log(`${res.num1} * ${res.num2} = ${res.result}`))
  .catch((error) => console.error(error));
