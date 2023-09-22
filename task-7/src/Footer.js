import React from 'react';
import './App.css'

function Footer() {
    const year=new Date();
return (
    <p> Copyright &copy; { year.getFullYear()}</p>
)
}

export default Footer;