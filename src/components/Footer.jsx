import React from "react";
import { Link } from "react-router-dom";
import { SITE, CONTACT } from "../config.js";
import { categoryList } from "../data/blogs.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{SITE.name}</div>
            <p style={{ color: "var(--ink-soft)", maxWidth: 320, fontSize: "0.92rem" }}>
              {SITE.description}
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Popular Categories</h4>
            <ul>
              {categoryList.slice(0, 5).map((c) => (
                <li key={c}>
                  <Link to={`/category/${encodeURIComponent(c)}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {SITE.name}. Built with React.</span>
          <span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            {" · "}
            {CONTACT.phoneDisplay}
          </span>
        </div>
      </div>
    </footer>
  );
}
