import styles from "./Portfolio.module.css";
import { projects } from "../../../../data/projects";

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Recent Works</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
              <div className={styles.buttons}>
                <a href={project.github} target="_blank">Github</a>
                <a href={project.live} target="_blank">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
