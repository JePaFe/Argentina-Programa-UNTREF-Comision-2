export default function Hijo(props) {
  return <div onClick={props.onClick}>Desde el Hijo {props.nombre}</div>;
}

Hijo.defaultProps = {
  nombre: "Sin nombre",
};

// ---

// export default function Hijo(props) {
//   const { nombre } = { ...defaultProps, ...props };
//   return <div>Desde el Hijo {nombre ?? "Sin datos"}</div>;
// }

// const defaultProps = {
//   nombre: "Sin nombre",
// };
