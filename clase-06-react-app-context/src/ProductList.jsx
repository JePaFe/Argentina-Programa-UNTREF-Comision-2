import { useContext } from "react";
import ProductDetail from "./ProductDetail";
import { ProductosContext } from "./ProductosProvider";

function ProductList() {
  const { productos } = useContext(ProductosContext);

  return (
    <>
      <h3>Lista de productos</h3>

      {productos.map((producto) => (
        <ProductDetail key={producto.id} producto={producto} />
      ))}
    </>
  );
}

export default ProductList;
