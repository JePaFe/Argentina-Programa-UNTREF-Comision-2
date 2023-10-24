import { useState } from "react";

function FormFn() {
  const [values, setValues] = useState({
    nombre: "Juan",
    apellido: "Perez",
    email: "x@x.com",
  });

  //   const { nombre } = values;
  //   console.log(nombre);

  //   console.log(values.nombre, values["nombre"]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    // setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleApellidoChange = (event) => {
    setValues({ ...values, apellido: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={values.apellido}
            onChange={handleApellidoChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormFn;
