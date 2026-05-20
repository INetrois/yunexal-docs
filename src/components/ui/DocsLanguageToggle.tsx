'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultDocsLocale, docsLocales } from '@/lib/i18n';

function buildLocaleHref(pathname: string, locale: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = docsLocales.some((item) => item.locale === segments[0]) ? segments[0] : null;
  const pathWithoutLocale = currentLocale ? segments.slice(1) : segments;
  const nextSegments = locale === defaultDocsLocale ? pathWithoutLocale : [locale, ...pathWithoutLocale];

  return `/${nextSegments.join('/')}`;
}

export default function DocsLanguageToggle() {
  const pathname = usePathname() ?? '/docs/yunexal';
  const currentLocale = docsLocales.some((item) => item.locale === pathname.split('/').filter(Boolean)[0])
    ? pathname.split('/').filter(Boolean)[0]
    : defaultDocsLocale;

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">
      {docsLocales.map((item) => {
        const active = item.locale === currentLocale;

        return (
          <Link
            key={item.locale}
            href={buildLocaleHref(pathname, item.locale)}
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
              active ? 'bg-brand text-white' : 'text-white/55 hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
