import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { FaInfo } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      setPasswordError(true);
      return false;
    }
    setErrorMessage("");
    setPasswordError(false);
    return true;
  };

  const register = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    if (password !== reEnteredPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/amazon-clone");
        }
      })
      .catch((error) => alert(error.message));
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <div className="register">
      <Link to="/amazon-clone">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="register__container">
        <h1>Create account</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            style={{
              border: passwordError ? "2px solid brown" : "1px solid #9f9d9d",
              outline:
                passwordError && isPasswordFocused ? "3px solid pink" : "none",
            }}
          />

          {passwordError && (
            <p className="password__error">
              <i>!</i>
              {errorMessage}
            </p>
          )}
          {!passwordError && ( // Conditionally render password info
            <span className="password__info">
              <FaInfo className="password__infoIcon" /> Passwords must be at
              least 6 characters.
            </span>
          )}

          <h5>Re-enter Password</h5>
          <input
            type="password"
            value={reEnteredPassword}
            onChange={(e) => setReEnteredPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            style={{
              border: passwordError ? "2px solid brown" : "1px solid #9f9d9d",
              outline:
                passwordError && isPasswordFocused ? "3px solid pink" : "none",
            }}
          />

          {errorMessage && (
            <p className="error__message">
              <i>!</i>
              {errorMessage}
            </p>
          )}

          <button
            className="login__signInButton"
            type="submit"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </form>

        <p>
          By signing-up you agree to AMAZON FAKE CLONE Conditions of Use &
          Sale.Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        <p>
          Already have an account?
          {
            <Link to="/login" className="register__toLogin">
              Sign in
            </Link>
          }
        </p>
      </div>
    </div>
  );
};

export default Register;
