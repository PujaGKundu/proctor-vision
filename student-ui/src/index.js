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
import Check from "./Components/Check";
import Setting from "./Components/Setting";
import Home from "./Components/Home";
import Exam from "./Components/Exam";

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
    <Route path="/home" exact>
      <Home />
    </Route>
    <Route path="/check" exact>
      <Check />
    </Route>
    <Route path="/setting" exact>
      <Setting />
    </Route>
    <Route path="/exam" exact>
      <Exam />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
