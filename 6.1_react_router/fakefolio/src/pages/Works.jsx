import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Worksbar from "./Worksbar";
import Jobdone from "./Jobdone";

const Works = () => {
  let { path } = useRouteMatch();
  console.log(path);

  return (
    <div>
      <h1>Works</h1>
      <Worksbar />
      <Switch>
        <Route path={`${path}/:jobId`}>
          <Jobdone />
        </Route>
      </Switch>
    </div>
  );
};

export default Works;
