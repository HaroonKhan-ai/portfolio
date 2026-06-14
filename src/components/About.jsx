import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-card">
          <h3> Who I Am</h3>
          <p>
            I am a frontend developer focused on building responsive and
            interactive web applications using React and JavaScript.
          </p>
        </div>

        <div className="about-card">
          <h3> What I Do</h3>
          <p>
            I build small projects like weather apps, to-do lists to improve my
            practical development skills.
          </p>
        </div>

        <div className="about-card">
          <h3> My Goal</h3>
          <p>
            I am currently looking for an internship where I can gain real-world
            experience and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
