import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Pages/HomePage";
import HeadBar from "../components/HeadBar";

const PageContent = ({ children }) => {
  return (
    <div id="PageContent-container">
      <HeadBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContent;
