import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h1>Posts Page</h1>
      <ul>
        <li>
          <Link to="1?category=free&type=blog">post1</Link>
        </li>
        <li>
          <Link to="2">post2</Link>
        </li>
        <li>
          <Link to="3">post3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
