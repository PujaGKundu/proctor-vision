import React from "react";

export default function Exam() {
  return (
    <>
      <div className="exam">
        <div className="flex jc-between ai-start">
          <div>
            <div className="flex">
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              <time>01:33:33</time>
            </div>

            <h2>Question 1</h2>
            <div className="exam-div">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <img src="media/undraw_Dev_focus_re_6iwt 1.png" alt="exam" />
            </div>
            <div className="exam-div flex">
              <div className="circle active"></div>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="exam-div flex">
              <div className="circle"></div>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="exam-div flex">
              <div className="circle"></div>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className="exam-div flex">
              <div className="circle"></div>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <aside>
            <div className="flex jc-between">
              <button className="btn-small btn-primary">Exit</button>
              <button className="btn-small btn-primary">Submit</button>
            </div>

            <div className="grid-5">
              <p className="white">1</p>
              <p>1</p>
              <p className="green">1</p>
              <p className="red">1</p>
              <p className="red">1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
            <div className="flex">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <h5>1</h5>
              <h5 className="dull">2</h5>
              <h5 className="dull">3</h5>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>

            <div className="flex jc-between margin-top">
              <button className="btn-small btn-primary flex" disabled>
                <i class="fa fa-angle-left" aria-hidden="true"></i> Previous
              </button>

              <button className="btn-small btn-primary flex">
                Next <i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
