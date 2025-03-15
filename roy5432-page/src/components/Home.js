import React, { useState, useEffect } from 'react';
import BackgroundGraph from './BackgroundGraph';

const Home = () => {
  const fullText = "Hello, I am";
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typedIndex, fullText]);

  const name = "ShangYu Chan";
  const [nameIndex, setTypedName] = useState(0);

  useEffect(() => {
    if (nameIndex < name.length) {
      const timer = setTimeout(() => {
        setTypedName((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [nameIndex, name]);

  const skills = [ 
    "Java", 
    "Python", 
    "C/C++",
    "C#", 
  ];
  const projects = [
    "OxygenNotInclded Mods", 
    "SP500-with-LSTM"
  ];
  const misc = [
    "Visual Studio",
    "React",
    "Jenkins",
    ".NET",
    "Reverse Engineering",
  ]

  const resumeLink = "https://docs.google.com/document/d/1D9K-XgPMsHHdWQElwrTFZut8oVmc5auJ8HFoLPWuWWc/edit?usp=sharing";

  return (
    <section className="home-section" id="Home">
      <BackgroundGraph />
      <div className="home-content">
        <div className="home-left">
          <h1>{fullText.slice(0, typedIndex)}</h1>
          <h1>{name.slice(0, nameIndex)}</h1>
          <a className="resume-link" href={resumeLink} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
        <div className="home-right">
          <div className="home-info">
            <div className="education">
              <p className="info-title"># Education</p>
              <p className="info-content">
                UC Santa Cruz: Bachelor of Science, CS, Dean's Award Scholarship
              </p>
            </div>
            <div className="work-experience">
              <p className="info-title"># Work Experience</p>
              <p className="info-content">
                NextLabs: Software Engineer, 2024 June - 2024 Dec
              </p>
            </div>
            <div className="skills">
              <p className="info-title"># Skills</p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="projects">
              <p className="info-title"># Projects</p>
              <div className="projects-list">
                {projects.map((project, index) => (
                  <span key={index} className="project-item">{project}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
