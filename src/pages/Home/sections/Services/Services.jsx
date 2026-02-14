import styles from "./Services.module.css";
import { FaCode, FaShoppingCart, FaServer, FaPlug, FaPaintBrush, FaCogs } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Services</h2>

        <p className={styles.subtitle}>
          I am a collaborative and detail-oriented professional, dedicated to delivering
          high-quality solutions through clear communication, strong teamwork,
          and proven technical expertise.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaCode className={styles.icon} />
            <h3>Web Development</h3>
            <p>Modern, fast, and responsive websites using HTML, CSS, JavaScript, and React.</p>
          </div>

          <div className={styles.card}>
            <FaShoppingCart className={styles.icon} />
            <h3>E-Commerce Solutions</h3>
            <p>Shopify and custom online stores with secure payments and optimized UX.</p>
          </div>

          <div className={styles.card}>
            <FaServer className={styles.icon} />
            <h3>Backend Development</h3>
            <p>Scalable server-side applications using Node.js, Express, and MongoDB.</p>
          </div>

          <div className={styles.card}>
            <FaPlug className={styles.icon} />
            <h3>API Integration</h3>
            <p>REST API development and third-party service integration.</p>
          </div>

          <div className={styles.card}>
            <FaPaintBrush className={styles.icon} />
            <h3>UI / UX Design</h3>
            <p>Clean, user-friendly interfaces focused on usability and accessibility.</p>
          </div>

          <div className={styles.card}>
            <FaCogs className={styles.icon} />
            <h3>System Design</h3>
            <p>Planning and building scalable systems for long-term growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
