import React, { useContext } from 'react'
import './Topbar.css'
import {Link}  from "react-router-dom"
import { FaFacebookSquare , FaLinkedin ,FaTwitter ,FaInstagramSquare , FaSearch} from 'react-icons/fa'
import { Context } from '../../context/Context'
const Topbar = () => {
  const {user , dispatch} = useContext(Context);
  const handleLogout =() => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <div className='topIcon'>
           <FaFacebookSquare/><FaLinkedin/><FaTwitter/><FaInstagramSquare/>
        </div>
      </div>
      <div className="topcenter">
        <ul className='topList'>
          <li className="topListItem">
            <Link to="/" className='link'>Home</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className='link'>about</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className='link'>Contact</Link>
            
          </li>
          <li className="topListItem">
          <Link to="/write" className='link'>Write</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          {/* <Link to="/" className='link'>Logout</Link> */}
            
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src={user.profilePic} alt="" className="topImg" />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
           <Link to="/login" className='link'>Login</Link> 
              </li>
              <li className='topListItem'>
           {/* <Link to="/login" className='link'>Login</Link>  */}
           <Link to="/register" className='link'>Register</Link> 
              </li>
            </ul>
            
          )
        }
        <div className='topSearchIcon'>
        <FaSearch/>
        </div>
      </div>
    </div>
  )
}

export default Topbar
  