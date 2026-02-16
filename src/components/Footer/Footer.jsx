import styles from "./Footer.module.css";
import socials from "../../data/socials";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glass}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <h2 className={styles.logo}>Samual Molla</h2>
            <p className={styles.tagline}>
              Building modern, intelligent, and scalable digital experiences.
            </p>
          </div>
          {/* Social Icons */}
          <div className={styles.socials}>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.icon} ${styles["icon" + social.id]}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Samual Molla. Crafted with precision.
          </p>
          <div className={styles.links}>
            <Link to="/impressum">Impressum</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
