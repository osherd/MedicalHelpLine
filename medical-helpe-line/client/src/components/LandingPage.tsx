import React from "react";
import Login from "./LogIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const LandingPage: React.FC<any> = () => {
  return (
    <div className="App">
      <img
        src="https://image.shutterstock.com/z/stock-vector-team-doctors-on-a-white-background-vector-illustration-in-flat-style-528761458.jpg"
        alt=""
        style={{ height: 150, width: 500 }}
      />
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/Login">Admin</NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/Login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default LandingPage;
