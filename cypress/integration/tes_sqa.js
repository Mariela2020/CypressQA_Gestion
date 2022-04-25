/// <reference types="cypress" />

const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  const ip_ci= '3.89.124.29'

  const ip_loc= '141.101.102.240'

  const username = 'mhurtado'
  var AWS = require('aws-sdk')
 // var SQS = require('./sqs')
//require('./commands')
//const moment = require('moment');

//describe('Envio de mensaje al SQS', function(){

  it('mesagge con metrica', () => {
    
    //const fecha = moment().format()

   // cy.readFile('cypress/results/mochawesome1.json').then((data) =>{
     // var latencia = data.results[0].suites[0].tests[0].duration
     // var state = data.results[0].suites[0].tests[0].state
   // })
      var message = "qa jenkins 141.101.102.240 mhurtado [POST https://pautocomplete.toctoc.com/search] " + d  
      //latencia:"+ latencia + " status:" + state + " flujo_buscador_autocomplete]"
      cy.log(message)

      AWS.config.update({"region": 'us-east-1',  accessKeyId: "AKIAYLDVPCMB33UXL3OZ", secretAccessKey: "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" })
      
      //cy.sendmessage()
      
      var sqs = new AWS.SQS({apiVersion: '2012-11-05'})

      var params = {
      // Remove DelaySeconds parameter and value for FIFO queues
        DelaySeconds: 10,
        MessageAttributes: {
          "request": {
            DataType: "String",
            StringValue: message
          }
        },
        MessageBody: "QA Prueba de flujo",
        QueueUrl: "https://sqs.us-east-1.amazonaws.com/573624488707/dev-sqs-monitor-qa"
      }
      
      cy.log("enviando mensaje2")

      
      //cy.sendmessage().then(resolve)
     
      sqs.sendMessage(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.MessageId);
        }
      })

        /*Cypress.sqs.sendMessage (params, function(err, data) {
        if (err) {
          cy.log("Error", err)
        } else {
          cy.log("Success", data.MessageId)
        }
      })*/

    })

  //})


/*describe('Prueba unitaria buscador principal autocomplet', function(){

  beforeEach(function(){

   cy.visit("https://www.toctoc.com/")
   //cy.get('#onesignal-slidedown-cancel-button').click()
   //cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
  })

  it('Interacción con buscador', function(){

    cy.get('#boxBuscador > .form-control').type('Santi', {delay:100})
    cy.get('.ic-location').should('be.visible')
   // cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
   
  })

   
  //const  AWS  =  require ( 'aws-sdk' )

})  


/*const  AWS  =  require ( 'aws-sdk' );

AWS.config.update({"region": 'us-east-1',  accessKeyId: "AKIAYLDVPCMB33UXL3OZ", secretAccessKey: "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" })

// {nextSequenceToken: '49613044228855899391047772384411611445420826973918200258'}

const cloudwatchlogs = new AWS.CloudWatchLogs();
var params = {

    logEvents: [{"timestamp": new Date().getTime(), "message": `{data: \"asdasdasd\"}` }],
    logGroupName: "dev-gestion-incidencias",
    logStreamName: "qa",
    sequenceToken: "49622625596042702935804097149362654908785640127661605890"
}
const promise = new Promise((resolve, reject)=> {
   cloudwatchlogs.putLogEvents(params, function(err,data) {
       if(err) reject(err)
       resolve(data)
    })
})
promise.then(data => { console.log(data)})
       .catch(err => { console.log(err)})*/

