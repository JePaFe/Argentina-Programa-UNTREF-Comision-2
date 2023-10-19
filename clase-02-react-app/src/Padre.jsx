import { useState } from "react";
import Hijo from "./Hijo";

function Padre() {
  const [mensaje, setMensaje] = useState("");

  const clickHijo = () => {
    setMensaje("Click en Hijo");
  };

  const nombre = "Juan";

  return (
    <>
      <Hijo nombre={nombre} onClick={clickHijo} />
      {mensaje}
    </>
  );
}

export default Padre;
