import styles from "./Services.module.css";

const services = [
  "Web Development",
  "E-Commerce",
  "Backend Systems",
  "API Integration",
  "UI / UX Design",
  "System Architecture",
];

function Services() {
  return (
    <section id="services" className={styles.services}>

      <h2>Services</h2>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service}>{service}</div>
        ))}
      </div>

    </section>
  );
}

export default Services;
