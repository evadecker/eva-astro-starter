import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  eslintPluginPrettierRecommended,
  {
    rules: {
      // Add custom rules here
    },
  },
];
