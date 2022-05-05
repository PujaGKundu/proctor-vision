import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import Spash from "./Components/Spash";
import Login from "./Components/Login";
import OnBoard1 from "./Components/OnBoard1";
import OnBoard2 from "./Components/OnBoard2";
import OnBoard3 from "./Components/OnBoard3";
import OnBoard4 from "./Components/OnBoard4";
import Setting from "./Components/Setting";
import HomeEmpty from "./Components/HomeEmpty";
import NewClass from "./Components/NewClass";
import Home from "./Components/Home";
import HomeEditing from "./Components/HomeEditing";
import HomeEditing2 from "./Components/HomeEditing2";
import NewExam from "./Components/NewExam";
import Exam from "./Components/Exam";
import ClassExamineeView from "./Components/ClassExamineeView";
import ExamineeSection from "./Components/ExamineeSection";
import RecordingExaminee from "./Components/RecordingExaminee";
import RecordedExam from "./Components/RecordedExam";

import "./Style/style.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Route path="/" exact>
      <Spash />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/onboard1" exact>
      <OnBoard1 />
    </Route>
    <Route path="/onboard2" exact>
      <OnBoard2 />
    </Route>
    <Route path="/onboard3" exact>
      <OnBoard3 />
    </Route>
    <Route path="/onboard4" exact>
      <OnBoard4 />
    </Route>
    <Route path="/home-empty" exact>
      <HomeEmpty />
    </Route>
    <Route path="/newclass" exact>
      <NewClass />
    </Route>
    <Route path="/home" exact>
      <Home />
    </Route>
    <Route path="/homeedit" exact>
      <HomeEditing />
    </Route>
    <Route path="/home-edit" exact>
      <HomeEditing2 />
    </Route>
    <Route path="/setting" exact>
      <Setting />
    </Route>
    <Route path="/newexam" exact>
      <NewExam />
    </Route>
    <Route path="/exam" exact>
      <Exam />
    </Route>
    <Route path="/view-examinee" exact>
      <ClassExamineeView />
    </Route>
    <Route path="/add-examinee" exact>
      <ExamineeSection />
    </Route>
    <Route path="/recording" exact>
      <RecordingExaminee />
    </Route>
    <Route path="/recorded" exact>
      <RecordedExam />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
