import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
// import Posts from '../../posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import {useLocation}   from "react-router-dom";
import './Home.css';
const Home = () => {
  const[posts, setPosts] = useState([]);
  const { search }  = useLocation();
  useEffect(() => {
    const fetchPost = async () => {
    const res = await axios.get("http://localhost:5000/api/posts" +search)
    setPosts(res.data)
    console.log(res);
    }
    fetchPost();
  } , [search])
  return (
    <>
      <Header/>
    <div className='home'>
     <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home
