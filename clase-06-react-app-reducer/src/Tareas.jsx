import { useContext, useRef } from "react";
import { TareasContext } from "./TareasProvider";

function Tareas() {
  const inputRef = useRef();

  const { tasks, dispatch } = useContext(TareasContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(inputRef.current.value);

    dispatch({
      type: "agregar_tarea",
      payload: {
        id: Date.now(),
        title: inputRef.current.value,
        completado: false,
      },
    });

    inputRef.current.value = "";
  };

  return (
    <>
      <h1>Tareas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo: </label>
        <input type="text" id="title" ref={inputRef} />
        <button type="submit">Enviar</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() => {
                dispatch({
                  type: "completar_tarea",
                  payload: { id: task.id },
                });
              }}
            >
              Completar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tareas;
