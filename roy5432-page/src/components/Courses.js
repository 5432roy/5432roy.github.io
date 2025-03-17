import React from 'react';

const Courses = () => {

  const ucscCourses = [
    {
      title: "CSE 101 Introduction-to-Data-Structures-and-Algorithms",
      description:
        "Used C and C++ to build linked lists, red-black trees, and graph ADTs; implemented BFS, DFS, and binary search."
    },
    {
      title: "CSE 120 Computer Architecture",
      description:
        "Learned microarchitecture, pipeline, cache, multithreading, and data hazards."
    },
    {
      title: "STAT 131 Introduction to Probability Theory",
      description:
        "Covered gamma function, beta distribution, Poisson process, and the central limit theorem."
    },
    {
      title: "CSE 138 Distributed Systems",
      description:
        "Covers topics in distributed computing including communication, naming, synchronization, consistency and replication, fault tolerance, and security."
    }
  ];
  
  const wsuCourses = [
    {
      title: "MATH 220 Introductory Linear Algebra",
      description: ""
    },
    {
      title: "MATH 216 Discrete Structures",
      description: ""
    },
    {
      title: "CPT_S 233 Advanced Data Structures (Java)",
      description:
        "Implemented red-black trees and various sorting algorithms."
    },
    {
      title: "CPT_S 260 Intro to Computer Architecture",
      description: ""
    },
    {
      title: "CPT_S 317 Automata and Formal Languages",
      description:
        "Studied DFA, NFA, context-free grammar, and Turing machines."
    },
    {
      title: "CPT_S 322 Software Engineering I",
      description:
        "Collaborated on a project (Studengage) to learn the design cycle and OOP."
    },
    {
      title: "CPT_S 355 Programming Language Design",
      description: ""
    },
    {
      title: "CPT_S 370 Systems Programming (Java)",
      description: ""
    }
  ];
  
  return (
<section className="course-section" id='courses'>
    <h2>Taken Courses</h2>
    <div className="course-content">
      <div className="course-ucsc course-list">
        <h3>At University of California Santa Cruz</h3>
        <ul>
          {ucscCourses.map((course, index) => (
            <li key={index}>
              <strong>{course.title}</strong>
              {course.description && `: ${course.description}`}
            </li>
          ))}
        </ul>
      </div>
      <div className="course-wsu course-list">
        <h3>At Washington State University</h3>
        <ul>
          {wsuCourses.map((course, index) => (
            <li key={index}>
              <strong>{course.title}</strong>
              {course.description && `: ${course.description}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Courses;
