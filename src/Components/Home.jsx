import React from "react";
import arrowSvg from "../images/home/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/home/bg_home.jpg";

const imageAltText = "An abstract image with neon polygons and lights";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div classList="home-text" className="home-data" style={{ color: "white" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <button
          className="resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Rq3POzim2phpDDZqJR0GL_K-ED3mR4g2/view?usp=sharing",
              "_blank"
            )
          }
        >
          <span>Get Resume</span>
        </button>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "48%" }}>
        <img
          src={arrowSvg}
          style={{
            height: "3rem",
            width: "3rem",
            animation: "1.5s ease-out 0s infinite slideUpDown",
          }}
          alt={"A down arrow"}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
