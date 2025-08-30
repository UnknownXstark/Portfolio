import React from 'react'
import './Hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <img src="" alt="" />
        <h1>My Name is Nathan Kalio, a frontend developer based in Nigeria.</h1>
        <p>I am a frontend developer from Port Harcourt, Nigeria with 1 year of experience</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default hero