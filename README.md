# Eva's Astro Starter

An Astro starter project set up with pnpm, Biome, Stylelint, autoprefixer, cssnano, Husky, and Astro Sitemap, plus sensible VS Code defaults and recommended workspace extensions.

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

**Linting and Formatting**
- Linting and formatting with [Biome](https://biomejs.dev/)
- Style linting with [Stylelint](https://stylelint.io/) and [stylelint-config-astro](https://github.com/mattpfeffer/stylelint-config-astro)

**VS Code**
- Format on save and on paste
- Default formatter set to Astro
- Workplace recommendations for [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter), and [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

**Package.json scripts**
- `check` — Run Astro check + Biome lint and format
- `check:fix` — Run Astro check + Biome lint and format + fix errors
- `stylelint` — Run Stylelint
- `stylelint:fix` — Run Stylelint and fix errors

**Husky**
- `pnpm check` on pre-commit

**Dependabot**
- Weekly dependency update checks
- All GitHub Action updates grouped in a single pull request
- All patch or minor package updates grouped in a single pull request
- All major package updates created as individual pull requests

**Config**
- Link prefetching enabled
- Dev toolbar disabled
- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) installed