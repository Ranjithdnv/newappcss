import React, { useContext, useState } from "react";
import "./home.css";
import Messages from "./messages";
import Detailsof from "./detailsof";
import { CountContext } from "../context";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  const Contexts = useContext(CountContext);
  const [info, setinfo] = useState(false);
  const [compo, setcompo] = useState(false);
  const [Detail, setDetail] = useState(true);
  const [World, setWorld] = useState(false);
  // // const [Four ,setFour]=useState(["sports","start_up","pay for work","find-bussiness-partner"])
  // const [district ,setdistrict]=useState(false)
  // const [chatss ,setchatss]=useState([])
  // const [category ,setcategory]=useState(false)
  // const array = {category: ["sports","education","bussiness"],name:["d","e",'f'],country:["india","pak","bangladesh","srilanka"]}
  //  console.log(Contexts.us)
  // Contexts.user({a:"b"})
  // console.log(array.category)
  // console.log(World)
  // console.log(district)
  const func = () => {
    setWorld((prev) => !prev);
    // const Statez={country:"india"}
    // Contexts.user(Statez)
  };
  const setchats = (data) => {
    setchats(data);
    console.log(data);
  };
  useEffect(() => {
    //  let userdata=JSON.parse(localStorage.getItem("userdata"))
    //  console.log(userdata)
    //  console.log(userdata.country)
    // Contexts.user(userdata)
    //  Contexts.user(userdata)
    //  console.log(userdata)
    let obj = JSON.stringify(Contexts.us);
    localStorage.setItem("userdata", obj);
    // console.log(JSON.parse(localStorage.getItem("userdata")))
    //  console.log(Contexts.us)
    setinfo(Contexts.us);
  });
  const Details = (value) => {
    // setDetail(!Detail);
    setcompo(value);
  };

  return (
    <div className="main-box">
      <div className="header-home">
        <div className="head-motive">
          {" "}
          <div className="motive-animation"> motive </div>{" "}
        </div>
        <div>
          {" "}
          <Link className="taggs" to="/login">
            account
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div className="newbiee">
            <div className="newbie" onClick={() => Details(0)}>
              {" "}
              {info.country}
            </div>
            <div className="newbie" onClick={() => Details(1)}>
              {info.state}
            </div>
            <div className="newbie" onClick={() => Details(2)}>
              {info.district}
            </div>
            <div className="newbie" onClick={() => Details(3)}>
              {info.mandal}
            </div>
            <div className="newbie" onClick={() => Details(4)}>
              {info.village}
            </div>
            <div className="newbie" onClick={() => Details(5)}>
              {info.sub_village}
            </div>
            {/* <div onClick={()=>Details(6)}>{info.category}</div>  */}
          </div>
          <div>
            {Detail && (
              <Detailsof compo={compo} setchats={setchats} num="country" />
            )}
          </div>

          {/* <div className="select"onClick={func}>world</div>
    <div className="select" >
    
       {World?(<>{array.country.map((arr,index)=>(<div key={index} onClick= {()=> setdistrict(!district)}>{arr}</div>))}</>):(null)}
        </div>
       { World&district?(<><div onClick= {()=> setState(!State)}>ap</div><div>mumbai</div></>):null}
        <div>{State?(<><div  onClick= {()=> settown(!town)}>bhimavaram</div> <div>tirupati</div></>):null}</div>
        <div>{town?(<><div >towns</div> <div>villages</div></>):null}</div>
    <div className="categorry" onClick={()=>setcategory(!category)}>
    {category? (<>
    {array.category.map((arr,index)=>(<div key={index}>{arr}</div>))}
    </>):"category"}  
    </div> */}
        </div>
        <div>
          <div>
            {/* <div className="four">four */}
            {/* {Four.map((fours)=>(<><button onClick={()=> fourselect({country:fours})}>{fours}</button></>))} */}
            {/* </div>  */}
            {/* <Link className="create link"  to="/create "> <div className="create link" >create</div></Link> */}
          </div>
          {/* <div className="messages-four">four</div> */}
          <div>
            <Messages />
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}
export default Home;
