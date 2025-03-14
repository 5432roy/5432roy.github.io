import React from 'react';

const Courses = () => {
  return (
    <section className="section" id="courses">
      <h2>Taken Courses</h2>
      <p>*Upper division courses cannot be transferred. Some courses may need to be re-taken.</p>
      <div>
        <h3>At University of California Santa Cruz</h3>
        <ul>
          <li>
            <a
              href="https://github.com/5432roy/Introduction-to-Data-Structures-and-Algorithms"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSE 101 Introduction-to-Data-Structures-and-Algorithms
            </a>
            : Used C and C++ to build linked lists, red-black trees, and graph ADTs; implemented BFS, DFS, and binary search.
          </li>
          <li>
            CSE 120 Computer Architecture: Learned microarchitecture, pipeline, cache, multithreading, and data hazards.
          </li>
          <li>
            STAT 131 Introduction to Probability Theory: Covered gamma function, beta distribution, Poisson process, and the central limit theorem.
          </li>
        </ul>
      </div>
      <div>
        <h3>At Washington State University</h3>
        <ul>
          <li>MATH 220 Introductory Linear Algebra</li>
          <li>MATH 216 Discrete Structures</li>
          <li>
            CPT_S 233 Advanced Data Structures (Java): Implemented red-black trees and various sorting algorithms.
          </li>
          <li>CPT_S 260 Intro to Computer Architecture</li>
          <li>
            CPT_S 317 Automata and Formal Languages: Studied DFA, NFA, context-free grammar, and Turing machines.
          </li>
          <li>
            CPT_S 322 Software Engineering I: Collaborated on a project (Studengage) to learn the design cycle and OOP.
          </li>
          <li>CPT_S 355 Programming Language Design</li>
          <li>CPT_S 370 Systems Programming (Java)</li>
        </ul>
      </div>
    </section>
  );
};

export default Courses;
