import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import DocsLanguageToggle from '@/components/ui/DocsLanguageToggle';

export default function Layout({ children }: { children: ReactNode }) {
  const githubLink = process.env.GITHUB_TOKEN ? (
    <GithubInfo
      owner="nestorchurin"
      repo="yunexal-panel"
      className="lg:-mx-2"
      token={process.env.GITHUB_TOKEN}
    />
  ) : (
    <a
      href="https://github.com/nestorchurin/yunexal-panel"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md px-2 py-1 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
    >
      GitHub
    </a>
  );

  return (
    <DocsLayout
      {...baseOptions}
      tree={source.getPageTree('en')}
      disableThemeSwitch
      links={[
        {
          type: 'custom',
          children: <DocsLanguageToggle />,
        },
        {
          type: 'custom',
          children: githubLink,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
