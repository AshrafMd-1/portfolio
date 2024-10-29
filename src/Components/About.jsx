import React from "react";
import image from "../images/backgrounds/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description1 =
  "I'm a passionate Computer Science and Engineering (CSE) student at the Institute of Aeronautical Engineering.";
const description2 =
  " As a proficient MERN developer with a strong foundation in Python, JavaScript, and Java, I enjoy creating unique, simple applications that help solve real-world problems.";
const description3 =
  "My expertise also spans NLP and machine learning, gained through various projects and coursework. I love tackling complex challenges and am eager to apply my skills in impactful, cutting-edge technologies.";
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
        <p className="large">{description1}</p>
        <p className="large">{description2}</p>
        <p className="large">{description3}</p>
      </div>
    </section>
  );
};

export default About;
