import React from "react";
import { Link } from "react-router-dom";
import { blogs, categoryList } from "../data/blogs.js";
import InkUnderline from "../components/InkUnderline.jsx";

export default function Categories() {
  const cards = categoryList.map((name) => {
    const posts = blogs.filter((b) => b.category === name);
    return { name, count: posts.length, image: posts[0]?.image };
  });

  return (
    <section className="container">
      <div className="about-hero">
        <span className="eyebrow">Browse by topic</span>
        <h1><InkUnderline>Categories</InkUnderline></h1>
        <p>Ten shelves, one hundred and ten articles. Pick whatever you're in the mood for.</p>
      </div>

      <div className="blog-grid" style={{ paddingBottom: 60 }}>
        {cards.map((c) => (
          <Link key={c.name} to={`/category/${encodeURIComponent(c.name)}`} className="card">
            <div className="card-media">
              <span className="card-tag">{c.count} posts</span>
              <img src={c.image} alt={c.name} loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{c.name}</h3>
              <p className="card-excerpt">Explore all {c.count} articles in {c.name}.</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
