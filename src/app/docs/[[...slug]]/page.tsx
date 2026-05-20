import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { getDocsMetadata, renderDocsPage } from '@/app/docs/shared';

interface PageParams {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  return renderDocsPage({ slug, locale: 'en' });
}

export async function generateStaticParams() {
  return source.getPages('en').map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  return getDocsMetadata({ slug, locale: 'en' });
}
