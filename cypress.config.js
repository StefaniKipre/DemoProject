const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    default: {
      format: "./reporter.js",
    },
    specPattern: "test/cypress/e2e/**/*.*",
    testIsolation: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      overwrite: false,
      reportPageTitle: "Stefi",
      html: false,
      json: false,
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

      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        sendMail (message) {
          return sendAnEmail(message);
        }
      })
    }
    },
  },
);
