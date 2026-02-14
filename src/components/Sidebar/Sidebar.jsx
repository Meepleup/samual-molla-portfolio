import styles from "./Sidebar.module.css";
import navLinks from "../Navbar/navLinks";
import profile from "../../assets/images/profile.jpg";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src={profile} alt="Samual Molla" />
        <h2>Samual Molla</h2>
      </div>

      <ul className={styles.menu}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
