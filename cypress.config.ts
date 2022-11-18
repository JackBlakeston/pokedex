import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    scrollBehavior: false,
    chromeWebSecurity: false,
  },

  component: {
    viewportWidth: 1200,
    viewportHeight: 840,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
