'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import SearchDialog from '@/components/search';
import { defaultDocsLocale, docsLocales } from '@/lib/i18n';

function getLocaleFromPathname(pathname: string | null): string {
  if (!pathname) return defaultDocsLocale;

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  return docsLocales.some((item) => item.locale === first) ? first : defaultDocsLocale;
}

export default function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);

  return (
    <RootProvider
      search={{
        SearchDialog,
      }}
      theme={{
        enabled: false,
      }}
      i18n={{
        locale,
        locales: [...docsLocales],
        onLocaleChange(nextLocale) {
          if (!pathname) return;

          const segments = pathname.split('/').filter(Boolean);
          const hasExplicitLocale = docsLocales.some((item) => item.locale === segments[0]);
          const pathWithoutLocale = hasExplicitLocale ? segments.slice(1) : segments;
          const normalizedPath = pathWithoutLocale.join('/');
          const nextPath =
            nextLocale === defaultDocsLocale
              ? `/${normalizedPath}`
              : `/${nextLocale}/${normalizedPath}`;

          router.push(nextPath === '/' ? '/' : nextPath);
        },
        translations:
          locale === 'uk'
            ? {
                search: 'Пошук',
                searchNoResult: 'Нічого не знайдено',
                toc: 'Зміст',
                tocNoHeadings: 'На цій сторінці немає заголовків',
                lastUpdate: 'Останнє оновлення',
                chooseLanguage: 'Оберіть мову',
                nextPage: 'Наступна сторінка',
                previousPage: 'Попередня сторінка',
                chooseTheme: 'Оберіть тему',
                editOnGithub: 'Редагувати на GitHub',
              }
            : undefined,
      }}
    >
      {children}
    </RootProvider>
  );
}
