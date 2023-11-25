import React from "react";
import "./Login.css";

function Login() {
  function LOGIN(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let value = Object.fromEntries(formData);
    sessionStorage.setItem("userInfo", JSON.stringify(value));
    window.location = "/";
  }

  return (
    <div className="login">
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={LOGIN}>
          <input
            name="username"
            autoComplete="disable"
            autoFocus
            required
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
