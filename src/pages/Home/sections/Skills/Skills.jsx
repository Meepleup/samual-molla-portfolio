import styles from "./Skills.module.css";
import { skills } from "../../../../data/skills";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.grid}>
          {skills.map((group, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>
                {group.category}
              </h3>

              <div className={styles.skillList}>
                {group.items.map((item, i) => (
                  <div key={i} className={styles.skillItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
