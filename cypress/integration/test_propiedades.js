
describe('TC Recorre Propiedades', function() 
 {
    beforeEach(function(){
        cy.visit('https://www.toctoc.com/santander/reservas/?o=home_santander');
        //cy.get('#onesignal-slidedown-cancel-button').click()
      });
  
    it('Recorre las propiedades Santander',function ()  
     {
       const ante = ':nth-child'
       const post = '> .card > .card-body > .proyecto > .info > :nth-child(3) > .btn'
       var count = 78
      // var count1= 1
       var total= 11
       //var count3= Number(count3) + Number(count1)
       cy.log(count)  
       var localizador= ante + '('+count+')' + ' '+ post  
       cy.log(localizador)
       cy.get(localizador).click()
       cy.url().then(urlString => {
          
         cy.log(urlString)
         cy.writeFile('proyecto.txt', '\nURL: ' + urlString, {flag: 'a+'} )

        })
       
        //cy.get('.pestana_selected').should('be.visible')
        cy.get('[name="info"]').should('be.visible')
        //cy.get(':nth-child(1) > .card > .card-header > .card-title').should('be.visible')
       
        for (let i = 1; i < total; i++) { 
            count++
            cy.visit('https://www.toctoc.com/santander/reservas/?o=home_santander');
            //cy.get('#onesignal-slidedown-cancel-button').click()
            cy.log(count)  
            var localizador= ante + '('+count+')' + ' '+ post  
            cy.log(localizador)
            cy.get(localizador).click()
            cy.url().then(urlString => {
            cy.log(urlString)
            cy.writeFile('proyecto.txt', '\nURL: ' + urlString, {flag: 'a+'} )

           // cy.get('.pestana_selected').should('be.visible')
            cy.get('[name="info"]').should('be.visible')
           // cy.get(':nth-child(1) > .card > .card-header > .card-title').should('be.visible')

        })
            
          }  
    
     })


    })






