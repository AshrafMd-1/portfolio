import React from "react";
import image from "../images/backgrounds/skill_bg.jpg";

const imageAltText = "purple and red & blue abstract background";
const skillSection = {
  "Programming Languages": ["Python", "JS", "Java", "TypeScript"],
  Frontend: ["React", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "FastAPI", "Flask"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Cloud: ["Azure", "AWS"],
  "Developer Tools": ["Git", "GitHub", "Docker", "Postman"],
};
const Skills = () => {
  return (
    <section className="padding" id="skills">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "2rem",
          margin: "3rem auto",
          borderRadius: "10%",
          textAlign: "center",
        }}
      >
        <h2>Skills</h2>
        <div className={"skills-container"}>
          {Object.keys(skillSection).map((section) => (
            <div key={section} className="skills-section">
              <h3>{section}</h3>
              <ul>
                {skillSection[section].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
