import React from 'react';
import { Button } from '../button/Button';
import './HeroSection.css';
import '../../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video
        src={require('./videos/video-2.mp4').default}
        autoPlay
        loop
        muted
      />
      <h1>Hello</h1>
      <p>Welcome to this website</p>
      <div className='hero-btns'>
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
          WATCH TRAILER
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
