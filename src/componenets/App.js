import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './About/NavBar.jsx';
import { Banner } from './Banner/Banner.jsx';
import About from './About/About.jsx';
import { Skill } from './Skill/skill.jsx';
import { Project } from './Project/project.jsx';
import { Contact } from './contact/Contact.jsx';
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <About />
     <Skill />
    <Project />
    <Contact />
    <Footer /> 
    </div>
  );
}

export default App;
