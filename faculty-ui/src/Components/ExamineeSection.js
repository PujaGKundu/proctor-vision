import React from "react";
import { Link } from "react-router-dom";

export default function ExamineeSection() {
  return (
    <>
      <div className="home">
        <div className=" home-main">
          <div className="flex jc-between">
            <h3>Examinees</h3>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="flex wrap">
            <div className="search">
              <i className="fa fa-search" aria-hidden="true"></i>
              Search Students
            </div>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
            <article className="art">
              <h6>Samuel Doe 18BIS1241</h6>
            </article>
          </div>
          <section className="flex jc-between">
            <div className="flex">
              <img src="media\FGaknWvNbBk.png" alt="profile" />
              <h3>Samuel Doe</h3>
            </div>
            <h3>18BIS0127</h3>
            <input type="checkbox" />
          </section>
          <section className="flex jc-between">
            <div className="flex">
              <img src="media\FGaknWvNbBk.png" alt="profile" />
              <h3>Samuel Doe</h3>
            </div>
            <h3>18BIS0127</h3>
            <input type="checkbox" />
          </section>
          <section className="flex jc-between">
            <div className="flex">
              <img src="media\FGaknWvNbBk.png" alt="profile" />
              <h3>Samuel Doe</h3>
            </div>
            <h3>18BIS0127</h3>
            <input type="checkbox" />
          </section>
          <section className="flex jc-between">
            <div className="flex">
              <img src="media\FGaknWvNbBk.png" alt="profile" />
              <h3>Samuel Doe</h3>
            </div>
            <h3>18BIS0127</h3>
            <input type="checkbox" />
          </section>
          <section className="flex jc-between">
            <div className="flex">
              <img src="media\FGaknWvNbBk.png" alt="profile" />
              <h3>Samuel Doe</h3>
            </div>
            <h3>18BIS0127</h3>
            <input type="checkbox" />
          </section>
          <Link to="home-edit">
            <div className="center">
              <button className="btn-middle btn-primary">Add to Class</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
