const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test/cypress/e2e/**/*.*",
    testIsolation: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    reporter: 'mochawesome',
    reporterOptions:{
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
    screenshotsFolder: 'cypress/reports/mocha/assets',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        log(message) {
          // Then to see the log messages in the terminal
          //   cy.task("log", "my message");
          console.log(message +'\n\n');
          return null;
        
        },
      });
    },
  },
});
