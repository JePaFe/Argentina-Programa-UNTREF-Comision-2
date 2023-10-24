import { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
    };
  }

  handleNombreChange = (event) => {
    this.setState({ nombre: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={this.state.nombre}
              onChange={this.handleNombreChange}
            />
          </div>
          <div>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

export default FormClass;
