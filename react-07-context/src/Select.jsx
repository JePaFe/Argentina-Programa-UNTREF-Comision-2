import { useContext } from "react";
import { AppContext } from "./AppContext";

function Select() {
  const { opciones, form, setForm } = useContext(AppContext);
  //   console.log(opciones);

  const handleChange = (event) => {
    console.log(event.target.value);
    const todo = opciones.find((opcion) => opcion.id == event.target.value);
    console.log(todo);

    setForm({ ...form, todo });
  };

  return (
    <>
      <label htmlFor="todo">Tarea: </label>
      <select name="todo" id="todo" onChange={handleChange}>
        <option value=""></option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.title}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
