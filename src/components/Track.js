import React from 'react'
import gr from '../graph.jpeg'
export default function Track() {
  return (
    <div>
      <div className='head'>
        Workout Tracker
      </div>
      <div>
        <img id='gr1' src={gr} alt="loading..."/>
      </div>
      <div  id="alert" className="alert alert-primary" role="alert">
  You've burned fewer calories than yesterday. Time to get moving!
</div>
<div className='upcoming'>
    Upcoming Workout
</div>
<div className='switch'>
<div id='switch1' className="form-check form-switch">
<label className="form-check-label" for="flexSwitchCheckDefault">Full Body Workout</label>

  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
</div>
<div id='switch2' className="form-check form-switch">
<label className="form-check-label" for="flexSwitchCheckDefault">Upper Body Workout</label>

  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
</div>
</div>
<div className='train'> 
    What do you want to train?
</div>
    </div>
  )
}
