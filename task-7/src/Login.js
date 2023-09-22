import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate =useNavigate();
    function gotoreg(){
        navigate("/Main")
      }
    return (
    <form action="" className='m-5 p-4 border rounded-4 bg-secondary'>
        <h1 className='mx-5 text-light'><u>Log In</u></h1>
        <div class="mt-3">
            <label for="email" class="form-label text-light">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
        </div>
        <div class="mt-3">
            <label for="pwd" class="form-label text-light">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
        </div>
        <button type="submit" class="btn btn-light mx-5 mt-3 px-3 " onClick={gotoreg}>Login</button><br />
    </form>
  )
}

export default Login