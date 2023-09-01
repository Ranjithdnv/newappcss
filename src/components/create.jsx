import React, {useState,useContext} from 'react'
import axios from 'axios'
import { CountContext } from "../context";

function Create () {
  const Contexts = useContext(CountContext)
    const[category,setcategory]=useState("")
    const[text,settext]=useState("")
    const[postdata,setpostdata]=useState([])
    const[filename,setfilename]=useState([])
    const[uploadchange,setuploadchange]=useState(false)
    const submit=()=>{

    }
    const [file, setFile] = useState()
  const upload = async() => {
    setuploadchange(true)
    const formData = new FormData()
    formData.append('file', file)
    await axios.post('http://localhost:3001/upload',formData ,{text:text})  //   https://bigserver.onrender.com/upload
    .then(( res)=>{ console.log(res.data)
     
      console.log(0)
    setfilename([ ...filename,res.data])})
    .catch(er => console.log(er))
    setuploadchange(false)
  }
  
  const filenames=[...filename]
//   console.log(filenames.pop())
  const uploaddata = async() => {

    const data = {  ...Contexts.us,desc:text,img:filename[filename.length*1-1],category:category}
    console.log(data)
   setpostdata([...postdata,data])
   await  axios.post('http://localhost:3001/',data)
    .then(( res)=>{ console.log(res.data)
   })
    .catch(er => console.log(er))
  }
  const uss= Contexts.us
   const data = {  ...uss,desc:text,img:filename[filename.length*1-1]}
  
  // console.log(data)
  return (<>
    <div className='create-box'> <div className=' create-innerbox'>
        <form className=' create-innerbox' action="">
           <div><img src="" alt="" />
</div> 
<div> 
    <input type="text" value={text} placeholder='describe' onChange={(e)=>{settext(e.target.value)}}/>
   
</div>
<div> <input  type="text"placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}}/></div>
<div>  <button className='link' onClick={uploaddata}>postme</button></div> 
<div><label htmlFor="fileupload"><div className='label shadow'>add file</div></label></div>

<div><div className='remove'> <input className='link' id ="fileupload" type="file" onChange={(e) => setFile(e.target.files[0])}/>

</div>
    
   {  uploadchange?(<div className='link'>uploading..</div>):(<button type="button" className='link' onClick={upload}>Upload</button>)}
   </div>
</form>
</div>
    </div>
     
   </>
  )
}
export default Create