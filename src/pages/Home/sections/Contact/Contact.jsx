import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <div className={styles.container}>

        {/* Title */}
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Feel free to contact me anytime
        </p>

        {/* Form */}
        <form className={styles.form}>

          <div className={styles.row}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            required
          />

          <button type="submit" className={styles.button}>
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className={styles.info}>

          <h3>Contact Info</h3>

          <p>
            <FaMapMarkerAlt className={styles.icon} />
            Adress
          </p>
          <p>
            <FaPhone className={styles.icon} />
            phone
          </p>
          <p>
            <FaEnvelope className={styles.icon} />
            Gmail
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;
