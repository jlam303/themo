import React from 'react'
import { useContext } from 'react'
import { Them } from './ThemeContext'
const Navbar = () => {
    const val = useContext(Them)
  return (
    
    <div className={`${val.themo} nav`}>
        <div>Rock Climbing</div>
        <button onClick={()=>{val.handleThemo()}} style={val.themo==="light"?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>Change Theme</button>
    </div>
  )
}

export default Navbar