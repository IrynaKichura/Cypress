const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://example.cypress.io',
  },
  // env: {
  //   "ACTION_PAGE_URL": "/commands/actions",
  // },
  viewportWidth: 1920,
  viewportHeight: 1080,
});
