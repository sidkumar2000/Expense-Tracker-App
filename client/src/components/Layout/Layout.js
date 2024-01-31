import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Header />
      <div className="content container mt-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
