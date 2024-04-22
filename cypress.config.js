const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const registerCypressEmailResults = require('cypress-email-results');

// Create the nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
async function main() {
  const { emailContent } = require('./node_modules/cypress-email-results/index.js');
  const info = await transporter.sendMail({
    from: '"Hi Marija" <stefi.automation.test@gmail.com>', 
    to: "stefani.kiprevska@gmail.com", 
    subject: "Report", 
    text: emailContent,
  }
  )}

// Define the options object for cypress-email-results plugin
const emailOptions = {
  email: ['stefani.kiprevska@gmail.com'],
  transport: transporter,
  emailOnSuccess: true,
  dry: false
};

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
    screenshotsFolder: 'cypress/reports/mocha/assets',
    video: true,
    setupNodeEvents(on, config) {
      // Register the Cypress email results plugin with the provided options
      registerCypressEmailResults(on, config, emailOptions);
      allureCypress(on);
      // Implement other node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
});
