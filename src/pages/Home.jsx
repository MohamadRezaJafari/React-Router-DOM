import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="posts">See latest Posts?</NavLink>
    </div>
  );
}

export default Home;
