import React,{useState,useEffect} from "react";

function ViewProject() {
    const[item,setitem]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(det=>det.json())
        .then(det=>setitem(det))
  
    },[])
  return (
    <div>
      <section className='cardd-et'>
        <h2 className='card-head text-center text-uppercase'>
       <u>Cart details</u>
        </h2>
       <div className="container p-2">
        <div className="row g-4">
            {item.map((can)=>(
                <div key={can.id} className='col-sm-1 col-md-4 col-xs-1 col-lg-3  coldata'>
                <div className='data h-100'> 
                <br />
                <div>
                <img src={can.url} className='container h-100'/>
                </div>
                <br />
                <p className='p-2  text-uppercase text-justify'><label className='text-light'>Title : </label> {can.title} </p> 
                <br />
                </div>
                </div>
            ))}
        </div>
       </div>
       </section>
       </div>
)
}

export default ViewProject