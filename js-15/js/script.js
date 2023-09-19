fetch("../json/productos.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    json.forEach((producto) => console.log(producto?.nombre));

    localStorage.setItem("productos", JSON.stringify(json));
  });
