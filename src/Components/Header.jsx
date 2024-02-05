import {useContext} from 'react'
import {Them} from "./ThemeContext"  
    
const Header = () => {
  const val = useContext(Them)
  return (
    <div className={`${val.themo} header`}>
      <h1>Welcome to a website</h1>
    </div>
  )
}

export default Header