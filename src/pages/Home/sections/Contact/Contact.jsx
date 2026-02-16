import { useState } from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.grid}>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className={styles.field}>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className={styles.field}>
              <textarea required rows="4"></textarea>
              <label>Message</label>
            </div>
            <button
              className={`${styles.button} ${status}`}
              disabled={status === "loading"}
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "✓ Sent Successfully"}
              {status === "idle" && "Send Message"}
            </button>
          </form>
          {/* CONTACT INFO */}
          <div className={styles.info}>
            <div className={styles.card}>
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
              </div>
            </div>
            <div className={styles.card}>
              <FaPhone />
              <div>
                <h4>Phone</h4>
              </div>
            </div>
            <div className={styles.card}>
              <FaEnvelope />
              <div>
                <h4>Email</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

