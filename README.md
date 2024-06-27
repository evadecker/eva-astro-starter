# Eva's Astro Starter

I create new Astro projects regularly and always install a common group of packages. This is a template with all those packages pre-installed.

## What's included

**Basics**
- A blank [Astro](https://astro.build/) project with TypeScript enabled
- `pnpm` package management plus `only-allow pnpm`
- Set `~` as an import alias to `/src` to enable `import { Component } from '~/components'` anywhere
- Add a blank directory for `components`
- Add `layouts/BaseLayout.astro` with basic meta tags
- Add `initial-scale=1` to `viewport` meta tag

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