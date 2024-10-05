import React from 'react';
import ProjectBox from './ProjectBox';
import calculator from '../images/calculator.jpg';
import ZeroDalali from '../images/ZeroDalali.jpg';
import Netflix from '../images/netlflix.jpg'


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ZeroDalali} projectName="ZeroDalali" />
        <ProjectBox projectPhoto={calculator} projectName="Calculator" />
        <ProjectBox projectPhoto={Netflix} projectName="Netflix" />
      </div>

    </div>
  )
}

export default Projects