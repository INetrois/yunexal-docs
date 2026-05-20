import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Card, Cards } from 'fumadocs-ui/components/card';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { source } from '@/lib/source';
import type { DocsLocale } from '@/lib/i18n';

interface SharedPageParams {
  slug?: string[];
  locale: DocsLocale;
}

export async function renderDocsPage({ slug, locale }: SharedPageParams) {
  if (slug?.[0] && slug[0] !== 'yunexal') {
    notFound();
  }

  const page = await source.getPage(slug, locale);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        enabled: true,
        style: 'clerk',
      }}
      lastUpdate={page.data.lastModified ? new Date(page.data.lastModified) : undefined}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
            Tabs,
            Tab,
            Card,
            Cards,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function getDocsMetadata({ slug, locale }: SharedPageParams): Promise<Metadata> {
  const page = await source.getPage(slug, locale);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
