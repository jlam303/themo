import {useContext} from 'react'
import {Them} from "./ThemeContext"  
const Footer = () => {
    const val = useContext(Them)
  return (
    <div>Footer</div>
  )
}

export default Footer