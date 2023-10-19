import { useState, useEffect } from "react";

function Todo() {
  const [tarea, setTarea] = useState({ title: "Sin Titulo" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((todo) => setTarea(todo));
  }, []);

  return (
    <>
      <h1>{tarea.title}</h1>
    </>
  );
}

export default Todo;
