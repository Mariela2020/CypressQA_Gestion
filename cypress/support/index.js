// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@bahmutov/cy-api/support'
//import { Coda, UnauthorizedError, NotFoundError }

//import "./apiCommands";
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

require("coda-js")

require('markdown-link-check')

require('cypress-grep')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log(err);
    return false
  })