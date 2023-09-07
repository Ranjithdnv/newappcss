import React, { useContext } from "react";
import { CountContext } from "../context";
function Detailsof({ compo = 0, num, setchats }) {
  const Contexts = useContext(CountContext);
  const states = ["ap", "tamilnadu", "odisa", "bangalore", "karnataka"];
  const country = ["india", "paki", "bangladesh", "srilanka", "nepal"];
  const village = [
    "Chinamiram",
    "Anakoderu",
    "rayalam",
    " Losarigutlapadu",
    "Annavaram",
  ];
  const mandal = [
    "Narasapuram",
    "Palakollu",
    "Tadepalligudem",
    "Tanuku",
    "Bhimavaram",
  ];
  const district = [
    "west_godavari",
    "Prakasam",
    "east_godavari",
    "krishna",
    "nellore",
    "Dr. B. R. Ambedkar Konaseema",
    "Bapatla",
    "Eluru",
    "Rayalaseema",
    "Srikakulam",
    "Parvathipuram Manyam",
    "Kakinada",
  ];
  const sub_village = [
    "vinayakapuram",
    "nagindrapuram",
    "deyalatipa",
    "mattagunta",
    "pathapadu",
  ];
  const category = ["sports", "education"];
  const array = [
    country,
    states,
    district,
    mandal,
    village,
    sub_village,
    category,
  ];

  const detailsupdate = (props) => {
    let value2 = {};
    if (compo === 0) {
      value2 = { country: props };
    }
    if (compo === 1) {
      value2 = { state: props };
    }

    if (compo === 2) {
      value2 = { district: props };
    }
    if (compo === 3) {
      value2 = { mandal: props };
    }
    if (compo === 4) {
      value2 = { village: props };
    }
    if (compo === 5) {
      value2 = { sub_village: props };
    }
    if (compo === 6) {
      value2 = { category: props };
    }
    Contexts.user({ ...Contexts.us, ...value2 });
    console.log(Contexts.us);
    //  const sett={country:Contexts.us.country,state:Contexts.us.state,
    //     // district:Contexts.us.district,mandal:Contexts.us.mandal,
    //     // village:Contexts.us.village,sub_village:Contexts.us.sub_village
    // // }
    //  console.log(sett)
    let obj = JSON.stringify(Contexts.us);
    localStorage.setItem("userdata", obj);
    console.log(JSON.parse(localStorage.getItem("userdata")));

    // setchats(Contexts.us)
    // JSON.parse(localStorage.getItem("user"))
    // let first=props[0]
    // const value2=props[1]
    // const arr=[country]
    // const arr={num}
    // console.log(arr)
    // console.log(value2.arr)
    // const Statez={first:"pak"}
    // Contexts.user(...Contexts,Statez)
    //         const value=`${first}`

    //         value2.country=value
    // console.log(value2)
    //console.log({...Contexts.us,...value2})
    //          Contexts.user({...Contexts.us,...value2})
  };
  return (
    <>
      {compo ? (
        <div className="selectplaces">
          {array[compo]?.map((details, index) => (
            <div
              key={index}
              className="selectplace"
              onClick={() => detailsupdate(`${details}`)}
            >
              {details}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="selectplaces">
            {array[0]?.map((details, index) => (
              <>
                <div
                  key={index}
                  className="selectplace"
                  onClick={() => detailsupdate(`${details}`)}
                >
                  {details}
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>

    // <div className="selectplaces">

    //   {array[compo]?.map((details) => (
    //     <>
    //       <div
    //         className="selectplace"
    //         onClick={() => detailsupdate(`${details}`)}
    //       >
    //         {details}
    //       </div>
    //     </>
    //   ))}
    // </div>
  );
}
export default Detailsof;
