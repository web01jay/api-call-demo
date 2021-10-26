import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export default function App() {
  // Set minimum height of the main element
  const setMinHeight = () => {
    const header = document.getElementById('customHeader')
    const main = document.getElementById('main')
    main.style.minHeight = (window.innerHeight - header.offsetHeight) + "px"
  }
  window.addEventListener('resize', function(){
    setMinHeight()
  })
  useEffect(() => {
      setMinHeight()
  })
  
  return (
    <Router>
      <div>
        <Header id="customHeader" className="custom-header" />
        <main className="main" id="main">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
