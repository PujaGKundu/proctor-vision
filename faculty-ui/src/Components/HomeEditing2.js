import React from "react";
import { Link } from "react-router-dom";

export default function HomeEditing2() {
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
        <div className="home-main flex jc-between">
          <div className="flex">
            <input type="checkbox"></input>
            <div>
              <h3>Neural Networks and Fuzzy Control</h3>
              <h5>CSE3013</h5>
            </div>
          </div>
          <Link to="view-examinee" className="home-edit">
            <div className="flex">
              <i className="fa fa-user" aria-hidden="true"></i>
              <h3>View Examiner</h3>
            </div>
          </Link>
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
        <div className="home-main">
          <div className="flex jc-between">
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
            <Link to="add-examinee" className="home-edit">
              <div className="flex">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                <h3>Add Examinee</h3>
              </div>
            </Link>
            <div className="flex">
              <i class="fa fa-user-times"></i>
              <h3>Remove Examinee</h3>
            </div>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </div>
          <section className="flex jc-between">
            <h3>CAT1</h3>
            <div className="flex jc-even">
              <div>22nd Dec 2020 </div>
              <div className="circle"></div>
              <time>9:00 am - 12:00pm</time>
              <i class="fa fa-bell-slash" aria-hidden="true"></i>
            </div>
            <Link to="recording">
              <button className="btn-middle btn-primary">
                View Recordings
              </button>
            </Link>
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
              <img src="media/girl.jpg" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
