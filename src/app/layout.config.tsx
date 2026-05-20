import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenIcon } from '@heroicons/react/24/solid';

/**
 * Shared layout configurations
 */
export const baseOptions: BaseLayoutProps = {
  disableThemeSwitch: true,
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand/30 bg-brand/15 shadow-[0_0_20px_rgba(124,58,237,0.35)]">
          <span className="h-3 w-3 rounded-full bg-brand" />
        </span>
        <span className="font-semibold">Yunexal Panel</span>
      </div>
    ),
  },
  links: [
    {
      icon: <BookOpenIcon className="w-4 h-4" />,
      text: 'Docs',
      url: '/docs/yunexal',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/nestorchurin/yunexal-panel',
};
