import React from 'react';

const SectionNav = () => {
  const sections = [
    { id: 'Home', label: 'Home' },
    { id: "aboutMe", label: "About"},
    { id: 'courses', label: 'Courses' },
    { id: 'work-experience', label: 'Work' },
    { id: 'personal-projects', label: 'Projects' },
    { id: 'leetcode', label: 'LeetCode' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className="nav-button"
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default SectionNav;
