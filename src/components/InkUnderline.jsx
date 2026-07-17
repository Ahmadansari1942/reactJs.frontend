import React from "react";

/**
 * The site's signature mark: a single hand-drawn ink stroke that animates in
 * under headings, echoing the "Qalam" (pen) idea the whole design is built on.
 */
export default function InkUnderline({ children, as: Tag = "span" }) {
  return (
    <Tag className="ink-underline">
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 12 C 40 4, 70 18, 110 10 S 170 4, 198 11" />
      </svg>
    </Tag>
  );
}
