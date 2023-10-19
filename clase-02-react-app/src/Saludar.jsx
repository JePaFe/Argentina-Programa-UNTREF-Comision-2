import PropTypes from "prop-types";

function Saludar(props) {
  // console.log(props.datos, props.datos?.uno);
  return <h2>Hola {props.nombre}</h2>;
}

Saludar.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default Saludar;
