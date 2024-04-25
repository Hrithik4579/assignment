import React from 'react'
import image2 from './image2.jpeg'
import './pages.css'
import next from '../images.png'
import {Link} from 'react-router-dom'
export default function Welcome() {
  return (
    <div>
      <div className='container'>
        <img id="img2"src={image2} alt="Loading..." />
      </div>
      <div>
        <h3 id="burn"> Get Burn </h3>
        <p id="para1">Let’s keep burning to achieve your goals,<br></br> it hurts only temporarily, if you give up<br></br> now you will be in pain forever</p>
    <Link to="/signup">
        <img id="next" src={next} alt="loading..."/>
        </Link>  
        </div>   
    </div>
  )
}