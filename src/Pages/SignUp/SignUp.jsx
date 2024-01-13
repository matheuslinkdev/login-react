import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/Button/Button";
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email | !name | !password) {
      setError("Fill all the fields.");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("User succesfully registered");
    navigate("/");
  };

  return (
    <article className="container">
      <span className="error-msg">{error}</span>
      <section className="signup-content">
        <h1>Welcome !</h1>

        <label>UserName:</label>
        <input
          type="email"
          placeholder="UserName"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />

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
          <span className="account-ask">Already have a account? </span>
          <Link to="/signin" className="strong">
            Login !
          </Link>
        </div>
        <Button Text="SignUp!" onClick={handleSignUp}></Button>
      </section>
    </article>
  );
};

export default SignUp;
