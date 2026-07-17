import React from "react";
import { Link } from "react-router-dom";
import InkUnderline from "../components/InkUnderline.jsx";

export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">404</span>
      <h1><InkUnderline>Page not found</InkUnderline></h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 24 }}>
        The page you're looking for doesn't exist, or the post may have moved.
      </p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div>
  );
}
