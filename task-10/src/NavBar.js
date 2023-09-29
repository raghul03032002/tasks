import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import logo from './image/img2.png'
function NavBar() {
  return (
    <><div>
    <div className="container-fluid">
        <nav
        className="navbar navbar-expand-lg bg-light  px-4  fixed-top"
      >
      <div className="container-fluid">
        <h1 className="navbar-brand fs-2" id='logo'>Item Cart</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
            <li className="nav-item">
              <Link to="/"
                className="nav-link text-dark active "
                aria-current="page"
                >Home</Link >
            </li>
            <li className="nav-item ">
              <Link to="/ViewProject" className=" nav-link text-dark mx-2">ViewProject</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Login" className=" nav-link text-dark mx-2">Login</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Register" className=" nav-link text-dark mx-2">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </div>
  </div> 
  <footer>
    <p className='bg-light fixed-bottom py-3 m-0 px-5'>CopyRight &copy; 2023 </p>
    </footer></>
  )
}

export default NavBar