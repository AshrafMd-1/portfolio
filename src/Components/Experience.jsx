import React from "react";
import ohcnLogo from "../images/experience/ohcn.jpg";
import gdscLogo from "../images/experience/gdsc.jpg";
import rinexLogo from "../images/experience/rinex.jpg";

const experienceList = [
  {
    id: 1,
    logo: ohcnLogo,
    title: "Full Stack Intern",
    link: "https://www.linkedin.com/company/ohcn/",
    "employment type": "Internship",
    "company name": "Open Healthcare Network",
    location: "Remote",
    "start date": "August 2023",
    "end date": "May 2024",
    "skills used":
      "TypeScript, React, Docker, Django, PostgreSQL, Git, GitHub, Cypress, Tailwind CSS",
    description:
      "Contributed to an open-source healthcare project using React, TypeScript, and Django by implementing backend migrations to expand medical options, enhancing the homepage UI, and optimizing network requests to reduce post-login file refetching by 5 MB.",
  },
  {
    id: 2,
    logo: gdscLogo,
    title: "Technical Lead",
    link: "https://www.linkedin.com/company/gdgciare/",
    "employment type": "Volunteer",
    "company name": "Google Developer Student Club, IARE",
    location: "Hyderabad, India",
    "start date": "July 2023",
    "end date": "August 2024",
    "skills used":
      "Technology Leadership, Team Management, Public Speaking, Event Management, Software Development",
    description:
      "Instructed students and faculty on emerging technologies and their applications, organized impactful events that highlighted team achievements, and initiated projects such as a certificate generator and a lab worksheet search tool.",
  },
  {
    id: 3,
    title: "AI Intern",
    logo: rinexLogo,
    link: "https://www.linkedin.com/company/rinex-ai/",
    "employment type": "Internship",
    "company name": "RineX Technologies",
    location: "Remote",
    "start date": "May 2022",
    "end date": "July 2022",
    "skills used": "Python, Core ML, NLP, Scikit-learn,Tensorflow, Pandas, NumPy",
    description:
      "Learnt & Developed a machine learning model to predict the sentiment of tweets using NLP, which achieved an accuracy of 85%",
  },
];

const Experience = () => {
  return (
    <section className="padding" id="experience">
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "2.5rem",
          paddingBottom: "1rem",
          justifyContent: "center",
        }}
      >
        <div className="container" id="experience-list">
          {experienceList.map((experience) => (
            <div className="experience-card" key={experience.id}>
              <div className="experience-body">
                <div className="experience-company-logo-container" aria-hidden="true">
                  <img src={experience.logo} alt="Company Logo" />
                </div>

                <div className="experience-info">
                  <h3 className="experience-company-name">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noreferrer"
                      className="experience-company-name-link"
                    >
                      {" "}
                      {experience["company name"]}
                    </a>
                    <h5 className="experience-title-position">{experience.title}</h5>
                  </h3>
                  <p className="experience-description">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
