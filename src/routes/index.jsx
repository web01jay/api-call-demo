import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import Page404 from "../pages/Page404";
import UserProfile from "../pages/UserProfile";
import { Users } from "../pages/Users";
import Posts from "../pages/Posts";
import Private from "./Private";
import PublicRoute from "./Public";
import FormPost from "../pages/FormPost";

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
  },[]);

  return (
    <Router>
      <Header id="customHeader" className="custom-header" />
      <main className="main" id="main">
        <Suspense fallback={<div>Component Loading</div>}>
          <Switch>
            <PublicRoute path="/login" component={Login} exact />

            <Private path="/users" component={Users} exact />
            <Private path="/users/:id" component={UserProfile} exact />
            <Private path="/users/:id/posts" component={Posts} exact />
            <Private path="/form-post" component={FormPost} exact />

            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path={`*`} component={Page404} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
}
