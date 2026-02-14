import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="sectionContainer">
        <h2>About Me</h2>

        <p>
          I am a passionate Full-Stack Web Developer and Mechanical Engineer.
          I specialize in building modern, responsive, and high-performance
          websites and digital solutions.
        </p>

        <p>
          With strong experience in web development, e-commerce, and system
          design, I focus on delivering clean code and excellent user experience.
        </p>
      </div>
    </section>
  );
}

export default About;
