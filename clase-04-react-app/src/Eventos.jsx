function Eventos() {
  const handleClick = () => console.log("Click");
  const handleLink = (event) => {
    console.log(event.type);
    console.log(event.target);

    event.preventDefault();
    console.log("Click en link");
  };
  const handleKey = (event) => {
    console.log(event.key);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <a onClick={handleLink} href="https://google.com">
        Google
      </a>
      <button
        onMouseEnter={() => console.log("onMouseEnter")}
        onMouseDown={() => console.log("onMouseDown")}
      >
        Mouse
      </button>
      <input
        type="text"
        onFocus={() => console.log("focus")}
        onBlur={() => console.log("onBlur")}
        onKeyPress={handleKey}
      />
    </>
  );
}

export default Eventos;
