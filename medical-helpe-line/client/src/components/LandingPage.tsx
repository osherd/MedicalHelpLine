import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Login from "./LogIn";

const LandingPage: React.FC<any> = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div className="App">
      <img
        src="https://image.shutterstock.com/z/stock-vector-team-doctors-on-a-white-background-vector-illustration-in-flat-style-528761458.jpg"
        alt=""
        style={{ height: 150, width: 500 }}
      />
      <ButtonGroup
        style={{ height: 70, width: 1100, border: 5 }}
        fullWidth
        variant="contained"
        color="secondary"
      >
        <Button onClick={() => setIsShowForm(true)}>
          {isShowForm && <Login />}
          Admin Login
        </Button>
        <Button>User Login</Button>
        <Button>Patiant Login</Button>
      </ButtonGroup>
    </div>
  );
};
export default LandingPage;
