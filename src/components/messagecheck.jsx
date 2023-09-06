import React, { useContext, usestate } from "react";
import { CountContext } from "../context";
import "./stylees.css";
function Messagecheck({ m }) {
  const Contexts = useContext(CountContext);
  // console.log(m.mid === Contexts.us.userid);
  return (
    <div>
      {/* messagecheck */}
      <div className={m.mid === Contexts.us.userid ? "first" : "last"}>
        <div>
          {/* <div>{m.mname}</div> */}
          <span>{m.message}</span>
        </div>
      </div>
    </div>
  );
}
export default Messagecheck;
