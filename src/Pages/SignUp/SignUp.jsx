import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../Components/Button/Button";

const SignUp = () => {

   const [email, setEmail] = useState("");
   const [emailConf, setEmailConf] = useState("")
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

     const { signup } = useAuth();
     const navigate = useNavigate();

     const handleSignUp = ()=>{
      if(!email | !emailConf | !password){
        setError("Fill all the camps.")
        return;
      } else if( email !== emailConf){
        setError("The emails aren't identic.")
        return;
      }

      const res = signup(email, password);

      if(res){
        setError(res)
        return;
      }

      alert("User succesfully registered")
      navigate("/")
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
          type="email"
          placeholder="Confirm your email"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <input
          type="password"
          placeholder="Tip your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <span className="error-msg">{error}</span>
        <Button Text="SignUp!" onClick={handleSignUp}></Button>

        <div className="signup">
          Already have a account? 
          <span>
            <Link to="/signin" className="strong">
              Login !
            </Link>
          </span>
        </div>
      </section>
    </article>
  );
};

export default SignUp;
