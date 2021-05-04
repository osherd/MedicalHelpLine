import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundColor: "#eceff1",
    width: 600,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userData = { user, password };
  const fetchUser = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => setisAuthenticated(data));
  };
  return (
    <div className="App">
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="User"
                  name="user"
                  size="small"
                  variant="outlined"
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              type="submit"
              variant="outlined"
              onClick={fetchUser}
            >
              Log in
            </Button>
          </Grid>
          <h1>
            {isAuthenticated ? "he is authenticated" : "he is not athenticated"}
          </h1>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
