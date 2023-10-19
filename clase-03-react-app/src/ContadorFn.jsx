import { useState, useEffect } from "react";

function Contadorfn() {
  const [count, setCount] = useState(0);

  const decrementar = (e) => {
    console.log(e.target);
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log("useEffect");

    return () => {}
  }, [count]);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
}

export default Contadorfn;
