import React from "react";
import { Link } from "react-router-dom";

export default function RecordingExaminee() {
  return (
    <>
      <div className="home">
        <Link to="home-edit" className="home-edit">
          <div className="flex">
            <i className="fa fa-angle-left angle" aria-hidden="true"></i>
            <div>
              <h3>
                Neural Networks and Fuzzy Control <span>CSE3013</span>
              </h3>
              <h3>CAT 1</h3>
            </div>
          </div>
        </Link>
        <div className="home-main margin-top flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="green">Attended</h3>
          <Link to="recorded" className="home-edit">
            <div className="flex">
              <i className="fa fa-eye" aria-hidden="true"></i>
              <h3>View Recording</h3>
            </div>
          </Link>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="green">Attended</h3>
          <div className="flex">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <h3>View Recording</h3>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="red">Not Attended</h3>
          <div className="flex">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <h3>View Recording</h3>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="green">Attended</h3>
          <div className="flex">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <h3>View Recording</h3>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="red">Not Attended</h3>
          <div className="flex">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <h3>View Recording</h3>
          </div>
        </div>
        <div className="home-main flex jc-between">
          <div className="flex">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <h3 className="green">Attended</h3>
          <div className="flex">
            <i className="fa fa-eye" aria-hidden="true"></i>
            <h3>View Recording</h3>
          </div>
        </div>
        <div className="home-last">
          <div className="flex align-right">
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
