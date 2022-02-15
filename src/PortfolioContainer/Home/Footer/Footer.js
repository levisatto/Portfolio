import React from 'react';
import './Footer.css';
import bg from '../../../assets/Home/shape-bg.png';


export default function Footer() { 
  
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
           <img src={bg} alt='No internet connection' />
      </div>
    </div>
  )
}