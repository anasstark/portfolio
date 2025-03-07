import React, { useRef } from "react";
import "./Projects.css";
import GradientText from "../GradientText/GradientText";

const projectData = [
  {
    title: "Finance Management System",
    colors: ["grey", "orange", "yellow", "red", "green"],
    description: [
      "Developed a Finance Management System with Admin and Collection Agent modules using React.js, PHP, and SQL.",
      "Enabled user and payment management for admins while streamlining offline collections for agents.",
      "Ensured scalability, mobile responsiveness, and seamless front-end and back-end integration.",
    ],
  },
  {
    title: "Gym Management System",
    colors: ["blue", "grey", "red", "blue", "grey"],
    description: [
      "Developed a Gym Management System using React.js, PHP, and SQL for efficient membership and payment tracking.",
      "Integrated a notification system for fee reminders and centralized gym maintenance data.",
      "Ensured responsiveness, seamless data synchronization, and optimized performance for scalability.",
    ],
  },
];

function Projects() {
  const containerRef = useRef(null);

  return (
    <div>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="GradientText-About height"
      >
        PROJECTS
      </GradientText>

      <br />
      <div className="Projects-division-parent">
        {projectData.map((project, index) => (
          <div className="Projects-division" key={index}>
            <div className="proj-title" ref={containerRef}>
              <GradientText
                colors={project.colors}
                animationSpeed={5}
                showBorder={true}
                className="GradientText-title"
              >
                {project.title}
              </GradientText>

              <p className="Project-para">
                {project.description.map((line, idx) => (
                  <span className="Project-span" key={idx}>
                    - {line} <br />
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
