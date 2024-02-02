import {useContext} from 'react'
import {Them} from "./ThemeContext"  
    
const Header = () => {
  const val = useContext(Them)
  return (
    <div>Header</div>
  )
}

export default Header