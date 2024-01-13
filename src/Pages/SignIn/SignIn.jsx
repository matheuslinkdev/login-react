import "./signin.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/Button/Button";

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Fill all the fields");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <article className="container">
      <span className="error-msg">{error}</span>
      <section className="signin-content">
        <h1>Sign In !</h1>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Tip your email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Tip your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />

        <div className="sign">
          <span className="account-ask">Doesn't have a account? </span>
          <Link to="/signup" className="strong">
            Create One !
          </Link>
        </div>
        <Button Text="Login" onClick={handleLogin}></Button>
      </section>
    </article>
  );
};

export default SignIn;
