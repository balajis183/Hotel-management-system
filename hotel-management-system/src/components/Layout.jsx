import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}) {
  return (
    <div>
      <Navbar />
      {/* <main>{children}</main> */}
      <main style={{ height: "80vh", backgroundColor:"lightblue" }}> {children}</main>

      <Footer/>
    </div>
  );
}

export default Layout;
