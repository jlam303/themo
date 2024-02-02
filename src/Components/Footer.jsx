import {useContext} from 'react'
import {Them} from "./ThemeContext"  
const Footer = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo}`}>Footer</div>
  )
}

export default Footer