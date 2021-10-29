import React, { useEffect } from "react";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/Header";
import { AfterLogin } from "../pages/AfterLogin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Page404 from "../pages/Page404";
import Private from "./Private";
import PublicRoute from "./Public";

export default function App() {
  // Set minimum height of the main element
  const setMinHeight = () => {
    const header = document.getElementById("customHeader");
    const main = document.getElementById("main");
    main.style.minHeight = window.innerHeight - header.offsetHeight + "px";
  };
  window.addEventListener("resize", function () {
    setMinHeight();
  });
  useEffect(() => {
    setMinHeight();
  });

  return (
    <Router>
      <Header id="customHeader" className="custom-header" />
      <main className="main" id="main">
        <Switch>
          <Private path="after-login" component={AfterLogin} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path={`*`} component={Page404} />
          <PublicRoute path="/" component={Home} />
          {/* <Route path="/login">
            <Login />
          </Route> */}
          {/* <Route path="/after-login">
            <AfterLogin />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
}
