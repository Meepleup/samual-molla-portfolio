import styles from "./Resume.module.css";

function Resume() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <h2>Resume</h2>
        <p>View or download my professional resume.</p>

        <div className={styles.buttons}>
          {/* View Button */}
          <a
            href="/Lebenslauf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            👁 View Resume
          </a>

          {/* Download Button */}
          <a
            href="/Lebenslauf.pdf"
            download="Samual-Molla-Resume.pdf"
            className={styles.button}
          >
            ⬇ Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;
