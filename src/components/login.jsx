import React ,{useState}from 'react'
import {Link} from "react-router-dom"
import "../App.css"
import axios from 'axios'
function Login  ()  {
  const[text1,settext1]=useState("")
  const[text2,settext2]=useState("")
  const accountcreate =()=>{
    axios.post(' https://bigserver.onrender.com/login',{userId:text1,password:text2})  //   https://bigserver.onrender.com/upload
    .then(( res)=>{ console.log(res.data)
console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      console.log((localStorage.getItem("token")))
  })
    .catch(er => console.log(er))
  }
  return (
    <div className='login'>

<div className='login-input'> <input type="text" value={text1} onChange={(e)=>{settext1(e.target.value)}}/></div>
<div  className='login-input'> <input type="text" value={text2} onChange={(e)=>{settext2(e.target.value)}}/></div> 
<div><button onClick={accountcreate}>login</button></div>
<Link to="/signup">create account</Link>
    </div>
  )
}
export default Login