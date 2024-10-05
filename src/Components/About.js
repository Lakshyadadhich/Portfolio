import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import profile from '../images/profile.png'

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Lakshya Dadhich</b> and I am from Jaipur, India.
            I'm a <b>MERN stack web developer</b> and I have recently completed my <b>BTech in Computer Science Engineering. </b><br/><br/>
            I have done an internship as a <b>React JS Intern</b> at Celebal Technology which is a software services company.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>looking forward</b>  to work on interesting and challenging projects as a developer and create something that's innovative and proud worthy. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I like to pen down my thoughts as poetry, you can check out some of my videos here <a href="https://www.instagram.com/lakshyaa_writes/profilecard/?igsh=MjM3MzB6YTVhcmQ0" target='_blank' rel="noreferrer">Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
            <img src={profile} alt="Profile" className="profileImage" />  {/* Use img tag for profile image */}
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
      <Skills skill='HTML' />
      <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind' />
        <Skills skill='Npm' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Github' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        {/* <Skills skill='Figma' /> */}
        <Skills skill='Vercel' />
        <Skills skill='Netlify' />
        
      </div>
    </>
  )
}

export default About