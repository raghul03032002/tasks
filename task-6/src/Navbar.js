import React from 'react'
import Login from './Login';
import Register from './Register';
import Main from './Main';
import { Link,Route,Routes } from 'react-router-dom';

function Header() {
  return (
    <>
    <header id="home">
    <div className="container-fluid">
        <nav
        className="navbar navbar-expand-lg navbar-light bg-secondary px-4 border-bottom fixed-top"
      >
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="#home"
          >Time <span className="text-light">Saver</span></a
        >
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
              <Link to="/Main"
                className="nav-link active text-light"
                aria-current="page"
                >Home</Link >
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Products" 
                  >Product</a
                >
              </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item ">
              <Link to="/Login" className="bg-light nav-link border rounded p-1 mt-1">Login</Link>
            </li>
            <li className="nav-item ">
              <Link to="/Register" className="bg-light nav-link border rounded p-1 mx-2 mt-1 ">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </div>
  </header>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
  </Routes>
  </>
  );
}

export default Header;