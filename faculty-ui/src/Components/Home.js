import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="flex jc-between">
          <h1>My Classes</h1>
          <div className="flex jc-between">
            <Link to="homeedit" className="edit">
              <div className="flex">
                <i className="fa fa-pencil underline" aria-hidden="true"></i>
                <h3>Edit Class</h3>
              </div>
            </Link>
            <div className="flex margin-left">
              <span>+</span>
              <h3>Add Class</h3>
            </div>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div>
            <h3>Neural Networks and Fuzzy Control</h3>
            <h5>CSE3013</h5>
          </div>
          <div className="flex">
            <i className="fa fa-user" aria-hidden="true"></i>
            <h3>View Examiner</h3>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div className="home-main">
          <div className="flex jc-between">
            <div>
              <h3>IOT System Architecture</h3>
              <h5>ECE1029</h5>
            </div>
            <div className="flex">
              <i className="fa fa-user" aria-hidden="true"></i>
              <h3>View Examiner</h3>
            </div>
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <section className="flex jc-between">
            <h3>CAT1</h3>
            <div className="flex jc-even">
              <div>22nd Dec 2020 </div>
              <div className="circle"></div>
              <time>9:00 am - 12:00pm</time>
              <i class="fa fa-bell-slash" aria-hidden="true"></i>
            </div>
            <button className="btn-middle btn-primary">View Recordings</button>
            <div>
              <i className="fa fa-pencil underline" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </section>

          <section className="flex jc-between">
            <h3>CAT2</h3>
            <div className="flex jc-even">
              <div>12th Jan 2021 </div>
              <div className="circle"></div>
              <time>9:00 am - 12:00pm</time>
              <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <button className="btn-middle btn-primary">Join Exam</button>
            <div>
              <i className="fa fa-pencil underline" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </section>

          <section className="flex jc-between">
            <h3>Lab FAT</h3>
            <div className="flex jc-even">
              <div>22nd Mar 2021 </div>
              <div className="circle"></div>
              <time>9:00 am - 12:00pm</time>
              <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <button className="btn-middle btn-primary" disabled>
              Not Started Yet
            </button>
            <div>
              <i className="fa fa-pencil underline" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </section>
          <Link to="newexam" className="addexam">
            <article>
              <h3>Add exam</h3>
            </article>
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
