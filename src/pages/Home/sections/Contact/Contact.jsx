import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <h2>Contact</h2>

      <form>

        <input type="text" placeholder="Name" required />

        <input type="email" placeholder="Email" required />

        <textarea placeholder="Message" required />

        <button>Send Message</button>

      </form>

    </section>
  );
}

export default Contact;
