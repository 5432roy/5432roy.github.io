import React from 'react';

const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <div className="content-container">
        <section className="section" id="introduction">
          <h2>Introduction</h2>
          <p>
            I’m a driven computer science professional and recent graduate from the University of California, Santa Cruz, proudly representing my international roots from Taiwan. My academic journey—complemented by a Dean’s Award Scholarship—has helped me build a strong foundation in Java, Python, C, and C++, while my regular participation in LeetCode contests has sharpened my analytical and problem-solving skills.
          </p>
          <p>
            Through hands-on experiences such as a Software Engineer Internship at NextLabs and tutoring in computer architecture, I have developed a practical, results-oriented approach to tackling complex challenges. Whether I’m innovating with Unity mods or fine-tuning deep learning models, I am eager to leverage my technical expertise and creative mindset in dynamic, real-world projects.
          </p>
        </section>
          <section className="section" id="work-experience">
            <h2>Work Experience</h2>
            <ul>
              <li>
                <strong>Software Engineer Intern</strong> at <em>NextLabs</em> (Jun 2024 – Dec 2024)
                <ul>
                  <li>Expanded support of the company’s key product, SkyDRM, to Perforce and LabVIEW using Visual Studio, Jenkins, and Windows API.</li>
                  <li>Identified and mitigated a major data security issue with SkyDRM on Windows systems.</li>
                  <li>Removed build dependencies among Visual Studio projects, reducing build time by 60%.</li>
                  <li>Developed a C++ program integrated with a REST API for enhanced connectivity with an Apache Tomcat server.</li>
                </ul>
              </li>
              <li>
                <strong>Computer Architecture Group Tutor</strong> at <em>CSE 120</em> (Mar 2024 – Jun 2024)
                <ul>
                  <li>Taught 5–10 students weekly for 6 hours.</li>
                  <li>Covered topics including parallel processing and combinational/sequential digital components.</li>
                </ul>
              </li>
            </ul>
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
            <ul className="image-list">
              <li>
                <img alt="leetcode solved" src="leetcodesolvedproblem02072024.png" />
              </li>
              <li>
                <img alt="contest rating" src="ContestRating2024-02-07.png" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
