import React from 'react';

const WorkExperience = () => {
  return (
    <section className="section" id="work-experience">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Software Engineer Intern</strong> at <em>NextLabs</em> (Jun 2024 – Dec 2024)
          <ul>
            <li>Expanded support for SkyDRM to Perforce and LabVIEW using Visual Studio, Jenkins, and Windows API.</li>
            <li>Identified and mitigated a major data security issue on Windows systems.</li>
            <li>Removed build dependencies, reducing build time by 60%.</li>
            <li>Developed a C++ program integrated with a REST API for connectivity with an Apache Tomcat server.</li>
          </ul>
        </li>
        <li>
          <strong>Computer Architecture Group Tutor</strong> at <em>CSE 120</em> (Mar 2024 – Jun 2024)
          <ul>
            <li>Taught 5–10 students weekly for 6 hours, covering topics such as parallel processing and digital circuits.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
