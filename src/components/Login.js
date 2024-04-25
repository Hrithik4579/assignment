import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div>
       <h3 id="create"><u>Welcome Back</u></h3>
       <div className='mt-5' id='main'>
      <form>
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  </form>
  </div>
  <div className='siaccount'>
<Link to="/home" className='log'>Sign In</Link>
</div>
<hr className='line'></hr>
<i className="fa-brands fa-google" id="google"></i>
<i class="fa-brands fa-facebook" id="facebook"></i>
<div className='signin'>Don't have an account? 
<Link to='/signup'><u>Create an Account</u></Link>
</div>
    </div>
  )
}
