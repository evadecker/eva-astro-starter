# Eva's Astro Starter

An Astro starter project set up with pnpm, Prettier, ESLint, Stylelint, autoprefixer, cssnano, Husky, and Astro Sitemap, plus sensible VS Code defaults and recommended workspace extensions.

## Getting Started

1. Click "Use this template" and create a new repository.
2. In `astro.config.mjs`, update `site` from `https://mysite.com` to your site URL.
3. In `src/layouts/BaseLayout.astro`, update `siteName` to your site name.
4. Good to go!

## What's included

**Basics**
- A blank [Astro](https://astro.build/) project with TypeScript enabled
- `pnpm` package management plus `only-allow pnpm`
- Import aliases of `src` using `~` to enable using `import { Component } from '~/components'` 
- Basic meta tags and open graph tags in `layouts/BaseLayout.astro`
- `initial-scale=1` on `viewport` to prevent default mobile zoom-out
- Site name displays after the page title (`Page Title · Site Name`) on pages other than the main index
- [smartypants](https://github.com/othree/smartypants.js) smart quotes for page titles and descriptions

**Styles**
- `scss` for nested style declarations until broader native support
- PostCSS `autoprefixer` for browser prefixing and `cssnano` for CSS minification
- Josh Comeau's [reset.css](https://www.joshwcomeau.com/css/custom-css-reset/)

**Prettier**
- Auto code formatting with [Prettier](https://prettier.io/) and [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- Auto import sorting with [prettier-plugin-astro-organize-imports](https://github.com/neoki07/prettier-plugin-astro-organize-imports)

**Linting**
- `.astro`, `.js`, `.jsx`, `.json`, `.ts`, and `.tsx` linting with [ESLint](https://eslint.org/) and [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
- Accessibility checks with [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- Style linting with [Stylelint](https://stylelint.io/) and [stylelint-config-astro](https://github.com/mattpfeffer/stylelint-config-astro)

**VS Code**
- Format on save and on paste
- Default formatter set to Astro
- Workplace recommendations for [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter), and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Package.json scripts**
- `lint` — Run ESLint
- `lint:fix` — Run ESLint and fix errors
- `stylelint` — Run Stylelint
- `stylelint:fix` — Run Stylelint and fix errors

**Husky**
- `astro check` on pre-commit

**Dependabot**
- Weekly dependency update checks
- All GitHub Action updates grouped in a single pull request
- All patch or minor package updates grouped in a single pull request
- All major package updates created as individual pull requests

**Config**
- Link prefetching enabled
- Dev toolbar disabled
- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) installed