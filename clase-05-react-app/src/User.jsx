import { useParams } from "react-router-dom";
import Nav from "./Nav";

function User() {
  const { id } = useParams();

  return (
    <>
      <Nav />
      <h1>User {id}</h1>
    </>
  );
}

export default User;
