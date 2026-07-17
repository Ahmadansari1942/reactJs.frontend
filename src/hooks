import { useEffect, useState } from "react";

const STORAGE_KEY = "qalam-liked-posts";

function readLikedIds() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function writeLikedIds(set) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch {
    /* localStorage unavailable — like state just won't persist, which is fine */
  }
}

export function useLike(postId, baseLikes = 0) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(readLikedIds().has(postId));
  }, [postId]);

  const toggleLike = () => {
    const ids = readLikedIds();
    if (ids.has(postId)) {
      ids.delete(postId);
      setLiked(false);
    } else {
      ids.add(postId);
      setLiked(true);
    }
    writeLikedIds(ids);
  };

  const count = baseLikes + (liked ? 1 : 0);
  return { liked, count, toggleLike };
}
