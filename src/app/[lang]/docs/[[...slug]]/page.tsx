import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocsMetadata, renderDocsPage } from '@/app/docs/shared';
import { source } from '@/lib/source';
import { isDocsLocale, type DocsLocale } from '@/lib/i18n';

interface PageParams {
  params: Promise<{
    lang: string;
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params;

  if (!isDocsLocale(lang) || lang === 'en') {
    notFound();
  }

  return renderDocsPage({ slug, locale: lang });
}

export async function generateStaticParams() {
  return source.getPages('uk').map((page) => ({
    lang: 'uk',
    slug: page.slugs,
  }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isDocsLocale(lang) || lang === 'en') {
    return {};
  }

  return getDocsMetadata({ slug, locale: lang as DocsLocale });
}
