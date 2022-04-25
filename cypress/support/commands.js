// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'

import "cypress-audit/commands"

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })

/*Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `https://api.testproject.io/v2/projects/br1AckSWwkavretXdaERbQ/jobs/SGTJYLvGHECxyaH3wvywxA/reports/latest?details=false&format=TestProject`,
    body: {
      username: 'Authorization',
      password: 'ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1'
    }
    }).its('body').then((body) => {
      const vuexData = { user: { authenticationData: { token: body.token } } }
     // window.localStorage.setItem('vuex', JSON.stringify(vuexData))
    })
  })  */

  /*Cypress.Commands.overwrite(
    'screenshot',
    (originalFn, subject, name, options) => {
      // call another command, no need to return as it is managed
      cy.get('.app')
        .should('be.visible')
  
        // overwrite the default timeout, because screenshot does that internally
        // otherwise the `then` is limited to the default command timeout
        .then({ timeout: Cypress.config('responseTimeout') }, () => {
          // return the original function so that cypress waits for it
          return originalFn(subject, name, options)
        })
    }
  )  */
  