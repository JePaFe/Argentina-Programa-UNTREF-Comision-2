import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductosList() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((datos) => setPropiedades(datos));
  }, []);

  return (
    <>
      <h1>ProductosList</h1>

      <ul>
        {propiedades.map((propiedad) => (
          <li>
            <Link to={"/productos/" + propiedad.id}>{propiedad.tipo}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductosList;
