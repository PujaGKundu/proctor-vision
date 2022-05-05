import React from "react";
import { Link } from "react-router-dom";

export default function RecordedExam() {
  return (
    <>
      <div className="home">
        <Link to="recording" className="home-edit">
          <div className="flex">
            <h1>
              <i className="fa fa-angle-left angle" aria-hidden="true"></i>
              Rudra S. Das <span>18BIS0127</span>
            </h1>
          </div>
        </Link>
        <div className="flex ai-start jc-between">
          <div className="profile">
            <img src="media\Group 17.png" alt="profile" />
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="margin-left">
            <img src="media\red warning.png" alt="Red Warning" />
            <img src="media\yellow warning.png" alt="Yellow Warning" />
            <div className="margin-left">
              <h3>Messages</h3>
              <div className="home-main">
                <h3>Lorem ipsum dolor sit amet</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-last">
          <div className="flex">
            <div className="align-right">
              <h3>Shilpi Gupta</h3>
              <h5>F-2309</h5>
            </div>
            <img src="media/girl.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
