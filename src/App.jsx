import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const navItems = ['home', 'skills', 'projects', 'resume']

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-brand">ST</div>
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Shivam <span className="highlight">Tiwari</span></h1>
          <p className="hero-subtitle">Software Developer | MERN Stack | Machine Learning</p>
          <div className="hero-contact">
            <a href="mailto:shivamptiwari55812@gmail.com">shivamptiwari55812@gmail.com</a>
          
          </div>
          <div className="hero-links">
            <a href="https://github.com/ShivamT-2625" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shivamtiwari-028597289/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
            <button className="btn-secondary" onClick={() => scrollToSection('resume')}>Resume</button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="about-text">Fresher Software Developer skilled in full-stack development using the MERN stack, with experience in building backend services using Flask, Express and Django. Strong foundation in Python and JavaScript, with working knowledge of machine learning concepts and data processing.</p>
          <p className="about-text">Interested in developing scalable, data-driven applications across web and backend systems.</p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">MERN Stack</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">Scikit-learn</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Expertise</h3>
            <div className="skill-tags">
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">Full Stack</span>
              <span className="skill-tag">ML</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-accent"></div>
            <h3>Distributed Task Execution System</h3>
            <p className="project-subtitle">WebSocket-Based Architecture</p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>WebSockets</span>
              <span>UUID</span>
            </div>
            <ul className="project-points">
              <li>Designed distributed task execution system</li>
              <li>Worker registration with unique node ID</li>
              <li>Real-time bidirectional communication</li>
              <li>System health monitoring</li>
            </ul>
          </div>
          <div className="project-card">
            <div className="project-accent accent-secondary"></div>
            <h3>XAI for Stress Prediction</h3>
            <p className="project-subtitle">Machine Learning + Explainable AI</p>
            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>scikit-learn</span>
            </div>
            <ul className="project-points">
              <li>ML model to predict stress levels</li>
              <li>Feature importance visualization</li>
              <li>Flask backend for predictions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3>Software Developer Intern</h3>
            <span className="company">@ EazyByts</span>
            <span className="duration">June 2025 - July 2025</span>
          </div>
          <ul className="experience-points">
            <li>Developed backend functionalities and APIs</li>
            <li>Integrated frontend and backend components</li>
            <li>Identified and fixed bugs</li>
            <li>Contributed to feature development</li>
          </ul>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievement-card">
          <h3>Hackathon Experience</h3>
          <ul className="achievement-points">
            <li>Selected among 59 teams out of 2000+ applicants</li>
            <li>Built blockchain app in 24 hours</li>
            <li>Strong collaborative skills</li>
          </ul>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <div className="resume-display">
          <iframe src="/resume.pdf" title="Resume" />
          <div className="resume-actions">
            <a href="/resume.pdf" target="_blank" className="btn-primary">View Full</a>
            <a href="/resume.pdf" download="Shivam_Tiwari_Resume.pdf" className="btn-secondary">Download</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Shivam Tiwari | Software Developer</p>
      </footer>
    </div>
  )
}

export default App