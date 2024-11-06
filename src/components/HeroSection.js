import React from 'react'
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../assets/video-1.mp4';
import imagenpatalarga from '../images/img-4.jpg'

function HeroSection() {
  return (
    
    <div className='hero-container'>   
       <video src={video1} autoPlay muted loop poster={imagenpatalarga}>
      </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button 
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
    </div>
  );
}

export default HeroSection