const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://qauto.forstudy.space/',
  },
  env: {
    email: 'lesson21_user1@gmail.com',
    password: 'Password12345',
  },
});
