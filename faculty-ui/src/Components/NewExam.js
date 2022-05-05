import React from "react";
import { Link } from "react-router-dom";

export default function NewExam() {
  return (
    <>
      <div className="newClass">
        <div className="flex jc-between">
          <h2>New Exam</h2>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div>
          <input type="text" placeholder="Exam Name" />
          <input type="date" placeholder="DD - MM - YYYY" />
          <input type="time" placeholder="(00 - 23) : (00 - 60)" />
        </div>
        <div className="flex upload">
          <button className="btn-middle btn-secondary">
            <i className="fa fa-times" aria-hidden="true"></i> Exclude Examinee
          </button>
          <h3>
            18BIS1241 - Samuel Doe, 18BIS1241 - Samuel Doe, 18BIS1241 - Samuel
            Doe,18BIS1241 - Samuel Doe,18BIS12...
          </h3>
        </div>
        <Link to="home">
          <button className="btn-middle btn-primary">Create Exam</button>
        </Link>
      </div>
    </>
  );
}
