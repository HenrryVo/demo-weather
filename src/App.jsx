import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loader } from "components";
import { route } from "./Route";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {route.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => {
                  return (
                    <Suspense fallback={<Loader />}>
                      <route.component {...props} />
                    </Suspense>
                  );
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
