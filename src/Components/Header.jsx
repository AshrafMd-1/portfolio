import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.66)",
        padding: "1rem",
        fontSize: "1.2rem",
        top: 0,
        width: "100%",
        backdropFilter: "blur(10px)",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
