import { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = { hora: new Date() };
  }

  componentDidMount() {
    this.intervalo = setInterval(() => {
      this.setState({ hora: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return (
      <div>
        <p>La hora actual es: {this.state.hora.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Reloj;
