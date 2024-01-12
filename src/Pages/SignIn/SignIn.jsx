import "./signin.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/Button/Button";

const SignIn = () => {

  const {signin} = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = ()=>{
    if(!email | !password){
      setError("Fill all the fields")
      return;
    }

    const res = signin(email, password)

    if(res){
      setError(res)
      return;
    }

    navigate("/home");
  }

  return (
    <article className="container">
      <label>Welcome !</label>
      <section className="content">
        <input
          type="email"
          placeholder="Tip your email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <input
          type="password"
          placeholder="Tip your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <span className="error-msg">{error}</span>
        <Button Text="Login" onClick={handleLogin}></Button>

        <div className="signup">
          Doesn't have a account?
          <span>
            <Link to="/signup" className="strong">Create One !</Link>
          </span>
        </div>
      </section>
    </article>
  );
};

export default SignIn;
