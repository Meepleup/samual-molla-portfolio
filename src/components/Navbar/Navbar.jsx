import { useState } from "react";
import styles from "./Navbar.module.css";
import navLinks from "./navLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.mobileNav}>
        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.active : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div
        className={`${styles.sideMenu} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
