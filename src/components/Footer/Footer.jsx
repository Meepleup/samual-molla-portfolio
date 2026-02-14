import styles from "./Footer.module.css";
import socials from "../../data/socials";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Samual Molla. All rights reserved.</p>

        <div className={styles.socials}>
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

