import React from 'react';
import "./Skills.css";
import GradientText from '../GradientText/GradientText';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import react from "../assets/react.png";
import mui from "../assets/mui.png";
import Bootstrap from "../assets/bootstrap.jpeg";
import Firebase from "../assets/firebase.png";
import Git from "../assets/GitHub.png";
import mysql from "../assets/mysql.jpeg";

const skillsData = [
  { name: "HTML", level: 80, image: Html },
  { name: "CSS", level: 70, image: Css },
  { name: "JavaScript", level: 70, image: Js }
];

const skillsDataTwo = [
  { name: "React", level: 70, image: react },
  { name: "mui", level: 60, image: mui },
  { name: "Bootstrap", level: 70, image: Bootstrap }
];

const skillsDataThree = [
  { name: "Firebase", level: 50, image: Firebase },
  { name: "My Sql", level: 60, image: mysql },
  { name: "Git Hub", level: 70, image: Git }
];

function Skills() {
  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="GradientText-About"
      >
        SKILLS
      </GradientText>

      <div className='SpotlightCard-parent'>
        {skillsData.map((skill, index) => (
          <SpotlightCard 
            key={index} 
            spotlightColor={"rgba(1, 254, 119, 0.25)"} 
            className="Skills-SpotlightCard"
          >
            <img src={skill.image} alt={skill.name} className='Logo-class' />
            <div className='Skills-progress'>
              <h2 className='Skill-h2'>{skill.name}</h2>
              <progress className='progress-class' value={skill.level} max="100"></progress>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className='SpotlightCard-parent'>
        {skillsDataTwo.map((skill, index) => (
          <SpotlightCard 
            key={index} 
            spotlightColor={"rgba(1, 254, 119, 0.25)"} 
            className="Skills-SpotlightCard"
          >
            <img src={skill.image} alt={skill.name} className='Logo-class' />
            <div className='Skills-progress'>
              <h2 className='Skill-h2'>{skill.name}</h2>
              <progress className='progress-class' value={skill.level} max="100"></progress>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className='SpotlightCard-parent'>
        {skillsDataThree.map((skill, index) => (
          <SpotlightCard 
            key={index} 
            spotlightColor={"rgba(1, 254, 119, 0.25)"} 
            className="Skills-SpotlightCard"
          >
            <img src={skill.image} alt={skill.name} className='Logo-class' />
            <div className='Skills-progress'>
              <h2 className='Skill-h2'>{skill.name}</h2>
              <progress className='progress-class' value={skill.level} max="100"></progress>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

export default Skills;
