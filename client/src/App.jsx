import { useContext, useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Post from './components/post/Post'
import SinglePost from './components/singlepost/SinglePost'
import { Context } from './context/Context'
function App() {
  const [count, setCount] = useState(0)

  const {user} = useContext(Context);
  return (
        <Router>
          <Topbar/>
            <Routes>
              <Route index path="/"  element={<Home/>}  />
              <Route path="/register" element={ user ? <Home/> :<Register/>} />
              <Route path='/login' element={ user ?<Home/> : <Login/>}/>
              <Route path='/write' element={user ?<Write/> : <Register/>}/>
              <Route path='/Settings' element={user ? <Settings/> : <Login/>}/>
              <Route path='/Post/:PostId' element={<Single/>}/>
            </Routes>
        </Router>
    
  )
}

export default App
