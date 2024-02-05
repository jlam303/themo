import React from 'react'
import { useContext } from 'react'
import { Them } from './ThemeContext'
const Navbar = () => {
    const val = useContext(Them)
  return (
    
    <div className={`${val.themo} nav`}>
        <div>Rocko</div>
        <a href="#bould" className={`${val.themo}`}>Bouldering</a>
        <a href="#top" className={`${val.themo}`}>Top Rope</a>
        <a href="#trad" className={`${val.themo}`}>Trad</a>

        <button onClick={()=>{val.handleThemo()}} style={val.themo==="light"?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>Change Theme</button>
    </div>
  )
}

export default Navbar