import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./message.css";
import { CountContext } from "../context";

function Messages({ chatss }) {
  const Contexts = useContext(CountContext);
  const [chat, setchat] = useState([]);
  const [Four, setFour] = useState([
    "sports",
    "start_up",
    "pay for work",
    "find-bussiness-partner",
    "not-in-youtube",
    "donate",
  ]);
  //   const upload = () => {
  //     const formData = new FormData()
  //     formData.append('file', file)
  //     axios.post('http://localhost:3001/upload',formData )
  //     .then( res => {})
  //     .catch(er => console.log(er))
  //   }
  const getpostsfilter = async (e) => {
    e.preventDefault();
    try {
      // console.log(chatss)
      const res = await axios.post(
        "https://bigserver.onrender.com/filter",
        Contexts.us
      ); //   https://bigserver.onrender.com/
      console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fourselect = async (value) => {
    console.log({ ...Contexts.us, ...value });
    try {
      const res = await axios.post("https://bigserver.onrender.com/filter", {
        ...Contexts.us,
        ...value,
      }); //   https://bigserver.onrender.com/
      console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //   https://bigserver.onrender.com/
    const getposts = async () => {
      try {
        const res = await axios.get("https://bigserver.onrender.com/", {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token") || null}`,
          },
        });
        console.log(res.data);
        setchat(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getposts();
    // const getpostsfilter = async () => {
    //   try {
    //     const res = await axios.post("http://localhost:3001/filter",{desc:"king"});//   https://bigserver.onrender.com/
    //     console.log(res.data);
    //     // setchat(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getpostsfilter();
    console.log(chat);
  }, [Contexts.us.category]);
  const navi = useNavigate();
  const cllick = (chat) => {
    Contexts.user({ a: "b", messenger: chat?._id });
    navi("/chatwithpost");
  };
  const messagechat = async (value) => {
    console.log({ ...Contexts.us, ...value });
    console.log(value);
    Contexts.user({ ...Contexts.us, ...value });
    // let obj = JSON.stringify(Contexts.us);

    navi("/messagechat");
  };
  // console.log((chat[3].img).split(".")[1])
  console.log(0);
  console.log(chat[20]);
  return (
    <>
      <div className="fourtop">
        {" "}
        <div className="four">
          {Four.map((fours, index) => (
            <button key={index} onClick={() => fourselect({ category: fours })}>
              {fours}
            </button>
          ))}
        </div>{" "}
      </div>
      <div className="filter-create">
        {" "}
        <div>
          {" "}
          <button onClick={getpostsfilter}>filter</button>{" "}
        </div>
        <div>
          {" "}
          <Link to="/create " className="taggs">
            {" "}
            <div>create</div>
          </Link>{" "}
        </div>{" "}
      </div>
      {/* <div>
       <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>
     </div>                 //       `https://bigserver.onrender.com/images/${chat.img}` */}
      <div className="im-age-container">
        {chat?.map((chat, index) => (
          <div
            onClick={() => messagechat({ messageid_: chat.conversation })}
            key={index}
          >
            {" "}
            {chat.img?.split(".")[1] === "jpg" ||
            chat.img?.split(".")[1] === "png" ? (
              <div onClick={() => cllick(chat)} className="imagedesc">
                <img
                  className="imagedesc"
                  src={
                    //"https://zzsocapi.onrender.com/images/1694067416061_swim.jpg"
                    `https://zzsocapi.onrender.com/images/${chat.img}`
                  }
                  alt=""
                />
              </div>
            ) : (
              <div>
                <video
                  className="appvideo"
                  controls
                  loop
                  src={`https://zzsocapi.onrender.com/images/${chat.img}`}
                />{" "}
              </div>
            )}
            <div className="video-text">{chat.desc}</div>
          </div>
        ))}
        {/* <img src="http://localhost:3001/images/1693043656945_splash.jpg" height="100px" width="20px" alt="" />
    <div>messages</div> */}
      </div>{" "}
    </>
  );
}

export default Messages;
