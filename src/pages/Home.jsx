import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs, categoryList } from "../data/blogs.js";
import BlogCard from "../components/BlogCard.jsx";
import Pagination from "../components/Pagination.jsx";
import InkUnderline from "../components/InkUnderline.jsx";
import { SearchIcon } from "../components/Icons.jsx";

const PER_PAGE = 9;

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query, activeCategory]);

  const featured = blogs[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogs.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const showFeatured = !query && activeCategory === "All";
  const gridSource = showFeatured ? filtered.filter((p) => p.id !== featured.id) : filtered;

  const totalPages = Math.max(1, Math.ceil(gridSource.length / PER_PAGE));
  const pageSafe = Math.min(page, totalPages);
  const paged = gridSource.slice((pageSafe - 1) * PER_PAGE, pageSafe * PER_PAGE);

  return (
    <>
      {showFeatured && (
        <section className="hero">
          <div className="container">
            <div className="hero-label">
              <span className="eyebrow">Featured story</span>
              <span className="line" />
            </div>
            <div className="featured-card">
              <div className="featured-media">
                <span className="featured-tag">{featured.category}</span>
                <img src={featured.image} alt={featured.title} />
              </div>
              <div>
                <h1 className="featured-title">
                  <InkUnderline>{featured.title.split(":")[0]}</InkUnderline>
                  {featured.title.includes(":") ? `: ${featured.title.split(":").slice(1).join(":")}` : ""}
                </h1>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <div className="meta-row" style={{ margin: "16px 0 22px" }}>
                  <span>{featured.author}</span>
                  <span className="meta-dot">·</span>
                  <span>{formatDate(featured.date)}</span>
                  <span className="meta-dot">·</span>
                  <span>{featured.readTime} min read</span>
                </div>
                <Link to={`/blog/${featured.slug}`} className="btn btn-primary">
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container">
        <div className="controls">
          <div className="search-box">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search articles, topics, tags…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
          <div className="pills">
            {["All", ...categoryList].map((c) => (
              <button
                key={c}
                className={`pill ${activeCategory === c ? "active" : ""}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="results-count">
          {gridSource.length} {gridSource.length === 1 ? "article" : "articles"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>

        {paged.length > 0 ? (
          <div className="blog-grid">
            {paged.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No articles found</h3>
            <p>Try a different search term or pick another category.</p>
          </div>
        )}

        <Pagination page={pageSafe} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  );
}
