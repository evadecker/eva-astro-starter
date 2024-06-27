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
- Set `~` as an import alias to `/src` to enable `import { Component } from '~/components'` anywhere
- Add a blank directory for `components`
- Add `layouts/BaseLayout.astro` with basic meta tags
- Add `initial-scale=1` to `viewport` meta tag
- Add basic Open Graph tags
- Display the site name after the page title (`Page Title · Site Name`) on pages that aren't the main index
- Install [smartypants](https://github.com/othree/smartypants.js) and use smart quotes for page titles and descriptions

**Styles**
- Add `scss` for nested style declarations until broader native support
- Add PostCSS `autoprefixer` and `cssnano` for browser prefixing and CSS compression
- Add Josh Comeau's [reset.css](https://www.joshwcomeau.com/css/custom-css-reset/)

**Prettier**
- Automatically format code with [Prettier](https://prettier.io/) and [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- Automatically sort imports with [prettier-plugin-astro-organize-imports](https://github.com/neoki07/prettier-plugin-astro-organize-imports)

**Linting**
- Lint `.astro`, `.js`, `.jsx`, `.json`, `.ts`, and `.tsx` with [ESLint](https://eslint.org/) and [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
- Catch accessibility issues with [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- Lint stylesheets with [Stylelint](https://stylelint.io/) and [stylelint-config-astro](https://github.com/mattpfeffer/stylelint-config-astro)

**VS Code**
- Automatically format on save and on paste
- Set Astro as default formatter
- Add workplace recommendations for [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter), and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Package.json scripts**
- `lint` — Run ESLint
- `lint:fix` — Run ESLint and fix errors
- `stylelint` — Run Stylelint
- `stylelint:fix` — Run Stylelint and fix errors

**Husky**
- Add [Husky](https://typicode.github.io/husky/)
- Run `astro check` on pre-commit

**Config**
- Enable link prefetching
- Disable the dev toolbar
- Add [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)