import { createContext } from "react";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  // https://653831aaa543859d1bb14d53.mockapi.io/propiedades
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 4, nombre: "Producto 4" },
    { id: 8, nombre: "Producto 8" },
  ];

  const data = { productos };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};
