import styles from "./Portfolio.module.css";
import { projects } from "../../../../data/projects";

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>

      <h2>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.id} href={project.link}>

            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

          </a>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;
