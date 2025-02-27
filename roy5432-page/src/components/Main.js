import React from 'react';

const Main = () => {
  return (
    <main style={{ position: 'relative' }}>
      {/* Full-width wrapper for the Main section */}
      <div
        className="main-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '600px',
          overflow: 'hidden',
          background: 'transparent'
        }}
      >
        <div
          className="content-container"
          style={{
            position: 'relative',
            zIndex: 1, 
            margin: '0 auto',
            padding: '20px',
            background: 'transparent'
          }}
        >
          <section className="section" id="introduction">
            <h2>Introduction</h2>
            <p>
              As an international student from Taiwan currently pursuing my studies at the University of California, Santa Cruz, I am enthusiastically seeking opportunities to apply my passion for technology and problem-solving in a professional setting through an internship. My academic journey has allowed me to delve deeply into the realms of Java and Python 3, while also expanding my programming toolkit by learning C and C++ through my coursework. I thrive on tackling complex challenges, which is why I regularly participate in LeetCode contests, honing my coding skills and analytical thinking. Outside the digital world, I find joy and excitement in skiing, embracing challenges of a different nature. I am open to both paid and unpaid internship opportunities, eager to contribute my skills and learn from real-world experiences in the tech industry.
            </p>
          </section>
          <section className="section" id="courses">
            <h2>Taken Courses</h2>
            <p>*Upper division courses cannot be transferred. Have to re-take some courses again</p>
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
                  : Using C and C++ to make linked list, red black tree, and graph ADT, with BFS, DFS, binary search algorithms
                </li>
                <li>
                  CSE 120 Computer Architecture: Learning micro architecture, pipeline, cache, multi-thread, and data hazard... etc
                </li>
                <li>
                  STAT 131 Introduction to Probability Theory: Understand gamma function, beta distribution, poisson process, cumulative distribution function, and the central limit theorem ... etc
                </li>
              </ul>
            </div>
            <div>
              <h3>At Washington State University</h3>
              <ul>
                <li>MATH 220 Introductory Linear Algebra</li>
                <li>MATH 216 Discrete Structures</li>
                <li>
                  CPT_S 233 Advanced Data Structures Java: red-black tree, various sorting algorithms using Java
                </li>
                <li>CPT_S 260 Intro to Computer Architecture</li>
                <li>
                  CPT_S 317 Automata and Formal Languages: DFA, NFA, context-free grammar, Turing machine, and pumping-lemma.
                </li>
                <li>
                  CPT_S 322 Software Engineering I: Worked in a group to develop the project, Studengage, and learn the software design cycle and OOP properties
                </li>
                <li>CPT_S 355 Programming Language Design</li>
                <li>CPT_S 370 Systems Programming Java</li>
              </ul>
            </div>
          </section>
          <section className="section" id="leetcode">
            <h2>My Leetcode Progress</h2>
            <ul className="image-list" style={{ padding: 0, listStyle: 'none', display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <li>
                <img width="30%" alt="leetcode solved" src="/pics/leetcodesolvedproblem02072024.png" />
              </li>
              <li>
                <img width="60%" alt="contest rating" src="/pics/ContestRating2024-02-07.png" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
