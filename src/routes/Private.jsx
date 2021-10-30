import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Private = ({ component: Component, path, exact }) => {
  return (
    <>
      <Route
        path={path}
        exact={exact}
        render={() => {
          return localStorage.getItem("access_token") !== null &&
            localStorage.getItem("access_token") !== undefined &&
            localStorage.getItem("access_token") !== "" ? (
            <Component />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    </>
  );
};

export default Private;
