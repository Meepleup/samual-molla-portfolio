import styles from "./Hero.module.css";
import background from "../../../../assets/images/background.png";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles.overlay} />

        <div className={styles.content}>
          <p className={styles.greeting}>Hello</p>

          <h1 className={styles.title}>
            I'm Samual Full-Stack Web Developer
            <br />
            <span>| Mechanical Engineer</span>
          </h1>

          <a href="#contact" className={styles.button}>
            🚀 Start Your Digital Transformation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
