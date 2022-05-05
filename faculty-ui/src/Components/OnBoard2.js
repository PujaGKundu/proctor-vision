import React from "react";
import { Link } from "react-router-dom";

export default function OnBoard2() {
  return (
    <>
      <div className="onboard">
        <div className="div-display ">
          <img src="media/undraw_Dev_focus_re_6iwt 1.png" alt="OnBoard2" />
          <h3>Customise your assessment and proctoring needs</h3>
          <Link to="/onboard3">
            <button className="btn btn-text">
              Continue <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </Link>
          <div className="flex jc-center">
            <div className="circle"></div>
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <p>Skip</p>
      </div>
    </>
  );
}
