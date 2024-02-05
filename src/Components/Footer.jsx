import {useContext} from 'react'
import {Them} from "./ThemeContext"  
const Footer = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo} flexy foot`}>
      <div>Contact: Themo@gmail.com</div>
      <div>Themo Copyright. All Rights Reserved.</div>
  
    </div>
  )
}

export default Footer