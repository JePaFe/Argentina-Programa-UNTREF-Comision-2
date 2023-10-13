const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve("Promesa OK");
    } else {
      reject(new Error("Promesa Error"));
    }
  }, 2000);
});

promesa
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
