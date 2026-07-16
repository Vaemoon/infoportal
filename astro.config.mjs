import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY;
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? repository?.split('/')[0];
const repositoryName = repository?.split('/')[1];
const isUserSite = Boolean(owner && repositoryName === `${owner}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repositoryName && !isUserSite ? `/${repositoryName}/` : '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
