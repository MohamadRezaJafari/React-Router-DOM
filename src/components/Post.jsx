import { Link, useParams, useSearchParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Hamed",
    body: "first childe",
  },
  {
    id: 2,
    title: "Reza",
    body: "second childe",
  },
  {
    id: "three",
    title: "Ali",
    body: " Third childe",
  },
];
function Post() {
  const { id } = useParams();
  // const params = useParams();
  // console.log(params);
  const post = posts.find((p) => p.id === Number(id));

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("category"));
  // console.log(searchParams.get("type"));
  console.log(searchParams.get("name"));

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.id}</div>
      <div>{post.body}</div>
      <Link to="/app/posts">Back to posts</Link>
      <button onClick={() => setSearchParams({ name: "Reza", type: "user" })}>
        update query
      </button>
    </div>
  );
}

export default Post;
