import React from "react";
import { Link } from "react-router-dom";

export default function HomeEditing() {
  return (
    <>
      <div className="home">
        <div className="flex jc-between">
          <h1>My Classes</h1>
          <div className="flex jc-between color">
            <div className="flex">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              <h4>Collapse All</h4>
            </div>
            <div className="flex margin-left">
              <i className="fa fa-trash" aria-hidden="true"></i>
              <h4>Delete Class(es)</h4>
            </div>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <input type="checkbox"></input>
            <div>
              <h3>Neural Networks and Fuzzy Control</h3>
              <h5>CSE3013</h5>
            </div>
          </div>
          <div className="flex">
            <i className="fa fa-user" aria-hidden="true"></i>
            <h3>View Examiner</h3>
          </div>
          <div className="flex">
            <i className="fa fa-user-plus" aria-hidden="true"></i>
            <h3>Add Examinee</h3>
          </div>
          <div className="flex">
            <i class="fa fa-user-times"></i>
            <h3>Remove Examinee</h3>
          </div>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <Link to="home-edit" className="home-edit">
          <div className="home-main flex jc-between">
            <div className="flex">
              <input type="checkbox"></input>
              <div>
                <h3>Iot System Architecture</h3>
                <h5>ECE1342</h5>
              </div>
            </div>

            <div className="flex">
              <i className="fa fa-user" aria-hidden="true"></i>
              <h3>View Examiner</h3>
            </div>
            <div className="flex">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              <h3>Add Examinee</h3>
            </div>
            <div className="flex">
              <i class="fa fa-user-times"></i>
              <h3>Remove Examinee</h3>
            </div>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </Link>
        <div className="home-last">
          <div className="align-right">
            <button className="btn-middle btn-secondary">Cancel</button>
            <button className="btn-middle btn-primary">Save Changes</button>
          </div>
          <div className="flex jc-between">
            <h3 className="underline">Take Demo Exam</h3>
            <div className="flex">
              <div className="align-right">
                <h3>Shilpi Gupta</h3>
                <h5>F-2309</h5>
              </div>
              <Link to="setting">
                <img src="media/girl.jpg" alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
