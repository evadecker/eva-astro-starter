/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-astro",
  ],
  ignoreFiles: ["dist/**/*"],
  rules: {
    // Add your own rules here
  },
};
