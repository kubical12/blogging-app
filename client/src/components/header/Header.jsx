import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>REact</span>
        <span className='headerTitleLg'>node</span>
      </div>
      <img className='headerImg' src="https://images.pexels.com/photos/2344013/pexels-photo-2344013.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  )
}

export default Header
