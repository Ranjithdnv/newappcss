import React ,{useState}from 'react'
import "../App.css"
import axios from 'axios'
function Signup  ()  {
  const[text1,settext1]=useState("")
  const[text2,settext2]=useState("")
  const accountcreate =()=>{
    axios.post('http://localhost:3001/signup',{userId:text1,password:text2})  //   https://bigserver.onrender.com/upload
    .then(( res)=>{ console.log(res.data)
  })
    .catch(er => console.log(er))
  }
  return (
    <div className='login'>

<div className='login-input'> <input type="text" value={text1} onChange={(e)=>{settext1(e.target.value)}}/></div>
<div  className='login-input'> <input type="text" value={text2} onChange={(e)=>{settext2(e.target.value)}}/></div> 
<div><button onClick={accountcreate}>signup</button></div>
    
    </div>
  )
}
export default Signup