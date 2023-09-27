import React from 'react'
import NavBar from './NavBar'
function Login() {
  return (
    <div>
        <NavBar/>
        <div className='m-5 p-4  '>
        <h1 className='mx-5 text-dark'><u>Log In</u></h1>
        <div class="mt-3">
            <label for="email" class="form-label text-dark">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
        </div>
        <div class="mt-3">
            <label for="pwd" class="form-label text-dark">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
        </div>
        <button type="submit" class="btn btn-dark mt-3 px-3 ">Login</button><br />
    </div>
    </div>
  )
}

export default Login