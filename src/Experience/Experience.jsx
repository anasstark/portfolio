import React from "react";
import GradientText from "../GradientText/GradientText";
import "./Experience.css";
import SpotlightCard from "../SpotlightCard/SpotlightCard";

const experiences = [
  {
    role: "WEB DEVELOPER-Intern",
    duration: "Jan 2024 - July 2024",
    company: "VEBBOX SOFTWARE SOLUTIONS",
  },
  {
    role: "FULL STACK DEVELOPER",
    duration: "July 2024 - Feb 2025",
    company: "VEBBOX SOFTWARE SOLUTIONS",
  },
];

function Experience() {
  return (
    <div className="Experience-parent">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="GradientText-About"
      >
        EXPERIENCE
      </GradientText>

      <div className="Experience-SpotlightCard-parent">
        {experiences.map((exp, index) => (
          <SpotlightCard key={index} className="Experience-SpotlightCard">
            <div className="Experience-h2-div">
              <h2 className="Experience-h2">{exp.role}</h2>
            </div>

            <div className="Experience-h2-div mgt">
              <div>
                <h3 className="Experience-h3">{exp.duration}</h3>
                <br />
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={5}
                  showBorder={false}
                  className="GradientText-h3"
                >
                  {exp.company}
                </GradientText>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

export default Experience;
