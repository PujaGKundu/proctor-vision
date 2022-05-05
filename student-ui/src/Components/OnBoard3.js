import React from "react";
import { Link } from "react-router-dom";

export default function OnBoard3() {
  return (
    <>
      <div className="onboard">
        <div className="div-display ">
          <img
            src="media/undraw_Segment_analysis_re_ocsl 1.png"
            alt="OnBoard1"
          />
          <h3>Say no to false reports</h3>
          <Link to="onboard4">
            <button className="btn btn-text">
              Continue <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </Link>
          <div className="flex jc-center">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle active"></div>
            <div className="circle"></div>
          </div>
        </div>
        <p>Skip</p>
      </div>
    </>
  );
}
