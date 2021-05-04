import React from "react";
import Login from "./LogIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";

const LandingPage: React.FC<any> = () => {
  return (
    <div className="App">
      <img
        src="https://image.shutterstock.com/z/stock-vector-team-doctors-on-a-white-background-vector-illustration-in-flat-style-528761458.jpg"
        alt=""
        style={{ height: 150, width: 500 }}
      />
      <Router>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <NavLink to="/Login">
              <Button
                id="admin_button"
                variant="outlined"
                size="large"
                color="primary"
              >
                <Typography>Admin</Typography>
              </Button>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <NavLink to="/Doctor">
              <Button
                id="doctor_button"
                variant="outlined"
                size="large"
                color="primary"
              >
                <Typography>Doctor</Typography>
              </Button>
            </NavLink>
          </Grid>
          <Grid item xs={12}>
            <NavLink to="/Patient">
              <Button
                id="patient_button"
                variant="outlined"
                size="large"
                color="primary"
              >
                <Typography>Patient</Typography>
              </Button>
            </NavLink>
          </Grid>
        </Grid>
        <hr />
        <Switch>
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default LandingPage;
