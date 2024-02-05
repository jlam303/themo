import {useContext} from 'react'
import boulder from "../images/boulder.jpeg"
import top from "../images/top.jpg"
import trad from "../images/trad.jpg"

import {Them} from "./ThemeContext"  
const Main = () => {
    const val = useContext(Them)
  return (
    <div className={`${val.themo} content`} >
        <div id='bould'>
          <div>
            <h1>Bouldering</h1>
            Bouldering is pretty much what it sounds like - it's a type of climbing that takes place on boulders, rather than on crags or cliffs.Many climbers believe bouldering is the "purest" form of the sport as anyone with shoes can jump onto a boulder "problem" without the need for belayers and protection.This also means it's a great place for people to start climbing as it needs very little gear or expertise. The world of climbing can be split up into roped and unroped disciplines. Unlike trad and sport climbing, boulderers eschew the use of a rope, relying solely on proper falling technique, spotters, and the use of mattress-like cushions, aptly known as "crash pads" to protect them from the ground.In bouldering, every falling climber hits the ground.</div>
          <img src={boulder} alt=""/>
        </div>
        <div id='top'>
          <img src={top} alt=""/>
          <div>
            <h1>Top Rope Climbing</h1>
            If you're new to climbing, chances are you'll start your life in the vertical world on a top rope climb. When top roping, the climbing rope is attached to an “anchor” at the top of the climb, which is designed to catch a climber's fall, should they slip.This is different from lead climbing, wherein the lead climber starts with the rope at the bottom of a route and clips it into protection as they move upwards.Top roping is significantly less risky than leading because any falls that may happen are usually small and unlikely to cause serious injury when caught by a properly trained belayer.Lead climbing falls, on the other hand, can be very violent, particularly on poorly protected routes with lots of ledges. Many climbers learn the ropes literally while top roping, either at a gym or outside until they feel confident enough in their skills to learn to lead.
          </div>        
        </div>  
        <div>
          <div id='trad'>
            <h1>Traditional Climbing</h1>
            Traditional, or trad climbing, as it's affectionately known, is essentially the original kind of climbing.Part adventure, part sport, a trad climber places and removes all of the gear that they need to protect themselves on the rock.Traditional climbing protection generally involves gear such as cams (spring-loaded camming devices, or SLCDs), nuts/chocks, hexes, and tricams, which a climber must place into cracks and other features in the rock to protect themselves in the event of a fall.Traditional climbing is often thought of as an environmentally ethical form of climbing because trad climbers try not to leave any gear behind in the rock.
            But, it's important to note that the first trad climbers left behind innumerable pieces of “fixed” protection, such as pitons, which were placed while climbing but not removed.These days, most trad climbers adhere to the “clean climbing” ethics espoused by Patagonia founder Yvon Chouinard and climbing great Royal Robbins, which means that protection is removed from the rock wherever possible.
          </div>
          <img src={trad} alt=""/>
        </div>    
    </div>
  )
}

export default Main