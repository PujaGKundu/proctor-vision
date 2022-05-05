import React from "react";
import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <>
      <div className="setting">
        <div className="flex jc-between">
          <div className="flex">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <Link to="/home">
              <img
                className="bottom"
                src="media/FGaknWvNbBk.png"
                alt="profile"
              />
            </Link>
            <h1>Samuel Doe</h1>
            <h4>18BIS1241</h4>
          </div>
          <div className="">
            <p>
              <i class="fa fa-pencil" aria-hidden="true"></i>
              Edit Profile Picture
            </p>
          </div>
        </div>
        <div>
          <h2>General Settings</h2>
          <div className="general">
            <div className="flex jc-between">
              <h3>Settings 1</h3>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <hr />
            <div className="flex jc-between">
              <h3>Settings 2</h3>
              <i class="fa fa-toggle-off" aria-hidden="true"></i>
            </div>
            <hr />
            <div className="flex jc-between">
              <h3>Settings 2</h3>
              <i class="fa fa-toggle-on" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div>
          <h2>General Settings</h2>
          <div className="general">
            <div className="flex jc-between">
              <h3>Settings 1</h3>
              <p>View More</p>
            </div>
            <hr />
            <div className="flex jc-between">
              <h3>Settings 2</h3>
              <i class="fa fa-toggle-off" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
