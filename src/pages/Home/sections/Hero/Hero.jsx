import { TypeAnimation } from "react-type-animation";
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
          <h1 className={styles.greeting}>Hello</h1>
          <h2 className={styles.title}>
            I'm Samual{" "}
            <span className={styles.typingWrapper}>
              <TypeAnimation
                sequence={[
  500,
  "Full-Stack Web Developer",
  1500,
  "Mechanical Engineer",
  1500,
]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          <a href="#contact" className={styles.button}>
            🚀 Start Your Digital Transformation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

