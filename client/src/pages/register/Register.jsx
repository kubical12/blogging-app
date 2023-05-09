import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import './register.css'
const Register = () => {
  const [ username , setUsername] = useState("");
  const [email , setEmail] = useState('');
  const[password , setPassword] = useState("");
  const [error , setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
      const response = await axios.post("http://localhost:5000/api/auth/register" , {
      username,
      email,
      password,
    });
    response.data && window.location.replace("/login");
    console.log(response);
    } catch(err){
      setError(true);
    }    
  };

  return (
    
    <div>
       <div className='login'>
      <span className="loginTitle">
        Register
      </span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" className='loginInput' placeholder='Enter your email ....' onChange={e=> setUsername(e.target.value)} />
        <label htmlFor="">email</label>
        <input type="text" className='loginInput' placeholder='Enter your username....' onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="">password</label>
        <input type="text" className='loginInput' placeholder='Enter your password ....' onChange={e=> setPassword(e.target.value)}/>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton" type='submit'>
          <Link to="/login" className='link' >Login</Link>
        </button>

       {error && <span style={{color:"red",marginTop:"10px"} }>something went wrong !</span>}
    </div>
    </div>
  )
}

export default Register
