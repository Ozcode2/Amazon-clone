import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const toRegisterPage = () => {
    navigate("/register");
  };

  const [showPassword, setShowPassword] = useState(false); // State to show/hide password

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [displayPassword, setDisplayPassword] = useState(false); // State to show/hide password

  const togglePasswordDisplay = () => {
    setDisplayPassword((prevDisplayPassword) => !prevDisplayPassword);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <i
            className={`password-toggle-icon ${
              showPassword ? <FaEyeSlash /> : <FaEye />
            }`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </i>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          <span className="login__forgotPassword">
            {
              <Link to="/recover-password" className="login__toRecoverPassword">
                Forgot your password?
              </Link>
            }
          </span>
        </p>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={toRegisterPage}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
