const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://example.cypress.io',
    experimentalRunAllSpecs:true,
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
          { type: "issue", urlTemplate: "https://issues.example.com/%s" },
          { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
      });
    },
  },
});
