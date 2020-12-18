import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  Grid,
  InputLabel,
  FormControl,
  Input,
} from "@material-ui/core";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //   const { userName, password } = event.target.value;
    //   setUserName(userName);
    //   setPassword(password);
    // };
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Adnin Login
      </Typography>

      <form noValidate onSubmit={handleSubmit}>
        <Grid item sm={3}>
          <FormControl fullWidth>
            <InputLabel shrink>user name</InputLabel>
            <Input
              autoComplete="off"
              autoFocus
              fullWidth
              id="user_Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
            />
          </FormControl>
        </Grid>
        <Grid item sm={3}>
          <FormControl fullWidth>
            <InputLabel shrink>password</InputLabel>
            <Input
              autoComplete="off"
              fullWidth
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </FormControl>
        </Grid>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};
export default Login;
