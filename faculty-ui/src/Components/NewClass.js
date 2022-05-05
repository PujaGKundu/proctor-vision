import React from "react";
import { Link } from "react-router-dom";

export default function NewClass() {
  return (
    <>
      <div className="newClass">
        <div className="flex jc-between">
          <h2>New Class</h2>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div>
          <input type="text" placeholder="Cource Name" />
          <input type="text" placeholder="Course Code" />
        </div>
        <div className="flex upload">
          <div className="flex">
            <i class="fa fa-download" aria-hidden="true"></i>
            <h3>Upload .csv File</h3>
          </div>
          <h3>+ Add Examinee</h3>
        </div>
        <Link to="home">
          <button className="btn-middle btn-primary">Create Class</button>
        </Link>
      </div>
    </>
  );
}
