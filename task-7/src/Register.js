import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import  login  from "./Login";


function Register() {
  const navigate =useNavigate();
  function gotologin(){
    navigate("/login")
  }
  return (
  <div className='m-5 p-4 border rounded-4 bg-secondary'>
      <h1 className='mx-5 text-light'><u>Register</u></h1>
      <form action="">
        <div className='row'>
      <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="fname" class="form-label text-light">Frist Name:</label>
    <input type="text" class="form-control" id="email" placeholder="Enter Frist Name" name="email" required/>
  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="lname" class="form-label text-light">Last Name:</label>
    <input type="text" class="form-control" id="email" placeholder="Enter Last name" name="email" required/>
  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="email" class="form-label text-light">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
  </div>
  </div>
  <div className='row'>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="Phone" class="form-label text-light">Phone No:</label>
    <input type="text" class="form-control" id="email" placeholder="Enter Phone No" name="email" required/>
  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="pwd" class="form-label text-light">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
    <label for="cpwd" class="form-label text-light">Confirm Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter Confirm password" name="pswd" required/>
  </div>
  </div>
    <button type="submit" class="btn btn-light mx-5 mt-3 px-3" onClick={gotologin}>Register</button>
      </form>

      <Routes>
        <Route path='/Login' element={login}/>
      </Routes>
      </div>
  )
}

export default Register