import "./login.css";
import React from "react";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ImPerfect</h3>
          <span className="loginDesc">
            Too Human to be Perfect
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            {/*<input placeholder="Email" className="loginInput" />*/}
            {/*<input placeholder="Password" className="loginInput" />*/}
            <button  className="loginButton">Log In with Outlook</button>
            {/*<span className="loginForgot">Forgot Password?</span>*/}
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
