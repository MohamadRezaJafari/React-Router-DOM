import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("Reza");

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/app/dashboard", { replace: true, state: "this is test state" });
    navigate("/app/dashboard", { replace: true, state: name });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
