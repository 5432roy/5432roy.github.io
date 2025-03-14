import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="personal-projects">
      <h2>Personal Projects</h2>
      <ul>
        <li>
          <strong>OxygenNotInclded Mod</strong> (C# / .NET / Unity)
          <ul>
            <li>Developed a mod for Steam Workshop that reduces computation resource usage by insulating game objects, boosting FPS by 10–15%.</li>
            <li>Applied reverse engineering techniques and maintained a growing user base.</li>
          </ul>
        </li>
        <li>
          <strong>SP500-with-LSTM</strong> (Python)
          <ul>
            <li>Collaborated on tuning an LSTM model to analyze stock market trends using historical data and real-time news inputs.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
