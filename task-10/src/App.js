import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ViewProject from './ViewProject';
import NavBar from './NavBar';
import Login from './Login'
import Register from './Register';
import Home from './Home';


function App() {
return(
  <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      <Route path='/ViewProject' element={<ViewProject />}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
  </>
)
}

export default App;
