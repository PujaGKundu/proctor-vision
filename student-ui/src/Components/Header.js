import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="flex jc-between">
            <h3>Proctor Vision</h3>
            <div className="search">
              <i className="fa fa-search" aria-hidden="true"></i>
              Search
            </div>

            <div className="flex ">
              <i className="fa fa-window-minimize" aria-hidden="true"></i>
              <i className="fa fa-window-maximize" aria-hidden="true"></i>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
