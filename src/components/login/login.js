import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");

  const onLogin = async () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(token);
    localStorage.setItem("token", token);
  }, [token]);

  // const onEmailInput = (event) => {
  //   setUserName(event.target.value);
  // };

  // const onPasswordInput = (event) => {
  //   setPassword(event.target.value);
  // };

  console.log(userName, password);

  return (
    <div className="login-form">
      <div className="login">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
              value={userName}
              onChange={(event)=>setUserName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>
          <button type="button" onClick={onLogin} className="btn btn-success">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
