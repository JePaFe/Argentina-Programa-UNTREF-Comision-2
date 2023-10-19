import { useState, useEffect } from "react";

function MinMax() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    if (count > 5) {
      setCount(5);
    } else if (count < -5) {
      setCount(-5);
    }
  }, [count]);

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count - 1)}>Restar</button>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </>
  );
}

export default MinMax;
