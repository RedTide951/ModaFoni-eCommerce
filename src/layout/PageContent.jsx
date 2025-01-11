import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageContent = ({ children }) => {
  return (
    <div id="PageContent-container">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default PageContent;
