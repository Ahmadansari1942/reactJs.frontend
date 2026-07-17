import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "./Icons.jsx";
import { useLike } from "../hooks/useLike.js";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ post }) {
  const { liked, count, toggleLike } = useLike(post.id, post.baseLikes);

  return (
    <article className="card">
      <Link to={`/blog/${post.slug}`} className="card-media">
        <span className="card-tag">{post.category}</span>
        <img src={post.image} alt={post.title} loading="lazy" />
      </Link>
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="card-excerpt">{post.excerpt}</p>
        <div className="meta-row">
          <span>{post.author}</span>
          <span className="meta-dot">·</span>
          <span>{formatDate(post.date)}</span>
          <span className="meta-dot">·</span>
          <span>{post.readTime} min read</span>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              toggleLike();
            }}
            aria-pressed={liked}
            aria-label={liked ? "Remove like" : "Like this post"}
          >
            <HeartIcon /> {count}
          </button>
          <Link to={`/blog/${post.slug}`} className="read-more">
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
