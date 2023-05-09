import React, { useContext, useState } from 'react'
import './Write.css'
import { FaPlusSquare } from 'react-icons/fa';
import axios from 'axios';
import { Context } from '../../context/Context';
const Write = () => {
  const [title , setTitle] = useState("");
  const [ desc, setDesc] = useState("");
  const[ file , setFile] = useState(null);
  const {user} = useContext(Context);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const  newPost ={
      username:user.username,
      title, 
      desc,
    };
    if(file){
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name" , filename);
      data.append("file" , file);
      newPost.photo = filename;
      try{
        await  axios.post("http://localhost:5000/api/upload" , data)
      } catch(err) {

      }
    }
     try{
    const res = await axios.post("http://localhost:5000/api/posts/" , newPost)
       window.location.replace("http://localhost:5000/api/posts/post/" +res.data._id)
     } catch(err){

     }
  }
  return (
    <div className='write'>
      {file && 
      
      <div className="writeImg">
        <img src={URL.createObjectURL(file)} alt="" />
      </div>
      }
      <form action="" className='writeForm' onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <div className="writeIcon">
                <FaPlusSquare/>
              </div>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=> setTitle
            (e.target.value)}/>

        </div>
        <div className="writeFormGroup">
          <textarea type="text" className='writeInput writeText' placeholder='tell your story' onChange={e=> setDesc(e.target.value)}></textarea>
        </div>
        <button className="writeSubmit" type='submit'>
          publish
        </button>
      </form>
    </div>
  )
}

export default Write
