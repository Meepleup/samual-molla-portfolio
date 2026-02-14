import styles from "./Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <h2>Resume</h2>

        <p>
          Detailed professional resume to view more about my experience.
        </p>

        <a
          href="/resume.pdf"
          className={styles.button}
          download
        >
          ⬇ Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
