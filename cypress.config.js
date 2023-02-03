const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Set record video while running, default true
  video: false,
  //Video compression 0-50, the lower the better video quality + more disk space, recommend 16 or 30 by Cypress
  videoCompression: 32,
  e2e: {
    setupNodeEvents(on, config) {
      // On browser launch, force the browser to run incognito
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito')
          return launchOptions
        }
        else {
          return launchOptions.preferences.incognito = true
        }
      })
    },
  },
});
