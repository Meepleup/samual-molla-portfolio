import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <p className={styles.text}>
          I am a passionate <strong>Full-Stack Web Developer</strong> and
          <strong> Mechanical Engineer</strong>. I specialize in building
          modern, responsive, and high-performance websites and digital
          solutions for individuals and businesses.
        </p>

        <p className={styles.text}>
          With strong experience in web development, e-commerce, and system
          design, I focus on delivering clean code, excellent user experience,
          and reliable solutions that help clients grow online.
        </p>
      </div>
    </section>
  );
}

export default About;
