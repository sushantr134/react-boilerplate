import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../routes";

const App: React.FunctionComponent<{}> = () => {
  const RouterRoot = (
    <BrowserRouter>
      <Switch>
        {Routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );

  return RouterRoot;
};
export default App;
