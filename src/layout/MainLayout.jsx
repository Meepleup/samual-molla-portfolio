import React from "react";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="page">
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;