const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const transport = require("./transporter");

module.exports = defineConfig({
  e2e: {
    default: {
      format: "./reporter.js",
    },
    specPattern: "test/cypress/e2e/**/*.*",
    testIsolation: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      overwrite: false,
      reportPageTitle: "Stefi",
      html: false,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      saveAllAttempts: false,
      screenshotOnRunFailure: true,
      inlineAssets: true,
      reportDir: 'cypress/reports/mocha',
    },
    reporter: 'mochawesome',
    screenshotsFolder: 'cypress/reports/mocha/assets',
    video: true,
    setupNodeEvents(on, config) {

      allureCypress(on);

      // Implement other node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      require('cypress-email-results-v2')(on, config, {
        email: ['stefani.kiprevska@gmail.com'],
        transport
      })
    }
  },
});
