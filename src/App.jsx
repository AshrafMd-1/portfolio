import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

import "./styles.css";

const siteProps = {
  name: "Ashraf Mohammed",
  title: "Full Stack Developer & Data Scientist",
  email: "ashrafmd0506@gmail.com",
  gitHub: "Ashrafmd-1",
  linkedIn: "ashraf-mohammed-75932823a",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Projects />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
