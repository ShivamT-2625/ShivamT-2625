import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const navItems = ['intro', 'projects', 'skills', 'resume']

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
                {item === 'intro' ? 'HOME' : item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="intro" className="hero-section">
        <div className="hero-content">
          <div className="hero-tag">SOFTWARE DEVELOPER</div>
          <h1>SHIVAM <span className="highlight">TIWARI</span></h1>
          <p className="hero-subtitle">MERN Stack | Machine Learning | Full-Stack Development</p>
          <div className="hero-links">
            <a href="https://github.com/ShivamT-2625" target="_blank" rel="noopener noreferrer" className="social-link">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/shivamtiwari-028597289/" target="_blank" rel="noopener noreferrer" className="social-link">
              LINKEDIN
            </a>
            <a href="mailto:shivamptiwari55812@gmail.com" className="social-link">
              EMAIL
            </a>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>VIEW PROJECTS</button>
            <button className="btn-secondary" onClick={() => scrollToSection('resume')}>RESUME</button>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>PROJECTS</h2>
          <span className="section-tag">WHAT I BUILT</span>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <h3>DISTRIBUTED TASK EXECUTION</h3>
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
            <h3>RESPIRATORY DISORDER DETECTION</h3>
            <p className="project-subtitle">IoT-BASED MONITORING SYSTEM</p>
            <div className="project-tech">
              <span>DHT11</span>
              <span>MQ135</span>
              <span>MAX30102</span>
            </div>
            <ul className="project-points">
              <li>IoT-based environmental and health tracking</li>
              <li>Integrated DHT11, MQ135, MAX30102 sensors</li>
              <li>Real-time respiratory disorder detection</li>
              <li>Automated alert system for critical thresholds</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2>SKILLS</h2>
          <span className="section-tag">WHAT I KNOW</span>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>LANGUAGES</h3>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>FRAMEWORKS</h3>
            <div className="skill-tags">
              <span className="skill-tag">MERN Stack</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Express.js</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>TOOLS</h3>
            <div className="skill-tags">
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">DSA</span>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <div className="section-header">
          <h2>RESUME</h2>
          <span className="section-tag">DOWNLOAD</span>
        </div>
        <div className="resume-box">
          <p>GET THE FULL PICTURE</p>
          <div className="resume-actions">
            <a href="/resume.pdf" target="_blank" className="btn-primary">VIEW FULL</a>
            <a href="/resume.pdf" download="Shivam_Tiwari_Resume.pdf" className="btn-secondary">DOWNLOAD</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 SHIVAM TIWARI</p>
      </footer>
    </div>
  )
}

export default App
