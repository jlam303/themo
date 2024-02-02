import React from 'react'
import { useContext } from 'react'
import { Them } from './ThemeContext'
const Navbar = () => {
    const val = useContext(Them)
  return (
    
    <div className={val.themo}>
        <a href=""></a>
        <button onClick={()=>{val.handleThemo()}}>Change Theme</button>
    </div>
  )
}

export default Navbar