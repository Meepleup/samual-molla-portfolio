import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
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
      {!isMobile && <Sidebar />}
      {isMobile && <Navbar />}

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
