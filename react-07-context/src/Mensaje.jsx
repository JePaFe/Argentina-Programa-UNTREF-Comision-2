import { useContext } from "react";
import { AppContext } from "./AppContext";

function Mensaje() {
  const { form } = useContext(AppContext);

  return (
    <>
      <div>Mensaje</div>
      <p>{form.todo?.title}</p>
    </>
  );
}

export default Mensaje;
