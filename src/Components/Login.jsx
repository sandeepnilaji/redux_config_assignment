import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginerror, loginload, loginsucess } from "../Allredux/logIn/actions";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, isloading, iserror } = useSelector((state) => {
    return state.login;
  });
  const dispatch = useDispatch();

  async function userLogin() {
    dispatch(loginload());
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      dispatch(loginsucess(res.data.token));
    } catch (err) {
      dispatch(loginerror(err));
    }
  }

  return isloading ? (
    "Loading..."
  ) : iserror ? (
    "Error 404"
  ) : (
    <div>
      <div>Login to todo app</div>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={userLogin}>Login</button>
      <br />
      <div>
        <h1>{token}</h1>
      </div>
    </div>
  );
}

export default Login;
