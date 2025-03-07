import React from 'react';
import "./About.css";
import Card from './Card';
import GradientText from '../GradientText/GradientText';

function About() {
  const educationData = [
    {
      title: "SSLC",
      to: 86,
      text1: "Al Ameen Matriculation",
      text2: "Higher Secondary School",
      text3: "Kumbakonam."
    },
    {
      title: "HSC",
      to: 75,
      text1: "Al Ameen Matriculation",
      text2: "Higher Secondary School",
      text3: "Kumbakonam."
    },
    {
      title: "BE CSE",
      to: 80,
      text1: "Arasu Engineering College,",
      text2: "CSE,",
      text3: "Kumbakonam."
    }
  ];

  return (
    <>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="GradientText-About"
      >
        EDUCATION
      </GradientText>
      <div className="About-parent">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            title={edu.title}
            to={edu.to}
            text1={edu.text1}
            text2={edu.text2}
            text3={edu.text3}
          />
        ))}
      </div>
    </>
  );
}

export default About;
