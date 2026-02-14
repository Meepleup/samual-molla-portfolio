import styles from "./Skills.module.css";
import { skills } from "../../../../data/skills";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
