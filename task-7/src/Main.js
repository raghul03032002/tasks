import React from 'react'
import abo from './image/ab-1.jpg'
import img1 from './image/img1.jpeg';
import img2 from './image/img2.jpeg';
import img3 from './image/img3.jpeg';
import pro1 from './image/pro-1.jpeg';
import pro2 from './image/pro-2.jpeg';
import pro3 from './image/pro-3.jpeg';
import pro4 from './image/pro-4.jpeg';
import pro5 from './image/pro-5.jpeg';
import pro6 from './image/pro-6.jpeg';
function Main() {
  return (
    <>
    <main>
    {/* Carousel */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
  
    {/* carousel-img */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} alt="watches" className="d-block w-100"/>
      </div>
      <div className="carousel-item">
        <img src={img2} alt="watches" className="d-block w-100"/>
      </div>
      <div className="carousel-item">
        <img src={img3} alt="watches" className="d-block w-100"/>
      </div>
    </div>
  
    {/* Left and right toggle icons */}
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
  {/* about */}
  <section id="about">
    <div className="container mt-3">
        <h2 className="text-dark text-center">About</h2>
        <div className="row mt-3">
            <div className="col-sm-12 col-md-4 col-lg-8 col-12">
        <p>For people seeking effortless className, sophistication, and luxury, a stylish watch is worth the investment. A timeless watch project prestige, confidence, and className. So, if you're planning to add a new watch to your collection, you must shop for top branded watches from a reputable watch shop. At Titan, we offer a wide collection of authentic branded watches all under one roof. You can filter your choices for a better experience according to price, discounts, gender, brand, function, and more. We always strive to provide our customers with the best service possible when it comes to shopping for tasteful watches.</p>
        <a href="#" className="btn btn-secondary m-5 ">Know More</a>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 col-12 px-6">
        <img src={abo} alt="loading" width="300px"/>
    </div>
    </div>
</div>
  </section>
  {/* product */}
  <section id="Products" className="bg-secondary my-0"><hr/>
    <div className="container mt-3 ">
        <h2 className="text-light text-center">Product</h2>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
<img src={pro1} width="200px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">Titan</h5>
                  <p className="card-text">
                    Metal Mechanical Analog Watch.
                  </p>
                  <a href="#" className="btn btn-secondary">₹24,796</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
                    <img src={pro2} width="190px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">DANIEL WELLINGTON</h5>
                  <p className="card-text">
                    Iconic 40mm Analog Watch 
                  </p>
                  <a href="#" className="btn btn-secondary">₹23,999</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
                    <img src={pro3} width="185px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">Seiko </h5>
                  <p className="card-text">
                    PREMIER Analog Watch
                  </p>
                  <a href="#" className="btn btn-secondary">₹43,199</a>
                </div>
              </div>
            </div>
          </div>
         {/* row2 */}
          <div className="row ">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
<img src={pro4} width="200px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">EMPORIO ARMANI </h5>
                  <p className="card-text">
                    LUIGI Analog Watch
                  </p>
                  <a href="#" className="btn btn-secondary">₹21,495</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
                    <img src={pro5} width="186px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">FOSSIL </h5>
                  <p className="card-text">
                    Heritage Analog Watch
                  </p>
                  <a href="#" className="btn btn-secondary">₹23,995</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
              <div className="card text-center">
                <div className="card-body">
                    <img src={pro6} width="196px" className="img-fluid img-thumbnail"/>
                  <h5 className="card-title">CITIZEN  </h5>
                  <p className="card-text">
                    PREMIER Green Analog Watch
                  </p>
                  <a href="#" className="btn btn-secondary">₹23,310</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
  </section>
  {/* Contact */}
  <section id="contact" className="mt-3 mx-6" >
    <h2 className="text-dark text-center">Get in Hold tightly</h2>
    <form action="#" className="m-4">
        <div className="row">
        <div className="col-md-6 mt-3">
          <label for="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="uname" placeholder="Enter your Nmae" name="name"/>
        </div>
        <div className="col-md-6 mt-3">
          <label for="mobile_no" className="form-label">Mobile No:</label>
          <input type="number" className="form-control" id="pwd" placeholder="Enter Mobile No" name="m-no"/>
        </div>
        <div className="col-md-6 mt-3">
            <label for="email" className="form-label">Email:</label>
            <input type="email" classNameName="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          <div className="col-md-6 mt-3">
            <label for="comment">Address:</label>
            <textarea className="form-control" rows="5" id="Address" name="text"></textarea> 
          </div>
        <div className=" col-md-6 mt-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
          </label>
        </div>
    </div>
        <button type="submit" className="btn btn-secondary mx-3 mt-3">Submit</button>
      </form> 

  </section>
</main></>
  )
}

export default Main;