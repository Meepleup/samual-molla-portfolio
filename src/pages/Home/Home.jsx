import styles from "./Home.module.css";
import Meta from "../../seo/Meta";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";
import Portfolio from "./sections/Portfolio/Portfolio";
import Resume from "./sections/Resume/Resume";
import Contact from "./sections/Contact/Contact";

function Home() {
  return (
    <>
      <Meta
        title="Samual Molla | Full Stack Developer"
        description="Professional portfolio of Samual Molla - React & Full Stack Developer."
      />
      <main className={styles.home}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default Home;
