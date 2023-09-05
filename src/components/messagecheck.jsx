import React, { useContext, usestate } from "react";
import { CountContext } from "../context";
import "./stylees.css";
function Messagecheck({ m }) {
  const Contexts = useContext(CountContext);
  console.log(m.mid === Contexts.us.userid);
  return (
    <div className="main-message-background-check">
      {/* messagecheck */}
      <div className={m.mid === Contexts.us.userid ? "first" : "last"}>
        <div className="main-message-background">
          <div>{m.mname}</div>
          <div>{m.message}</div>
        </div>
      </div>
    </div>
  );
}
export default Messagecheck;
