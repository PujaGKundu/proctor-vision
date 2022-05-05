import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>My Classes</h1>
        <div className="home-main flex jc-between">
          <div>
            <h3>Neural Networks and Fuzzy Control</h3>
            <h5>CSE3013</h5>
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div className="home-main">
          <div className="flex jc-between">
            <div>
              <h3>IOT System Architecture</h3>
              <h5>ECE1029</h5>
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
            <button className="btn-middle btn-primary" disabled>
              Completed
            </button>
          </section>

          <section className="flex jc-between">
            <h3>CAT2</h3>
            <div className="flex jc-even">
              <div>12th Jan 2021 </div>
              <div className="circle"></div>
              <time>9:00 am - 12:00pm</time>
              <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <Link to="check">
              <button className="btn-middle btn-primary">Join Exam</button>
            </Link>
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
              Yet to start
            </button>
          </section>
        </div>
        <div className="home-last">
          <div className="flex jc-between">
            <h3 className="underline">Take Demo Exam</h3>
            <div className="flex">
              <div className="align-right">
                <h3>Samuel Doe</h3>
                <h5>18BIS1241</h5>
              </div>
              <Link to="setting">
                <img src="media/FGaknWvNbBk.png" alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
