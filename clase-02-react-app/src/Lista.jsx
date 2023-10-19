function Lista(props) {
//   console.log(props.elementos);
  const elementos = props.elementos.map((elemento, index) => (
    <li key={index}>{elemento}</li>
  ));

//   console.log(elementos);

  return <ul>{elementos}</ul>;
}

export default Lista;
