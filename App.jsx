import "./App.css";

function App() {
  const profileImage = "/divya-mishra.jpg";

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          DIVYA MISHRA
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* ================= HOME ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hello">
            HELLO, I'M
          </p>

          <h1>
            DIVYA
            <span>MISHRA</span>
          </h1>

          <h2>
            MCA Student • Aspiring Software Developer
          </h2>

          <div className="tech-line">
            <span>JavaScript</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Web Development</span>
          </div>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* ================= HOME PHOTO ================= */}

        <div className="hero-visual">

          <div className="photo-glow"></div>

          <div className="hero-photo">

            <img
              src={profileImage}
              alt="Divya Mishra"
            />

          </div>


        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section"
        id="about"
      >

        <div className="section-title">

          <span>01</span>

          <h2>
            About Me
          </h2>

        </div>


        <div className="about-card">


          {/* ABOUT PHOTO */}

          <div className="about-photo">

            <div className="photo-placeholder">

              <img
                src={profileImage}
                alt="Divya Mishra"
              />

            </div>

          </div>


          {/* ABOUT CONTENT */}

          <div className="about-content">

            <h3>
              Aspiring Software Developer
            </h3>

            <p>
              I am Divya Mishra, an MCA student learning software development
              and building my skills in modern web technologies.
            </p>

            <p>
              I am looking for opportunities to apply what I learn, gain
              practical experience, and keep growing as a developer.
            </p>


            <div className="personal-info">

              <div>
                <strong>Name</strong>
                <span>
                  Divya Mishra
                </span>
              </div>

              <div>
                <strong>Location</strong>
                <span>
                  Kanpur, Uttar Pradesh
                </span>
              </div>

              <div>
                <strong>Email</strong>
                <span>
                  divyamishra914@gmail.com
                </span>
              </div>

              <div>
                <strong>Phone</strong>
                <span>
                  9555704527
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        className="section"
        id="skills"
      >

        <div className="section-title">

          <span>02</span>

          <h2>
            Skills
          </h2>

        </div>


        <div className="skills-grid">


          <div className="skill-card">

            <h3>
              Frontend
            </h3>

            <div className="skill-list">

              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Backend
            </h3>

            <div className="skill-list">

              <span>Node.js</span>
              <span>PHP</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Databases
            </h3>

            <div className="skill-list">

              <span>MongoDB</span>
              <span>Oracle</span>
              <span>MySQL</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Programming Languages
            </h3>

            <div className="skill-list">

              <span>JavaScript</span>
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>C++</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Tools
            </h3>

            <div className="skill-list">

              <span>Git</span>
              <span>GitHub</span>
              <span>NetBeans</span>
              <span>JDBC</span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="section"
        id="projects"
      >

        <div className="section-title">

          <span>03</span>

          <h2>
            Projects
          </h2>

        </div>


        {/* GRAMHEALTH AI */}

        <div className="project-card">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <p className="project-category">
              AI • Healthcare • React
            </p>

            <h3>
              GramHealth AI
            </h3>

            <p>
              An AI-powered rural healthcare assistant designed to provide
              first-level healthcare guidance for rural and semi-urban areas.
            </p>

            <ul>

              <li>
                Symptom Checker
              </li>

              <li>
                AI Health Chatbot
              </li>

              <li>
                Nearby Hospital / Clinic Locator
              </li>

              <li>
                Medicine Information
              </li>

              <li>
                Health Records
              </li>

              <li>
                Multilingual Healthcare Support
              </li>

            </ul>


            <div className="technology-tags">

              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>AI</span>
              <span>Leaflet</span>

            </div>

          </div>

        </div>


        {/* PLACEMENT MANAGEMENT */}

        <div className="project-card">

          <div className="project-number">
            02
          </div>

          <div className="project-content">

            <p className="project-category">
              Java • Web Application • Database
            </p>

            <h3>
              Placement Management System
            </h3>

            <p>
              A web-based placement management system developed using
              Advanced Java technologies for managing placement-related
              information.
            </p>

            <ul>

              <li>
                JSP & Servlets
              </li>

              <li>
                MySQL Database
              </li>

              <li>
                JDBC Connectivity
              </li>

              <li>
                NetBeans
              </li>

            </ul>


            <div className="technology-tags">

              <span>Java</span>
              <span>JSP</span>
              <span>Servlets</span>
              <span>JDBC</span>
              <span>MySQL</span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section"
        id="experience"
      >

        <div className="section-title">

          <span>04</span>

          <h2>
            Experience
          </h2>

        </div>


        <div className="experience-card">

          <div className="experience-icon">
            DA
          </div>

          <div>

            <p className="project-category">
              Virtual Experience
            </p>

            <h3>
              Deloitte Australia
            </h3>

            <h4>
              Data Analytics Virtual Experience
            </h4>

            <p className="experience-description">
              Completed a Data Analytics job simulation through Forage,
              gaining exposure to data analysis and professional
              problem-solving tasks.
            </p>

            <span className="experience-tag">
              Forage
            </span>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        className="section"
        id="education"
      >

        <div className="section-title">

          <span>05</span>

          <h2>
            Education
          </h2>

        </div>


        <div className="timeline">


          {/* MCA */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <h3>
                Master of Computer Applications
              </h3>

              <h4>
                Pranveer Singh Institute of Technology, Kanpur
              </h4>

              <p>
                Currently pursuing MCA.
              </p>

            </div>

          </div>


          {/* BCA */}

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <h3>
                Bachelor of Computer Applications
              </h3>

              <h4>
                S.N. Sen B.V.P.G. College, Kanpur
              </h4>

              <p>
                Bachelor of Computer Applications completed in 2024.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section
        className="section"
        id="certifications"
      >

        <div className="section-title">

          <span>06</span>

          <h2>
            Certifications
          </h2>

        </div>


        <div className="certification-grid">


          <div className="certificate-card">

            <span>01</span>

            <h3>
              Advanced Java Certification
            </h3>

            <p>
              UPTEC
            </p>

          </div>


          <div className="certificate-card">

            <span>02</span>

            <h3>
              Oracle Certified Foundations Associate
            </h3>

            <p>
              Oracle
            </p>

          </div>


          <div className="certificate-card">

            <span>03</span>

            <h3>
              Google Cloud Fundamentals
            </h3>

            <p>
              Google Cloud • Simplilearn SkillUp
            </p>

          </div>


          <div className="certificate-card">

            <span>04</span>

            <h3>
              Data Analytics Job Simulation
            </h3>

            <p>
              Deloitte
            </p>

          </div>


          <div className="certificate-card">

            <span>05</span>

            <h3>
              Cyber Security Job Simulation
            </h3>

            <p>
              Deloitte
            </p>

          </div>


          <div className="certificate-card">

            <span>06</span>

            <h3>
              The Quiet Power Quiz
            </h3>

            <p>
              Mahindra Rise
            </p>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}

      <section className="section">

        <div className="section-title">

          <span>07</span>

          <h2>
            Achievements
          </h2>

        </div>


        <div className="achievement-card">

          <div className="achievement-number">
            50+
          </div>

          <div>

            <h3>
              LeetCode Problems Solved
            </h3>

            <p>
              Solved 50+ programming problems on LeetCode while practicing
              problem-solving and Data Structures & Algorithms.
            </p>

            <a
              href="https://leetcode.com/u/Divyamishra1708/"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              View LeetCode
            </a>

          </div>

        </div>

      </section>


      {/* ================= STRENGTHS ================= */}

      <section className="section">

        <div className="section-title">

          <span>08</span>

          <h2>
            Strengths
          </h2>

        </div>


        <div className="strength-grid">


          <div className="strength-card">

            <div>
              01
            </div>

            <h3>
              Hardworking
            </h3>

            <p>
              Dedicated to learning new technologies and improving technical
              skills.
            </p>

          </div>


          <div className="strength-card">

            <div>
              02
            </div>

            <h3>
              Dedicated
            </h3>

            <p>
              Committed to completing tasks and continuously developing
              professional skills.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="section-title">

          <span>09</span>

          <h2>
            Contact Me
          </h2>

        </div>


        <div className="contact-container">


          <div className="contact-intro">

            <p className="hello">
              LET'S CONNECT
            </p>

            <h2>
              Let's build something
              <span> useful together.</span>
            </h2>

            <p>
              I am open to learning opportunities where I can contribute,
              gain experience, and grow as a software developer.
            </p>

          </div>


          <div className="contact-details">

            <a href="mailto:divyamishra914@gmail.com">

              <strong>
                Email
              </strong>

              <span>
                divyamishra914@gmail.com
              </span>

            </a>


            <a href="tel:9555704527">

              <strong>
                Phone
              </strong>

              <span>
                9555704527
              </span>

            </a>


            <div>

              <strong>
                Location
              </strong>

              <span>
                Kanpur, Uttar Pradesh
              </span>

            </div>

          </div>

        </div>


        {/* SOCIAL LINKS */}

        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/divya-mishra-7496aa290"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/divyamishra91422-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Divyamishra1708/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          DIVYA MISHRA
        </div>

        <p>
          MCA Student • Aspiring Software Developer
        </p>

        <p className="copyright">
          © 2026 Divya Mishra. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;