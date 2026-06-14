import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        
        <section id="home" className="hero">
          <div className="right">
            <h1>Hi, I'm <span className="highlight">Haroon</span></h1>
            <h2>Frontend Developer (React)</h2>
            <p>
              I build simple, responsive web applications using JavaScript and
              React. Currently focused on improving my skills and looking for an
              internship.
            </p>
            <div className="buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
          </div>

          <div className="left">
            
              <img src="/haroon.jpeg" alt="Haroon's Profile" />
            
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block">
          <Projects />
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-block">
          <About />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="contact-card">
            <span>LET'S WORK TOGETHER</span>
            <h2>Interested in hiring me for an internship?</h2>
            <p>My inbox is always open. Drop me an email and I'll get back to you as soon as possible!</p>
            
            <h2>heroharoon784@gmail.com</h2>
            <a href="https://github.com/HaroonKhan-ai" target="_blank">GitHub</a>

          </div>
        </section>

      </div>
    </>
  );
}

export default App;