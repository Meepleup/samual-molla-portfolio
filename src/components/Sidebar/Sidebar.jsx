import styles from "./Sidebar.module.css";
import profile from "../../assets/images/profile.jpg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        
        <div className={styles.profileImageWrapper}>
          <img src={profile} alt="Samual Molla" />
        </div>

        <h2>Samual Molla</h2>

      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
