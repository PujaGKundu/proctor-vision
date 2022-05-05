import React from "react";
import { Link } from "react-router-dom";

export default function Spash() {
  return (
    <>
      <div className="spash">
        <img src="media/Frame.png" alt="logo" />
        <h1>
          Welcome aboard <br />
          to the future in the making
          <br /> you've just become a part of it
        </h1>
        <Link to="/login">
          <button className="btn btn-primary">
            Continue <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
