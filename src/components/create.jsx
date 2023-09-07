import React, { useState, useContext } from "react";
import axios from "axios";
import { CountContext } from "../context";

function Create() {
  const Contexts = useContext(CountContext);
  const [category, setcategory] = useState("");
  const [messagetext, setmessagetext] = useState("");
  const [text, settext] = useState("");
  const [postdata, setpostdata] = useState([]);
  const [filename, setfilename] = useState([]);
  const [uploadchange, setuploadchange] = useState(false);
  const submit = () => {};
  const [file, setFile] = useState();
  const upload = async () => {
    setuploadchange(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("https://zzsocapi.onrender.com/upload", formData, { text: text })
      .then((res) => {
        console.log(res.data); //   https://bigserver.onrender.com/upload

        console.log(0);
        setfilename([...filename, res.data]);
      })
      .catch((er) => console.log(er));
    setuploadchange(false);
  };

  const filenames = [...filename];
  //   console.log(filenames.pop())
  const uploaddata = async (event) => {
    event.preventDefault();
    await axios
      .post("https://bigserver.onrender.com/postmessage", {
        userid: Contexts.us.userid,
      })
      .then(async (res) => {
        console.log(res.data.post._id);
        // Contexts.user({ ...Contexts.us, message: res.data.post._id });
        // setmessagetext(res.data.post._id);
        const data = {
          ...Contexts.us,
          desc: text,
          img: filename[filename.length * 1 - 1],
          category: category,
          conversation: res.data.post._id,
          message: res.data.post._id,
        };
        console.log(data);
        setpostdata([...postdata, data]);
        await axios
          .post("https://bigserver.onrender.com/", data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((er) => console.log(er));
      })
      .catch((er) => console.log(er));
    console.log(messagetext);
    // const data = {
    //   ...Contexts.us,
    //   desc: text,
    //   img: filename[filename.length * 1 - 1],
    //   category: category,
    //   conversation: messagetext,
    // };
    // console.log(data);
    // setpostdata([...postdata, data]);
    // await axios
    //   .post("https://bigserver.onrender.com/", data)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((er) => console.log(er));
  };
  console.log(postdata);
  //
  const checkm = async (event) => {
    event.preventDefault();
    // const data = {
    //   ...Contexts.us,
    //   desc: text,
    //   img: filename[filename.length * 1 - 1],
    //   category: category,
    // };
    // console.log(data);
    // setpostdata([...postdata, data]);
    await axios
      .post("https://bigserver.onrender.com/postmessage")
      .then((res) => {
        console.log(res.data.post._id);
      })
      .catch((er) => console.log(er));
  };
  //
  // const checkm = async (event) => {
  //   event.preventDefault();
  //   // const data = {
  //   //   ...Contexts.us,
  //   //   desc: text,
  //   //   img: filename[filename.length * 1 - 1],
  //   //   category: category,
  //   // };
  //   // console.log(data);
  //   // setpostdata([...postdata, data]);
  //   await axios
  //     .get("http://localhost:3001/postmessagesearch/64f4908a1bdcf4a5e6303639")
  //     .then((res) => {
  //       console.log(res.data.post._id);
  //     })
  //     .catch((er) => console.log(er));
  // };
  //
  const uss = Contexts.us;
  const data = { ...uss, desc: text, img: filename[filename.length * 1 - 1] };

  // console.log(data)
  return (
    <>
      {/* <div className="create-box"> */}{" "}
      <div className=" create-innerbox">
        <form className=" create-innerbox" action="">
          {/* <div>
            <img src="" alt="" />
          </div> */}
          <input
            type="text"
            value={text}
            placeholder="describe"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <button className="link" onClick={uploaddata}>
            postme
          </button>{" "}
          <input
            className="no-display"
            id="fileupload"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {uploadchange ? (
            <div className="link">uploading..</div>
          ) : (
            <button type="button" className="link" onClick={upload}>
              Upload
            </button>
          )}
          {/* </div> */}
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
export default Create;
