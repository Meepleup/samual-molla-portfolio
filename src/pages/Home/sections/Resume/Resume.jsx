import styles from "./Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>

      <h2>Resume</h2>

      <p>Download my professional resume.</p>

      <a href="/cv.pdf" download>
        Download CV
      </a>

    </section>
  );
}

export default Resume;
