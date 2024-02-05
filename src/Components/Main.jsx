import {useContext} from 'react'
import boulder from "../images/boulder.jpeg"
import top from "../images/top.jpg"

import {Them} from "./ThemeContext"  
const Main = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo} content`} >
        <div>
          <div>
            <h1>Bouldering</h1>
            Bouldering is pretty much what it sounds like - it's a type of climbing that takes place on boulders, rather than on crags or cliffs.Many climbers believe bouldering is the "purest" form of the sport as anyone with shoes can jump onto a boulder "problem" without the need for belayers and protection.This also means it's a great place for people to start climbing as it needs very little gear or expertise. The world of climbing can be split up into roped and unroped disciplines. Unlike trad and sport climbing, boulderers eschew the use of a rope, relying solely on proper falling technique, spotters, and the use of mattress-like cushions, aptly known as "crash pads" to protect them from the ground.In bouldering, every falling climber hits the ground.</div>
          <img src={boulder} alt=""/>
        </div>
        <div>
          <img src={top} alt=""/>
          <div>
            <h1>Top Rope Climbing</h1>
            If you're new to climbing, chances are you'll start your life in the vertical world on a top rope climb. When top roping, the climbing rope is attached to an “anchor” at the top of the climb, which is designed to catch a climber's fall, should they slip.This is different from lead climbing, wherein the lead climber starts with the rope at the bottom of a route and clips it into protection as they move upwards.Top roping is significantly less risky than leading because any falls that may happen are usually small and unlikely to cause serious injury when caught by a properly trained belayer.Lead climbing falls, on the other hand, can be very violent, particularly on poorly protected routes with lots of ledges. Many climbers learn the ropes literally while top roping, either at a gym or outside until they feel confident enough in their skills to learn to lead.
          </div>        
        </div>      
    </div>
  )
}

export default Main