//const moment = require('moment');
//var day = moment().format('DD-MM-YYYY HH:mm:ss') 

describe ('performance', ()=>{

  it.only('test Retasalo', ()=>{

     cy.visit('https://www.toctoc.com/retasalo/')
    //cy.visit('https://ww2.toctoc.com/propiedades/compranuevo/departamento/estacion-central/condominio-parque-magdalena/1491493?o=mapa#')        
    const thresholds = {
      performance: 20,
      accessibility: 60,
      'best-practices': 80,
      seo: 60,
    }
    const opts = {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    }
    cy.url()
      .then((url) => {
        cy.task('lighthouse', {
          url,
          thresholds,
          opts,
        })
      })
      .then((report) => {
        const { errors, results, txt } = report
        // our custom code in the plugins file has summarized the report
        cy.url().then(urlString => {       
          cy.log(report.txt)
         // cy.writeFile('rendimiento.txt', '\n'  + day + '\n' + urlString + '\n' + report.txt, { flag: 'a+' });
          cy.writeFile('rendimiento.txt',   '\n' + urlString + '\n' + report.txt)
        })
    })
  })


  it('test Retasalo', ()=>{

    const thresholds = {
      performance: 20,
      accessibility: 70,
     // 'first-contentful-paint': 2000,
     // 'largest-contentful-paint': 3000,
     // interactive: 2000,
      seo: 60,
      //pwa: 50,
    }

    const lighthouseConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    }

    
    cy.visit('https://www.toctoc.com/retasalo/')
    cy.lighthouse(thresholds, lighthouseConfig)
  })
})
