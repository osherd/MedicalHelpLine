import React, { useState } from "react";

const Login = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const userData = { user, pass };
  const fetchMeAUser = () => {
    fetch("http://localhost:3000/user", {
      method: "POST", // or 'PUT'
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
      <div>
        username
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>
      <div>
        password
        <input
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <button onClick={fetchMeAUser} className="button">
        Login
      </button>

      <h1>
        {isAuthenticated ? "he is authenticated" : "he is not athenticated"}
      </h1>
    </div>
  );
};
export default Login;
