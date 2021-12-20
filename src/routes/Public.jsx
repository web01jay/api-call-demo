import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Public = ({ component: Component, ...rest }) => {
  console.log("load public");

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          // return <Component {...props} />;
          return !localStorage.getItem("access_token")  ? (
            <Component {...props} />
          ) : (
            <Redirect to="/after-login" />
          );
        }}
      />
    </>
  );
};

export default Public;
