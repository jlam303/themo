import React from 'react'
import { useContext } from 'react'
import { Them,handleThemo } from './ThemeContext'
const Navbar = () => {
    const val = useContext(Them)
  return (
    
    <div className={val.themo}>
        <button onClick={()=>{val.handleThemo()}}>Change Theme</button>
    </div>
  )
}

export default Navbar