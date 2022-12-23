import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClickLogIn = () => {
    history.push("/login")
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BhavikSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BhavikSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              type="password"
              required
              placeholder="Password"
              ref={password}
              minLength="6"
              className="loginInput"
            />
            <input
              required
              type="password"
              minLength="6"
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button onClick={handleClickLogIn} className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
