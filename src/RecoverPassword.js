import React, { useState } from "react";
import "./RecoverPassword.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();

    if (email) {
      auth
        .sendPasswordResetEmail(email)
        .then((auth) => {
          alert("Password reset email sent. Please check your email.");
        })
        .catch((error) => {
          console.error("Password reset error:", error);
          alert(error.message);
        });
    } else {
      alert("Please enter your email address to reset your password.");
    }
  };

  return (
    <div className="recoverPassword">
      <Link to="/">
        <img
          className="recoverPassword__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      <div className="recoverPassword__container">
        <h1>Password assistance</h1>
        <span className="recoverPassword__info">
          Enter the email address associated with your Amazon account.
        </span>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="recoverPassword__signInButton"
            type="submit"
            onClick={resetPassword}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
