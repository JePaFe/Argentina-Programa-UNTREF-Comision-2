import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductosDetail() {
  const { id } = useParams();

  const [propiedad, setPropiedad] = useState({});

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades/" + id)
      .then((res) => res.json())
      .then((dato) => setPropiedad(dato));
  }, []);

  return (
    <>
      <h1>
        ProductosDetail {propiedad.id} {propiedad.tipo}
      </h1>
    </>
  );
}

export default ProductosDetail;
