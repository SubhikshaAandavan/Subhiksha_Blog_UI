import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);       
    navigate("/");  
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
   
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email.."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password.."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <Link  className="link" to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
