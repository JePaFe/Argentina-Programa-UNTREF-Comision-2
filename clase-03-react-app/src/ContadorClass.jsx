import { Component } from "react";

class ContadorClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  sumar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  restar = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.sumar}>Sumar 1</button>
        <button onClick={this.restar}>Restar 1</button>
      </>
    );
  }
}

export default ContadorClass;
