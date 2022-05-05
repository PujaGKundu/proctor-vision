import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="flex jc-between">
          <h1>My Classes</h1>
          <div className="flex jc-between">
            <div className="flex">
              <i className="fa fa-pencil underline" aria-hidden="true"></i>
              <h3>Edit Class</h3>
            </div>
            <div className="flex margin-left">
              <span>+</span>
              <h3>Add Class</h3>
            </div>
          </div>
        </div>
        <div className="empty-home">
          <h2>You're yet to add classes and exams.</h2>
          <Link to="newclass">
            <button className="btn-middle btn-secondary">+ Add Class</button>
          </Link>
        </div>
        <div className="home-last">
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
