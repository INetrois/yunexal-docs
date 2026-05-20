'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const FALLBACK_STARS = 5;

export function GitHubStats() {
  const [stars, setStars] = useState(FALLBACK_STARS);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 1800);

    fetch('/api/github/stars', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { stars?: number } | null) => {
        if (typeof data?.stars === 'number') {
          setStars(data.stars);
        }
      })
      .catch(() => {
        setStars(FALLBACK_STARS);
      })
      .finally(() => {
        window.clearTimeout(timeout);
      });

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm text-white/60">
      <StarIcon className="h-4 w-4 shrink-0 text-[#f6c76f]" />
      <span className="min-w-[1ch] font-semibold text-white">{stars.toLocaleString()}</span>
      <span>stars on GitHub</span>
    </div>
  );
}

export default GitHubStats;
