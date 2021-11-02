
describe('TC Recorre Propiedades', ()=> { 
     
    
 it('Revisión de enlace', ()=>{  
     
    var markdownLinkCheck = require('markdown-link-check');
    var total= 5
    var count = 32
     //const pages= ['blog', 'about', 'contact']

    for (let i = 1; i < total; i++) { 
         
       cy.readFile('cypress/fixtures/sitioweb.json').then((data) =>{
         var dat = data[count].id
         cy.log(dat)
         var enlace=data[count].url
         cy.log(enlace)



         markdownLinkCheck(enlace, function (err, results) {
         if (err) {
            // cy.writeFile('link_error.txt', '\nURL: ' + enlace, {flag: 'a+'} )
            cy.log('Error',err)
           // console.error('Error', err);
            return;
         }
           results.forEach(function (result) {
           // cy.writeFile('link_error.txt', '\nURL: ' + enlace, {flag: 'a+'} )
            cy.log('%s is %s', result.link, result.status);
            //console.log('%s is %s', result.link, result.status);
           })
        
         })   
           count++ 
        })
      }

  })
      

  // cy.request({ url: `${myUri}`, headers: exchangeHeaders, failOnStatusCode: false })

  /* cy.get("a").each($a => {
        const message = $a.text();
        cy.log(message)
        expect($a, message).to.have.attr("href").not.contain("undefined") 
        
       })*/
})
