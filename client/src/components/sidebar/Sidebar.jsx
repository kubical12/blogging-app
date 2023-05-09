import React from 'react'
import {useState , useEffect} from "react";
import { FaFacebookSquare , FaLinkedin ,FaTwitter ,FaInstagramSquare , FaSearch} from 'react-icons/fa'
import {Link} from "react-router-dom";
import axios  from 'axios';
import './Sidebar.css'
const Sidebar = () => {
  const[cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async() => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    }
    getCats();
  }, [])
  return (
    <div className='sidebar'>
      <div clasName="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti dolor similique provident reiciendis obcaecati expedita? Perspiciatis distinctio vitae similique cum dolorum atque consectetur, ab sunt quae animi consequuntur voluptas, incidunt praesentium corrupti nesciunt nostrum sed neque excepturi sequi quia.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
              {cats.map((c) => (
                <Link to={`/?cat=${c.name}`}className="link">
                  <li className="sidebarListItem">
                  {c.name}
              </li>
              </Link>
              ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">Follow us </div>
        <div className="sidebarSocial">
            <div className="sidebarIcon">
           <FaFacebookSquare/><FaLinkedin/><FaTwitter/><FaInstagramSquare/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
