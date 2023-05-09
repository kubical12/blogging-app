import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import {FaUserAlt} from 'react-icons/fa'
import './Settings.css'
const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form action="">
            <div className="settingForm">
                <label htmlFor="">profile picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/1196338/pexels-photo-1196338.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <label htmlFor="fileInput">
                        <div className="settingsPPIcon">
                            <FaUserAlt/>
                        </div>
                    </label>
                        <input type="file" id='fileInput' style={{display:'none'}}  />
                </div>
                <label>USername</label>
                <input type="text" placeholder='your name' />
                <label>Email</label>
                <input type="email" placeholder='your email' />
                <label>password</label>
                <input type="password" placeholder='your password' />
                <button className='settingsSubmit'>update</button>
            </div>
        </form>
      </div>
        <Sidebar/>
    </div>
  )
}

export default Settings
