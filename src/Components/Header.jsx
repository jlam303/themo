import {useContext} from 'react'
import {Them} from "./ThemeContext"  
    
const Header = () => {
  const val = useContext(Them)
  return (
    <div className={`${val.themo}`}>Header</div>
  )
}

export default Header