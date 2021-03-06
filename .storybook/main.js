module.exports = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
};
