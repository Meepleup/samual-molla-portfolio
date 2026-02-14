import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import navLinks from "./navLinks";
import profileImg from "../../assets/images/profile.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>

          {/* Hamburger (Mobile Only) */}
          <div
            className={`${styles.hamburger} ${
              menuOpen ? styles.active : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Slide Menu */}
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            
            {/* Mobile Profile */}
            <div className={styles.mobileProfile}>
              <img src={profileImg} alt="Samual Molla" />
              <h3>Samual Molla</h3>
            </div>

            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Dark Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </>
  );
}

export default Navbar;
