import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="https://github.com/5432roy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1D9K-XgPMsHHdWQElwrTFZut8oVmc5auJ8HFoLPWuWWc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shang-yu-chan-6b19801b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/roy5432/" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
