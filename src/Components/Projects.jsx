import React from "react";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Form Builder",
    description:
      "An interactive form builder application that empowers users to create, modify, and manage custom forms seamlessly, with features for real-time form updates and deletions.",
    skills: ["React", "TypeScript", "Cypress", "Tailwind", "Django"],
    url: "https://github.com/AshrafMd-1/form-builder/tree/level-9",
  },
  {
    title: "Sports Manager",
    description:
      "A sports management tool enabling users to efficiently organize, update, and track sports sessions, with capabilities to manage participants and schedule adjustments.",
    skills: ["Node.js", "Express", "PostgreSQL", "Passport.js", "Ejs"],
    url: "https://github.com/AshrafMd-1/sports-manager",
  },
  {
    title: "TaskTide",
    description:
      "A Kanban-style task management app providing intuitive tools for users to create, update, and track tasks visually, facilitating workflow organization and productivity.",
    skills: ["React", "TypeScript", "Cypress", "TailwindCSS", "Django"],
    url: "https://github.com/AshrafMd-1/tasktide",
  },
  {
    title: "Certify",
    description:
      "A certificate generation platform built with Streamlit, enabling users to create, customize, and distribute professional certificates easily using personalized data inputs.",
    skills: ["Python", "Streamlit", "Pandas", "Pillow", "MongoDB", "Requests"],
    url: "https://github.com/AshrafMd-1/certify-streamlit",
  },
];

const Projects = () => {
  return (
    <section className="padding" id="projects">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "1rem" }}>
        <div className="project-container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>

              <p className="project-description">{project.description}</p>
              <div className="project-link-container">
                <button className="project-link" onClick={() => window.open(project.url)}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
