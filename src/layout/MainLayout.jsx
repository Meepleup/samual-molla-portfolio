import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./MainLayout.module.css";

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.layout}>

      {/* Sidebar Desktop */}
      {!isMobile && <Sidebar />}

      {/* Navbar Mobile */}
      {isMobile && <Navbar />}

      {/* Content + Footer Wrapper */}
      <div className={styles.page}>

        <main className={styles.content}>
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;
