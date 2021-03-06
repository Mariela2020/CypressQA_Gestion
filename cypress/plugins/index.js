/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit")

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });
 
  /*on("task", {
    lighthouse: lighthouse(), // calling the function is important
    pa11y: pa11y(), // calling the function is important
  });*/

  on('task', {
    async lighthouse(allOptions) {
      let txt
      // calling the function is important
      const lighthouseTask = lighthouse((lighthouseReport) => {
        let lighthouseScoreText = ''
        let lighthouseResult = lighthouseReport?.lhr?.categories
        let lighthousePerformance =
          'Performance: ' + lighthouseResult?.performance?.score + '\n'
        let lighthouseAccessibility =
          'Accessibility: ' + lighthouseResult?.accessibility?.score + '\n'
        let lighthouseBestPractices =
          'Best Practices: ' +
          lighthouseResult?.['best-practices']?.score +
          '\n'
        let lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score + '\n'
        lighthouseScoreText =
          lighthousePerformance +
          lighthouseAccessibility +
          lighthouseBestPractices +
          lighthouseSEO

        console.log(lighthouseScoreText)
        txt = lighthouseScoreText
      })

      const report = await lighthouseTask(allOptions)
      // insert the text into the report returned the test
      report.txt = txt
      return report
    },
  })
}


