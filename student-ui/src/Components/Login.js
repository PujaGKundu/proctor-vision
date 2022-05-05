import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="div-display login">
        <img src="media/Group 7.png" alt="logo" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <p>
          Reset password from default/
          <br />
          Forgot password
        </p>
        <Link to="/onboard1">
          <button className="btn btn-primary">Log In</button>
        </Link>
      </div>
    </>
  );
}
