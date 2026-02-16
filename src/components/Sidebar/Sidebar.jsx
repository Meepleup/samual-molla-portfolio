import styles from "./Sidebar.module.css";
import profile from "../../assets/images/profile.jpg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={profile}
        alt="Samual Molla"
        className={styles.avatar}
      />
      <div className={styles.name}>
        Samual Molla
      </div>
      <nav className={styles.nav}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#skills" className={styles.link}>Skills</a>
        <a href="#services" className={styles.link}>Services</a>
        <a href="#portfolio" className={styles.link}>Portfolio</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
