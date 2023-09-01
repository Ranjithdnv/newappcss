import React,{useContext, useEffect} from 'react'
import { CountContext } from "../context";
function Messagechat  ()  {
    const Contexts = useContext(CountContext)
    useEffect(()=>{


    })

  return (
    <div className='mc-contain' >
<div className='mc-box'></div><div className='mc-box'></div><div className='mc-box'></div><div className='mc-box'></div><div className='mc-box'></div><div className='mc-box'></div>
        <div className='mc-box'></div>
    </div>
  )
}
export default Messagechat