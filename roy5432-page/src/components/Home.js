import React, { useState, useEffect } from 'react';
import BackgroundGraph from './BackgroundGraph';

const Home = () => {
  const fullText = "Hi, I'm Shang-Yu Chan";
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typedIndex, fullText]);

  return (
    <section className="home-section" id="Home">
      <BackgroundGraph />
      <div className="home-content">
        <div className="home-left">
          <h1>{fullText.slice(0, typedIndex)}</h1>
          <a className="resume-link" href="https://docs.google.com/document/d/1D9K-XgPMsHHdWQElwrTFZut8oVmc5auJ8HFoLPWuWWc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <div className="home-right">
          <div className="skills-code-block">
            <p className="comment"># Skills</p>
            <ul>
              <li>.NET</li>
              <li>Java</li>
              <li>Python</li>
              <li>C / C++ / C#</li>
              <li>REST APIs</li>
              <li>Reverse Engineering</li>
            </ul>
            <p className='comment'># This page is still under development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
