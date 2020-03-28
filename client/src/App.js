import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import Skills from "./components/skills";
import About from "./components/about";
import Project from "./components/projects";
import Footer from "./components/footer";
import Nav from "./components/assets/navbar";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
