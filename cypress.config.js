const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test/cypress/e2e/**/*.*",
    testIsolation: false,
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions:{
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      saveAllAttempts: false,
      reportDir: 'cypress/reports/mocha',
    },
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
