import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";

const PageContent = ({ children }) => {
  return (
    <div id="PageContent-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContent;
