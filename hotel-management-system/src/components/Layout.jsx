import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the whole viewport is covered
      }}
    >
      <Navbar />
      {/* <main>{children}</main> */}

      <main
        style={{
          flex: 1,
          backgroundColor: "lightblue",
          paddingTop: "2rem",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>{children}</div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
