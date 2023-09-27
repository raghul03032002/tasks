import React,{useState,useEffect} from 'react'

function Viewcandidate() {
    const[candidate,setcandidate]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(det=>det.json())
        .then(det=>setcandidate(det))

    },[])
  return (
    <div>
        <h2 className='card-det'>
       <u>Our Candidates</u>
        </h2>
       <div class="container">
        <div class="row">
            {candidate.map((can)=>(
                <div className='col-sm-12 col-md-4 col-lg-4 col-12 coldata'>
                <div className='data border rounded p-1 bg-secondary text-light'>
                <u><p class='mt-4 px-5 mx-1 text-capitalize'>Detail of {can.name} </p></u>  
                <br />
                <p>Company : {can.company.name} {can.company.catchPhrase} {can.company.bs}</p> 
                <br />
                <p>Phno : {can.phone}</p> 
                <br />
                <p>Email : {can.email}</p> 
                <br />
                <p>Address : {can.address.street}{can.address.suite}{can.address.city}</p> 
                <br />
                <p> Latitude : {can.address.geo.lat} & Longitude : {can.address.geo.lng}</p> 
                <br />
                </div>
                </div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Viewcandidate