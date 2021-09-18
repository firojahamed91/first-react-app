import React from 'react'
import Common from './Common'
import about from '../images/03.png'

const About = () => {
    return (
        <>
          <Common 
          name="Welcome to about page" 
          imgsrc={about} 
          btnName="Contact Now" 
          visit="/contact" />
        </>
    )
}

export default About
