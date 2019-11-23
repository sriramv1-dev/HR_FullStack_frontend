import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { NavBar } from "../components";
import {
  EmployeeList,
  EmployeeCreate,
  EmployeeUpdate,
  NotFound
} from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/employees/create" exact component={EmployeeCreate} />
        <Route path="/employees/update/:id" exact component={EmployeeUpdate} />
        <Redirect from="/" exact to="/employees" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

export default App;
