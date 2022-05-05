import React from "react";
import { Link } from "react-router-dom";

export default function OnBoard4() {
  return (
    <>
      <div className="onboard">
        <div className="div-display ">
          <img src="media/undraw_Security_on_re_e491 1.png" alt="OnBoard4" />
          <h3>Protecting rights, respecting privacy</h3>
          <Link to="home">
            <button className="btn btn-text">
              Go to dashboard{" "}
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </Link>
          <div className="flex jc-center">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle active"></div>
          </div>
        </div>
      </div>
    </>
  );
}
