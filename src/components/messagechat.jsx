import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
// import React, { useState, useContext } from "react";
import axios from "axios";
import { CountContext } from "../context";
function Messagechat() {
  const Contexts = useContext(CountContext);
  // useEffect(() => {});
  const [text, settext] = useState("");
  const [username, setUsername] = useState("");
  const [usernamess, setUsernamess] = useState("");
  const [user, setUser] = useState("");
  const [message, setmessage] = useState([]);
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setSocket(io("https://sock-hepv.onrender.com")); //https://sock-hepv.onrender.com
    // chattyou();
  }, []);
  //
  const chattyou = async () => {
    console.log(Contexts.us);
    console.log(Contexts.us.message);
    let obj = JSON.stringify(Contexts.us);
    localStorage.setItem("userdata", obj);
    console.log(Contexts.us);
    await axios
      .put(
        "https://bigserver.onrender.com/postmessagesearch/" +
          Contexts.us.messageid_ +
          "/like",
        {
          message: text,
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
    socket.emit("sendText", {
      senderName: user,
      receiverName: usernamess,
      text: text,
    });
  };

  useEffect(() => {
    socket?.on("getText", (data) => {
      setNotifications((prev) => [...prev, data]);
      console.log("worked");
    });
  }, [socket]);
  return (
    <div className="mc-contain">
      hh vvv
      <div className="container">
        <div className="login">
          <h2>Lama App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="send to"
            onChange={(e) => setUsernamess(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="text"
            onChange={(e) => settext(e.target.value)}
          /> */}

          <button onClick={() => setUser(username)}>Login</button>

          <button onClick={func}>button</button>
          <div>
            {" "}
            {notifications?.map((n) => (
              <div>{n.text}</div>
            ))}
          </div>
          {message?.map((m) => (
            <div>
              <div>{m.message}</div>
              <div>{m.mid}</div>
            </div>
          ))}
          <div>
            <textarea
              onChange={(e) => settext(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="2"
            ></textarea>
            <button onClick={chattyou}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messagechat;
