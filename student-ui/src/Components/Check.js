import React from "react";
import { Link } from "react-router-dom";

export default function Check() {
  return (
    <>
      <div className="check">
        <div className="flex jc-between">
          <div className="flex">
            <Link to="/home" className="h1">
              <h1>
                <i class="fa fa-angle-left" aria-hidden="true"></i>Graduate
                Record Examination
              </h1>
            </Link>
          </div>
          <div className="align-right">
            <h3>17th Dec 2020</h3>
            <time>9:00am - 12:00pm</time>
          </div>
        </div>

        <div className="check-main grid">
          <img src="media/Group 17.png" alt="Person" />
          <div>
            <p>
              <i class="fa fa-check tick" aria-hidden="true"></i>
              Webcam check
            </p>
            <p>
              <i class="fa fa-check tick" aria-hidden="true"></i>
              Mic testing
            </p>
            <p>
              <i class="fa fa-times cross" aria-hidden="true"></i>a Lris sync
            </p>
            <p>
              <i class="fa fa-times cross" aria-hidden="true"></i>
              BT / Alien hardware detection
            </p>
            <p>
              <i class="fa fa-check tick" aria-hidden="true"></i>
              QR /Virtual Machine detection
            </p>
            <p>
              <i class="fa fa-spinner" aria-hidden="true"></i>
              Browser lock
            </p>
            <p>
              <i class="fa fa-spinner" aria-hidden="true"></i>
              Screen capture
            </p>
            <p>
              <i class="fa fa-spinner" aria-hidden="true"></i>
              Identity authentication
            </p>
            <Link to="exam">
              <button className="btn btn-primary">Start Exam</button>
            </Link>
          </div>
        </div>

        <div className="content">
          <div className="flex">
            <div className="align-right">
              <h3>Samuel Doe</h3>
              <h5>18BIS1241</h5>
            </div>
            <img className="bottom" src="media/FGaknWvNbBk.png" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
