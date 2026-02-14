import styles from "./Sidebar.module.css";
import profileImg from "../../assets/images/profile.jpg";
import navLinks from "../Navbar/navLinks";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src={profileImg} alt="Samual Molla" />
        <h2>Samual Molla</h2>
      </div>

      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
