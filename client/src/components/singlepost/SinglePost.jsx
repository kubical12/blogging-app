import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom"
import { Context } from "../../context/Context"
import axios from "axios";
import './Singlepost.css'
import {FaEdit , FaTrash} from "react-icons/fa"
const SinglePost = () => {
    const [post ,setPost] = useState({});
    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/";
     const { user } = useContext(Context);
     const [title , setTitle] = useState("");
     const [desc , setDesc] = useState("");
     const[updateMode , SetUpdatMode] = useState(false);
    useEffect(() => {
        const getPost = async() => {
            const res =await axios.get("http://localhost:5000/api/posts/"  + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost()
    },[path]);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //             const response = await axios.get(`http://localhost:5000/api/posts${location.pathname}`) ;
    //             console.log(response);
            
    //     };
    //     fetchPosts();
    // }, [location.pathname]);

    const handleDelete = async () => {
        try{
            await axios.delete(`http://localhost:5000/api/posts/${post._id} `
            , {data:{username:user.username},
        })
            window.location.replace("/")
        } catch(err){

        }
    }
    console.log(post.username === user.username);

    const handleUpdate = async () => {
        try{
            await axios.put(`http://localhost:5000/api/posts/${post._id}` , {
                username:user.username,
                title,
                desc,
            })
            window.location.reload()
        } catch(err) {

        }
    }
  return (
    <div className='Singlepost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img src={PF + post.photo} className="singlePostImg" alt="" />
            )}{
                updateMode? (
                    <input type="text" value={title} className='singlePostTitleInput' autoFocus onChange={(e) => setTitle(e.target.value)}/>
                ) : (
                    <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && (
                         <div className="singlePostEdit">
                         <div className="singlepostIcon">
                         <FaEdit onClick={() => SetUpdatMode(true)}/>
                         <FaTrash onClick={handleDelete}/>
                         </div>                
                     </div>
                    )}
                   
                </h1>
                )
            }
        </div>
       
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`}className="link"/><b>{post.username}</b></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()} </span>
        </div>
        {updateMode ?  (
            <textarea className="singlePostDescInput" autoFocus value={desc} onChange={(e) => setDesc(e.target.value)} />
        ) : (
            <p className='singlePostDesc'>
            {post.desc}
        </p>
        )} {
            updateMode &&

                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            
        }
        
    </div>
  )
}

export default SinglePost
