import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginAuthentication } from "../redux/actions/auth/auth.action";
import { useHistory } from "react-router-dom";

export const Header = ({ ...props }) => {
  const isAuthenticate = useSelector((state) => state.isAuthenticate);
  const dispatch = useDispatch()
  const history = useHistory();
  function logout(e) {
    e.preventDefault();
    dispatch(setLoginAuthentication(false));
    history.push("/");
  }
  return (
    <>
      <header {...props}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {isAuthenticate !== true ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="#!" onClick={(e)=>{logout(e)}}>
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
