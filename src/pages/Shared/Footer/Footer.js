import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <a href="/showroom/">Gallery</a>
          </li>
          <li>
            <a href="/stories/">Racing</a>
          </li>
          <li>
            <a href="/design_technology/">Products</a>
          </li>
          <li>
            <a href="/business/">Design＆Technology</a>
          </li>
          <li>
            <a href="/about/">Brand Slogan</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/showroom/">News</a>
          </li>
          <li>
            <a href="/stories/">Stories</a>
          </li>
          <li>
            <a href="/design_technology/">Corporate Governance</a>
          </li>
          <li>
            <a href="/business/">Industrial</a>
          </li>
          <li>
            <a href="/about/">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/showroom/">Overview</a>
          </li>
          <li>
            <a href="/stories/">Stock Quotes</a>
          </li>
          <li>
            <a href="/design_technology/">Mobility</a>
          </li>
          <li>
            <a href="/business/">International Cooperation</a>
          </li>
          <li>
            <a href="/about/">IR Calendar</a>
          </li>
        </ul>
      </div>
      <p>© Yamaha Motor Co., Ltd.</p>
      <div></div>
    </footer>
  );
};

export default Footer;
