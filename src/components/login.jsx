import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./stylees.css";
import { CountContext } from "../context";
import axios from "axios";
function Login() {
  const Contexts = useContext(CountContext);
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");
  const accountcreate = () => {
    // Contexts.user({ ...Contexts.us, userid: text1 });
    // console.log(Contexts.us);
    axios
      .post(" https://bigserver.onrender.com/login", {
        userId: text1,
        password: text2,
      }) //   https://bigserver.onrender.com/upload
      .then((res) => {
        console.log(res.data.user1.user._id);
        console.log(res.data.token);

        localStorage.setItem("token", res.data.token);
        // console.log(localStorage.getItem("token"));
        Contexts.user({
          ...Contexts.us,
          userid: res.data.user1.user._id,
          username: text3,
        });
      })
      .catch((er) => console.log(er));
  };
  return (
    <div className="login">
      <div className="log-log">
        <div className="Name-owner">{Contexts.us.username}</div>
        <div className="login-input">
          {" "}
          <input
            placeholder="Id"
            type="text"
            value={text1}
            onChange={(e) => {
              settext1(e.target.value);
            }}
          />
        </div>
        <div className="login-input">
          {" "}
          <input
            type="text"
            placeholder="Password"
            value={text2}
            onChange={(e) => {
              settext2(e.target.value);
            }}
          />
        </div>
        <div className="login-input">
          {" "}
          <input
            placeholder="Enter Name"
            type="text"
            value={text3}
            onChange={(e) => {
              settext3(e.target.value);
            }}
          />
        </div>
        <div className="login-input">
          <button onClick={accountcreate}>login</button>
        </div>
        <div className="login-input">
          <Link to="/signup">create account</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
