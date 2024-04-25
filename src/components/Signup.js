import React from 'react'
import './pages.css'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div>
      <h3 id="create mb-7"><u>Create An Account</u></h3>
      <div>
      <form>
      <div className="form-group">
    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="First Name"/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">By proceeding, I agree to all T&C and Privacy Policy</label>
  </div>
</form>
<div className='craccount'>
<Link to="/login" className='log' style={{color:"white"}}>Create An Account</Link>
</div>
</div>
<hr className='line'></hr>
<i className="fa-brands fa-google" id="google"></i>
<i className="fa-brands fa-facebook" id="facebook"></i>
<div className='signin'>Already have an account? 
<Link to='/login'><u>Login</u></Link>
</div>
    </div>
  )
}
