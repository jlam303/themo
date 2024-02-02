import {useContext} from 'react'
// import pic from ""
import {Them} from "./ThemeContext"  
const Main = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo}`} >
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet sequi odit dolore voluptatem eligendi modi, accusamus est nam harum placeat repudiandae esse quasi nostrum at inventore consequatur animi! Rerum?</div>
        <img src="" alt=""/>
    </div>
  )
}

export default Main