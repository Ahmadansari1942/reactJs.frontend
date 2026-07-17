import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogs, categoryList } from "../data/blogs.js";
import BlogCard from "../components/BlogCard.jsx";
import Pagination from "../components/Pagination.jsx";
import InkUnderline from "../components/InkUnderline.jsx";
import { SearchIcon, ArrowLeftIcon } from "../components/Icons.jsx";

const PER_PAGE = 9;

export default function CategoryPage() {
  const { name } = useParams();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [query, name]);

  const categoryName = categoryList.find(
    (c) => c.toLowerCase() === decodeURIComponent(name || "").toLowerCase()
  );

  const filtered = useMemo(() => {
    if (!categoryName) return [];
    const q = query.trim().toLowerCase();
    return blogs.filter((post) => {
      if (post.category !== categoryName) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [categoryName, query]);

  if (!categoryName) {
    return <Navigate to="/categories" replace />;
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageSafe = Math.min(page, totalPages);
  const paged = filtered.slice((pageSafe - 1) * PER_PAGE, pageSafe * PER_PAGE);

  return (
    <section className="container">
      <div style={{ padding: "40px 0 10px" }}>
        <Link to="/categories" className="back-link">
          <ArrowLeftIcon style={{ width: 15, height: 15 }} /> All categories
        </Link>
        <h1><InkUnderline>{categoryName}</InkUnderline></h1>
      </div>

      <div className="controls">
        <div className="search-box">
          <SearchIcon />
          <input
            type="search"
            placeholder={`Search in ${categoryName}…`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={`Search in ${categoryName}`}
          />
        </div>
      </div>

      <p className="results-count">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
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
          <p>Try a different search term.</p>
        </div>
      )}

      <Pagination page={pageSafe} totalPages={totalPages} onChange={setPage} />
    </section>
  );
}
