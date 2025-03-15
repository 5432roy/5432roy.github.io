import React, { useState } from 'react';

const AboutMe = () => {
  const email = "shangyu051601@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  const highlights = {
    "Technical Versatility" : "Expertise in C++, C#, .NET, and Java, demonstrated through diverse projects and practical solutions.",
    "Innovative Problem-Solving" : "Proven ability to apply modern tools and reverse engineering techniques for efficient results.",
    "Collaborative Mindset" : "A dedicated team player committed to excellence, continuous learning, and clear communication. Combined, they drive success."
  }

  return (
    <section className="aboutme-section" id="aboutMe">
      <div className="aboutme-container">
        <div className="aboutme-left">
          <img src="me.jpg" alt="Shang-Yu Chan" className="aboutme-photo" />
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shang-yu-chan-6b19801b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin-icon"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/5432roy"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github-icon"
            >
              GitHub
            </a>
            <button onClick={handleCopyEmail} className="icon email-icon">
              Email
            </button>
            {copied && <span className="copy-message">Copied!</span>}
          </div>
        </div>
        <div className="aboutme-right">
          <h2>About Me</h2>
          <p>
            I graduated from the University of California Santa Cruz in December 2024 with a strong foundation in computer science. My internship at NextLabs refined my skills and equipped me with the hand-on experience in C programming, debugging and reverse engineering.
          </p>
          <p>
            I further demonstrate my technical versatility through personal projects that highlight my independent innovation and collaborative spirit. Notably, I developed a mod for Oxygen Not Included with 200+ and growing users on Steam. This project deepened my expertise in .NET development and reverse engineering, while reinforcing my commitment to continuous learning and creative problem-solving. I am driven to push boundaries and deliver impactful results.          
          </p>
        </div>
        <div className='aboutme-bottom'>
          {Object.entries(highlights).map(([key, value]) => (
            <div className='aboutme-block'>
              <h3>{key}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
