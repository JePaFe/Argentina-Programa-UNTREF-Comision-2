import { useState } from "react";
import "./Saludar.css";

function Saludar(props) {
  // const estilo = {
  //   backgroundColor: "aqua",
  //   color: "red",
  //   opacity: 0.5,
  //   fontSize: 20 + "px",
  // };

  // return <p style={estilo}>Hola {props.nombre}</p>;

  const [num, setNum] = useState(5);

  const clickFn = () => {
    console.log("Click en p");
  };

  const restar = () => {
    setNum(num - 1);
  };

  const sumar = () => {
    setNum(num + 1);
  };

  return (
    <section>
      <p onClick={clickFn} className="saludar">
        Hola {props.nombre}
      </p>
      <p>
        <button onClick={restar}>-</button>
        {num}
        <button onClick={sumar}>+</button>
      </p>
    </section>
  );
}

export default Saludar;
