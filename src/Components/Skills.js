import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss, SiNetlify } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node: <DiNodejs/>,
        Express: <SiExpress/>,
        MongoDb: <SiMongodb/>,
        Git: <FaGitAlt/>,
        Github: <FaGithub/>,
        Npm: <FaNpm/>,
        Figma: <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel: <SiVercel/>,
        HTML: <FaHtml5/>,
        CSS: <FaCss3Alt/>,
        Java: <FaJava/>,
        Tailwind: <SiTailwindcss/>,
        Netlify: <SiNetlify/>
    };
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
