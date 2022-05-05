import React from "react";
import { Link } from "react-router-dom";

export default function ClassExamineeView() {
  return (
    <>
      <div className="home">
        <div className="flex jc-between">
          <Link to="home-edit" className="home-edit">
            <div>
              <h1>
                <i className="fa fa-angle-left angle" aria-hidden="true"></i>
                Neural Networks and Fuzzy Co...
              </h1>
            </div>
          </Link>
          <div className="flex">
            <div className="flex">
              <i class="fa fa-download" aria-hidden="true"></i>
              <h3>Upload .csv File</h3>
            </div>
            <h3 className="margin-left">+ Add Examinee</h3>
          </div>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-main margin-top flex jc-between">
          <div className="flex jc-between">
            <img src="media\FGaknWvNbBk.png" alt="profile" />
            <h3>Samuel Doe</h3>
          </div>
          <h3>18BIS0127</h3>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <div className="home-last">
          <div className="align-right">
            <div className="flex">
              <div className="">
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
