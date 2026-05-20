import { NextResponse } from 'next/server';

const FALLBACK_STARS = 5;

interface GitHubRepositoryResponse {
  stargazers_count?: number;
}

export const revalidate = 3600;

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

  try {
    const response = await fetch('https://api.github.com/repos/nestorchurin/yunexal-panel', {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'yunexal-docs',
      },
      next: { revalidate },
      signal: controller.signal,
    });

    if (!response.ok) {
      return NextResponse.json({ stars: FALLBACK_STARS });
    }

    const repository = (await response.json()) as GitHubRepositoryResponse;

    return NextResponse.json({
      stars:
        typeof repository.stargazers_count === 'number'
          ? repository.stargazers_count
          : FALLBACK_STARS,
    });
  } catch {
    return NextResponse.json({ stars: FALLBACK_STARS });
  } finally {
    clearTimeout(timeout);
  }
}
