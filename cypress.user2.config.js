const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://qauto2.forstudy.space/',
  },
  env: {
    email: 'lesson21_user2@gmail.com',
    password: 'Password12345',
  },
});
