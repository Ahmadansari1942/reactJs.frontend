import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../data/blogs.js";
import BlogCard from "../components/BlogCard.jsx";
import { useLike } from "../hooks/useLike.js";
import { ArrowLeftIcon, HeartIcon, ShareIcon } from "../components/Icons.jsx";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const [copied, setCopied] = useState(false);

  if (!post) return <Navigate to="/404" replace />;

  const { liked, count, toggleLike } = useLike(post.id, post.baseLikes);
  const related = getRelatedBlogs(post);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the visible URL bar is the fallback */
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <div className="article-header">
            <Link to="/" className="back-link">
              <ArrowLeftIcon style={{ width: 15, height: 15 }} /> Back to all posts
            </Link>
            <span className="eyebrow">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="meta-row" style={{ marginTop: 16 }}>
              <span>{post.author}</span>
              <span className="meta-dot">·</span>
              <span>{formatDate(post.date)}</span>
              <span className="meta-dot">·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="article-cover">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="article-body">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="article-tags" style={{ maxWidth: 720, margin: "30px auto" }}>
            {post.tags.map((tag) => (
              <span className="tag-chip" key={tag}>#{tag.replace(/\s+/g, "")}</span>
            ))}
          </div>

          <hr className="article-divider" />

          <div className="article-actions">
            <button
              type="button"
              className={`like-btn ${liked ? "liked" : ""}`}
              onClick={toggleLike}
              aria-pressed={liked}
            >
              <HeartIcon /> {count} {count === 1 ? "like" : "likes"}
            </button>
            <div className="share-row">
              <a
                className="icon-btn"
                aria-label="Share on WhatsApp"
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShareIcon style={{ width: 16, height: 16 }} />
              </a>
              <button className="icon-btn" aria-label="Copy link" onClick={copyLink}>
                {copied ? "✓" : "🔗"}
              </button>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">{initials(post.author)}</div>
            <div>
              <strong>{post.author}</strong>
              <p style={{ margin: "4px 0 0", color: "var(--ink-soft)", fontSize: "0.9rem" }}>
                {post.authorBio}
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="related-section">
              <div className="section-heading">
                <h2>More in {post.category}</h2>
                <Link to={`/category/${encodeURIComponent(post.category)}`} className="read-more">
                  View all →
                </Link>
              </div>
              <div className="blog-grid">
                {related.map((r) => (
                  <BlogCard key={r.id} post={r} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
