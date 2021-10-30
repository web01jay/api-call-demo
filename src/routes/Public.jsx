import React, { Suspense } from "react";
import { Route } from "react-router-dom";

export const Public = ({ component: Component, ...rest }) => {
  console.log("load public");

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    </>
  );
};

export default Public;
