import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 mt-5 bg-dark">
      <Container>
        <div className="d-flex">
          <ul className="w-100 m-0 text-start list-inline">
            <li className="my-3">
              <a href="/showroom/" className="text-white text-decoration-none">
                Gallery
              </a>
            </li>
            <li className="my-3">
              <a href="/stories/" className="text-white text-decoration-none">
                Racing
              </a>
            </li>
            <li className="my-3">
              <a
                href="/design_technology/"
                className="text-white text-decoration-none"
              >
                Products
              </a>
            </li>
            <li className="my-3">
              <a href="/business/" className="text-white text-decoration-none">
                Design＆Technology
              </a>
            </li>
            <li className="my-3">
              <a href="/about/" className="text-white text-decoration-none">
                Brand Slogan
              </a>
            </li>
          </ul>
          <ul className="w-100 m-0 text-start list-inline">
            <li className="my-3">
              <a href="/showroom/" className="text-white text-decoration-none">
                News
              </a>
            </li>
            <li className="my-3">
              <a href="/stories/" className="text-white text-decoration-none">
                Stories
              </a>
            </li>
            <li className="my-3">
              <a
                href="/design_technology/"
                className="text-white text-decoration-none"
              >
                Corporate Governance
              </a>
            </li>
            <li className="my-3">
              <a href="/business/" className="text-white text-decoration-none">
                Industrial
              </a>
            </li>
            <li className="my-3">
              <a href="/about/" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
          </ul>
          <ul className="w-100 m-0 text-start list-inline">
            <li className="my-3">
              <a href="/showroom/" className="text-white text-decoration-none">
                Overview
              </a>
            </li>
            <li className="my-3">
              <a href="/stories/" className="text-white text-decoration-none">
                Stock Quotes
              </a>
            </li>
            <li className="my-3">
              <a
                href="/design_technology/"
                className="text-white text-decoration-none"
              >
                Mobility
              </a>
            </li>
            <li className="my-3">
              <a href="/business/" className="text-white text-decoration-none">
                International Cooperation
              </a>
            </li>
            <li className="my-3">
              <a href="/about/" className="text-white text-decoration-none">
                IR Calendar
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <p className="text-start pt-5 text-white">
          Copyright © 2022{" "}
          <span className="text-warning">Yamaha Motor Limited.</span> All Rights
          Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
