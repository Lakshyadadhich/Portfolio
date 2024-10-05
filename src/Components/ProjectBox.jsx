import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ZeroDalali: {
      desc: "This website is a landing page of Zero dalali, A trading website . It is a website which has many animations. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
      github: "https://github.com/Lakshyadadhich/Zero-Dalali",
      website: "https://zerodalali.netlify.app/"
    },
    
    Netflix: {
      desc: "A website which is Netflix clone. This project is created by me at the time of internship. During this project I learn how to use API and how to fetch the data. This projecrt helped me to learn React. ",
      github: "https://github.com/Lakshyadadhich/netflix-clone",
      website: "https://lakshyadadhich.netlify.app/"
    },
    Calculator: {
      desc: "A website which is a simple calculator but have the complexity at the code side. With the help of this I learn the how the Java-Script works. Also I learn the new way to take input from the user. ",
      github: "https://github.com/Lakshyadadhich/calculator",
      website: "https://quiet-melba-1d59e4.netlify.app/"
    },

    


    
  };

  const projectInfo = desc[projectName];

  // Check if the projectName exists in the `desc` object
  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectInfo.desc}</p>
        <br />

        {projectInfo.github && (
          <a href={projectInfo.github} target='_blank' rel="noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}

        <a href={projectInfo.website} target='_blank' rel="noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
