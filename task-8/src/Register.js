import React from 'react'
import NavBar from './NavBar'

function Register() {
  return (
    <div>
        <NavBar/>
        <div className='m-5 p-4 '>
    <h1 className='mx-5 text-dark'><u>Register</u></h1>
      <div className='row'>
    <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="fname" class="form-label text-dark">Frist Name:</label>
  <input type="text" class="form-control" id="fname" placeholder="Enter Frist Name" name="email" required/>
</div>
<div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="lname" class="form-label text-dark">Last Name:</label>
  <input type="text" class="form-control" id="lname" placeholder="Enter Last name" name="email" required/>
</div>
<div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="email" class="form-label text-dark">Email:</label>
  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
</div>
</div>
<div className='row'>
<div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="Phone" class="form-label text-dark">Phone No:</label>
  <input type="text" class="form-control" id="Phone" placeholder="Enter Phone No" name="email" required/>
</div>
<div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="pwd" class="form-label text-dark">Password:</label>
  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
</div>
<div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label for="cpwd" class="form-label text-dark">Confirm Password:</label>
  <input type="password" class="form-control" id="rpwd" placeholder="Enter Confirm password" name="pswd" required/>
</div>
</div>
  <button type="submit" class="btn btn-dark   mt-3 px-3">Register</button>
    </div>
    </div>
  )
}

export default Register