import styles from "./Footer.module.css";
import socials from "../../data/socials";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Left */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} Samual Molla. All rights reserved.
        </p>

        {/* Center - Social icons */}
        <div className={styles.socials}>
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Right - Legal links */}
        <div className={styles.links}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
