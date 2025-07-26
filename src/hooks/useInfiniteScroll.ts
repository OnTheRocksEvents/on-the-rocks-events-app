import { useState, useEffect } from "react";

export default function useInfiniteScroll(items: any[], batchSize = 5) {
  const [visibleCount, setVisibleCount] = useState(batchSize);

  useEffect(() => {
    function onScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisibleCount((prev) => Math.min(prev + batchSize, items.length));
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length, batchSize]);

  return items.slice(0, visibleCount);
}
