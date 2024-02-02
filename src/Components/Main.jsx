import {useContext} from 'react'
// import pic from ""
import {Them} from "./ThemeContext"  
const Main = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo}`} >
        <div>C</div>
        <img src="" alt=""/>
    </div>
  )
}

export default Main