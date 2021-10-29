import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

export const Private = ({ component: Component, ...path }) => {
  return (
    <>
      <Route
        {...path}
        render={() => {
            (localStorage.getItem('access_token') !== null && 
                localStorage.getItem('access_token') !== undefined && 
                localStorage.getItem('access_token') !== '') 
                ? <Suspense fallback={<div>Component Loading</div>}>
                        <Component />
                    </Suspense> 
                : <Redirect to='/login' />
        }}
      />
    </>
  );
};

export default Private;
