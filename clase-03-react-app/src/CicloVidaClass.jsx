import { Component } from "react";

class CicloVidaClass extends Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: "Hola Mundo", count: 2 };
    console.log("Ciclo de Vida constructor");
  }

  componentDidMount() {
    console.log("Ciclo de Vida componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count >= 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, prevState);
  }

  restar = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("Ciclo de Vida render");
    return (
      <>
        <h1>{this.state.mensaje}</h1>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.restar}>Restar</button>
      </>
    );
  }
}

export default CicloVidaClass;
