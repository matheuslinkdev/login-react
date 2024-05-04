import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout, deleteUser } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="container">
      <img
        src="https://avatars.githubusercontent.com/u/122500941?v=4"
        alt="Matheus Link"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "#7F5539",
        }}
      />
      <h2>
        Check my Profiles and my Portfolio by clicking in the following links:
      </h2>
      <ul>
        <li>
          <a
            href="https://matheuslinkportfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/matheuslinkdev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matheus-link-21b3a4265/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
      <div style={{display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center", justifyContent: "center"}}>

      <button
        onClick={() => [signout(), navigate("/")]}
        style={{
          width: "200px",
          height: "55px",
          borderRadius: "10px",
          backgroundColor: "#7F5539",
          border: "none"
        }}
      >
        Sign Out
      </button>
      <button
        onClick={() => [deleteUser(), navigate("/")]}
        style={{
          width: "200px",
          height: "55px",
          borderRadius: "10px",
          backgroundColor: "red",
          border: "none"
        }}
      >
        Delete Account
      </button>
      </div>
    </main>
  );
};

export default Home;
