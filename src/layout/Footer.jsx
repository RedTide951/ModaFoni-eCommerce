import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col gap-6 p-20">
      <div id="get-in-touch-container">
        <h3 className="font-bold text-2xl">Get in Touch</h3>
        <p>Quick borwn foxxxxx</p>
        <div className="flex gap-4">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div id="company-info-container">
        <h3>Company Info</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
      <div id="features-container">
        <h3>Features</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
      <div id="resources-container">
        <h3>Resources</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
      <div id="copyright-container">
        <p>&copy; 2021 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
