import React from "react";
import { blogs, categoryList, authorList } from "../data/blogs.js";
import InkUnderline from "../components/InkUnderline.jsx";
import { SITE } from "../config.js";

function initials(name) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function About() {
  const totalMinutes = blogs.reduce((sum, b) => sum + b.readTime, 0);

  const stats = [
    { num: blogs.length, label: "Articles" },
    { num: categoryList.length, label: "Categories" },
    { num: authorList.length, label: "Contributors" },
    { num: `${Math.round(totalMinutes / 60)}h`, label: "Reading time" },
  ];

  return (
    <section className="container">
      <div className="about-hero">
        <span className="eyebrow">About {SITE.name}</span>
        <h1><InkUnderline>Stories worth reading</InkUnderline></h1>
        <p>{SITE.description} We publish short, honest, practical writing across ten
          categories — no filler, no clickbait, just articles worth the few minutes
          they ask for.</p>
      </div>

      <div className="stats-row">
        {stats.map((s) => (
          <div className="stat-block" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="section-heading">
        <h2>Who writes here</h2>
      </div>
      <div className="authors-grid">
        {authorList.map((a) => {
          const count = blogs.filter((b) => b.author === a.name).length;
          return (
            <div className="author-card" key={a.name}>
              <div className="author-avatar">{initials(a.name)}</div>
              <h3 style={{ margin: "0 0 4px" }}>{a.name}</h3>
              <p>{a.bio}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
                {count} articles
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
