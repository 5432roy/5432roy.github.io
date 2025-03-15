import React from 'react';

const SectionNav = () => {
  const sections = [
    { id: 'Home', label: 'Home', icon: 'home.png' },
    { id: "aboutMe", label: "About", icon: 'man.png'},
    { id: 'courses', label: 'Courses' , icon: 'school.png'},
    { id: 'work-experience', label: 'Work', icon: 'work.png'},
    { id: 'personal-projects', label: 'Projects', icon: 'code.png' },
    { id: 'leetcode', label: 'LeetCode', icon: 'algorithm.png' }
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
          {section.icon ? (
            <img src={section.icon} alt={section.label} />
          ) : (
            section.label
          )}
        </button>
      ))}
    </div>
  );
};

export default SectionNav;
