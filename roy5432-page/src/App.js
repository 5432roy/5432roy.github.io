import React from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import LeetCode from './components/LeetCode';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import SectionNav from './components/SectionNav';
import HoverBlock from './components/HoverBlock';
import './App.css';


function App() {
  return (
    <div className="App">
      <SectionNav />
      <HoverBlock />
      <Home />
      <AboutMe />
      <Courses />
      <WorkExperience />
      <Projects />
      <LeetCode />
      <Footer />
    </div>
  );
}

export default App;
