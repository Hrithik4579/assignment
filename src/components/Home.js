import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
    <h3 id="welcome"><u>What are your goals?</u></h3>
    <div className="form-check" id="first">
    <label className="form-check-label" for="flexCheckDefault" id="weight">
    Weight Loss
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  <div className="tick">
  <div className="form-check" id='sec'>
    <label className="form-check-label" for="flexCheckDefault" id="muscle">
    Muscle Gain
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  </div>
  <div className="tick">
  <div className="form-check" id='third'>
    <label className="form-check-label" for="flexCheckDefault" id="flex">
    Flexibilty and Mobility
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  </div>
  <div className="tick">
  <div className="form-check" id='fourth'>
    <label className="form-check-label" for="flexCheckDefault" id="general">
    General Fitness
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  </div>
  <div className='tick'>
  <div className="form-check" id='fifth'>
    <label className="form-check-label" for="flexCheckDefault" id="event">
    Event-specific training
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  </div>
  <div className='tick'>
  <div className="form-check" id='sixth'>
    <label className="form-check-label" for="flexCheckDefault" id="mind">
        Mindfulness and Mental Health
  </label>
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  </div>
  </div>
  <div className='button'>
    <Link to='/track' className='confirm'>Confirm</Link>
  </div>
    </div>
  )
}
