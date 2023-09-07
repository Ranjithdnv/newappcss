import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import "./stylees.css";
// import React, { useState, useContext } from "react";
import axios from "axios";
import { CountContext } from "../context";
import Messagecheck from "./messagecheck";
function Messagechat() {
  const Contexts = useContext(CountContext);
  const textref = useRef("");
  const tobottomref = useRef("");
  // useEffect(() => {});
  // const [text, settext] = useState("");

  const [username, setUsername] = useState("");
  const [usernamess, setUsernamess] = useState("");
  const [user, setUser] = useState("");
  const [message, setmessage] = useState([]);
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const reftest = (e) => {
    console.log(textref.current.value);
    // textref.current = e.target.value;
  };

  useEffect(() => {
    tobottomref.current?.scrollIntoView();
    setSocket(io("https://sock-hepv.onrender.com"));
    //https://sock-hepv.onrender.com
    // chattyou();
  }, [message]);
  //
  useEffect(() => {
    const cham = async () => {
      await axios
        .get(
          "https://bigserver.onrender.com/postmessagesearch/" +
            Contexts.us.messageid_
        )
        .then((res) => {
          console.log(res.data.post.messages);
          setmessage(res.data.post.messages);
        })
        .catch((er) => console.log(er));
    };
    cham();
  }, []);

  const chattyou = async () => {
    // console.log(Contexts.us);
    // console.log(Contexts.us.message);
    // let obj = JSON.stringify(Contexts.us);
    // localStorage.setItem("userdata", obj);
    // console.log(Contexts.us);
    console.log(textref.current.value);
    await axios
      .put(
        "https://bigserver.onrender.com/postmessagesearch/" +
          Contexts.us.messageid_ +
          "/like",
        {
          message: textref.current.value,
          mname: Contexts.us.username,
          mid: Contexts.us.userid,
        } //https://bigserver.onrender.com/postmessagesearch
      )
      .then((res) => {
        console.log(res.data.messages);
        setmessage(res.data.messages);
      })
      .catch((er) => console.log(er));
  };

  //
  console.log(message);
  useEffect(() => {
    console.log(user !== null);
    if (user !== null) {
      socket?.emit("newUser", user);
    }
    console.log(user);
  }, [user]);

  const func = () => {
    console.log(Contexts.us.username);
    socket.emit("sendText", {
      message: textref.current.value,
      mname: Contexts.us.username,
      mid: Contexts.us.userid,
    });
  };

  useEffect(() => {
    socket?.on("getText", (data) => {
      // setNotifications((prev) => [...prev, data]);
      console.log(data);
      setmessage((prev) => [...prev, data]);
      console.log("worked");
    });
  }, [socket]);
  return (
    <div className="mc-contain">
      <div className="container">
        <div className="login">
          {/* <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="send to"
            onChange={(e) => setUsernamess(e.target.value)}
          /> */}
          {/* <input
            type="text"
            placeholder="text"
            onChange={(e) => settext(e.target.value)}
          /> */}
          {/* <button onClick={() => setUser(username)}>Login</button>
          <button onClick={func}>button</button> */}
          <div>
            {" "}
            {notifications?.map((n) => (
              <div>{n.text}</div>
            ))}
          </div>{" "}
          <div className="message-grow">
            {" "}
            {message?.map((m) => (
              <div className="main-message-background-check">
                {/* <div>{m.message}</div>
              <div>{m.mid}</div> 
              <div>{m.mname}</div> */}
                <Messagecheck m={m} />
              </div>
            ))}
          </div>
          <div className="send">
            <textarea
              className="area-text sendone"
              ref={textref}
              onChange={
                (e) => reftest(e)
                // (textref.current = e.target.value)
                // settext(e.target.value)
              }
              name=""
              id=""
              cols="5"
              rows="3"
            ></textarea>{" "}
            <button className="sendtwo" onClick={chattyou}>
              send
            </button>
            <div> </div>
          </div>
          <div ref={tobottomref} />
        </div>
      </div>
    </div>
  );
}
export default Messagechat;
