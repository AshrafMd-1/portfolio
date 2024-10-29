import React from "react";
import image from "../images/backgrounds/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a CSE (Computer Science and Engineering) student studying at Institute of Aeronautical Engineering. I enjoy creating unique and simple apps that help solve people's problems.";
const skillsList = ["Full stack development", "Machine learning", "Devops", "Cloud computing"];
const detailOrQuote =
  "I’m a passionate computer science student and proficient MERN developer with a strong foundation in Python, JavaScript, and Java. My expertise spans NLP and machine learning, gained through projects and coursework. I enjoy tackling complex problems and am eager to apply my skills in real-world, impactful technologies.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
