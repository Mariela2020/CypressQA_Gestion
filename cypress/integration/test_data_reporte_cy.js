const fetch = require('node-fetch')

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('/') + ' ' +
  [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')
const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

describe('Guardar Data Reporte CY', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
      });
   
      
    it('URL should be', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/');
      
    
        cy.readFile('CypressQA_Gestion/log.txt').then((dato1) =>{
            var regex = /(\d+)/g;
           
            var valor = dato1.Math(regex)
            cy.log(valor)
  
          })  
    
        
    });


})
