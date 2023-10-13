import Saludar from "./Saludar";

function App() {
  const texto = "Mundo";

  const mensaje = `Hola ${texto} !!!`;

  const imgURL = "https://picsum.photos/id/237/200/100";

  return (
    <>
      {/* <Saludar></Saludar> */}
      <Saludar nombre="Juan" apellido="Perez" />
      {/* Algo ... */}
      <p id="un-id" className="destacado">
        <Saludar nombre={texto} />
        Hola {texto}, la suma es {2 + 3} {mensaje}
      </p>
      <img src={imgURL} alt="Lorem Picsum" />
    </>
  );
}

export default App;
