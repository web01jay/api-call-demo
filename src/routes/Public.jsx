import React, { Suspense } from "react";
import { Route } from "react-router-dom";

export const Public = ({ component: Component, ...rest }) => {
  console.log("load public");

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return (
            <Suspense fallback={<div>Component Loading</div>}>
              <Component {...props} />
            </Suspense>
          );
        }}
      />
    </>
  );
};

export default Public;
