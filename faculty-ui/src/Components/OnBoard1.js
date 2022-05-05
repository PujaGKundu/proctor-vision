import React from "react";
import { Link } from "react-router-dom";

export default function OnBoard1() {
  return (
    <>
      <div className="onboard">
        <div className="div-display ">
          <img src="media/undraw_Team_goals_re_4a3t 1.png" alt="OnBoard1" />
          <h3>We ensure that honesty pays</h3>
          <Link to="/onboard2">
            <button className="btn btn-text">
              Continue <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </Link>
          <div className="flex jc-center">
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <p>Skip</p>
      </div>
    </>
  );
}
