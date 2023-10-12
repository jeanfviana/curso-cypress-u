const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://demo.automationtesting.in/',
    experimentalSourceRewriting: true,
    watchForFileChanges: false
  },
});
