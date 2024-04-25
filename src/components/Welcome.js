import React from 'react'
import image1 from '../img1.jpeg'
import './pages.css'
import next from '../images.png'
import {Link} from 'react-router-dom'
export default function Welcome() {
  return (
    <div>
      <div className='container'>
        <img id="img1"src={image1} alt="Loading..." />
      </div>
      <div>
        <h3 id="goal"> Track Your Goal </h3>
        <p id="para1">Don’t worry if you have trouble<br></br>
            determining your goals, We can help you <br></br>
            determine your goals and track your goals</p>
    <Link to="/next">
        <img id="next" src={next} alt="loading..."/>
        </Link>  
        </div>   
    </div>
  )
}
