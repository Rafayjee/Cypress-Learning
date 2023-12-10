const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // "baseUrl":"https://opensource-demo.orangehrmlive.com/web/index.php/",
    "baseUrl":"https://demoqa.com/",
    // "baseUrl":"https://d3.circadia.link/#",
    experimentalSessionAndOrigin:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
