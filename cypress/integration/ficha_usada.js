const { WellArchitected } = require("aws-sdk")

describe('TC Recorre ficha usada nueva', function() 
 {
      
    it('Recorre elementos de las ficha usada',function ()  
      {
       var loggeo= count+1   
       cy.log('loggeo ' +loggeo) 
       var count = 68
       cy.log(count)
       
       for (let i = 1; i < 10; i++) { 
        //count++
        
        cy.readFile('cypress/fixtures/proyecto_id.json').then((data) =>{
            var dat = data[count].id
            cy.log(dat)
            var enlace=data[count].url
            cy.log(enlace)
            
            cy.visit(`${enlace}`).then((response) => { 
       
               cy.get('.nom-proyecto', {timeout:10000}).then(function($elem){
 
                var dirtxt= $elem.text()
                
                cy.get('.img-gal').should('be.visible')
                cy.get('.fav', {timeout:10000}).should('be.visible')

                cy.get('.btn-compartir > span').should('be.visible').click()
                cy.get('[title="Copiar enlace"] > .borde-rrss').should('be.visible')
                cy.get(':nth-child(1) > .borde-rrss').should('be.visible')
                cy.get(':nth-child(3) > .modal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
                
                if (count<loggeo ){
                  
                   cy.get('.btn-reportar > span',{timeout:10000}).should('be.visible').click()         
                   cy.get('[id="IngresoUsuario\.email"]',{timeout:10000}).type('hurtadomariela2@gmail.com')
                   cy.get('[id="IngresoUsuario\.Contrasena"]').clear().click().type('prueba')
                   cy.get(':nth-child(5) > .btn').click()
          
                   cy.get('.modal-header > p')
                   cy.get(':nth-child(4) > .modal > .modal-dialog > .modal-content > .modal-body > .reportar-texto > #exampleFormControlTextarea1').type('Prueba QA')
                   //cy.get('.reportar-botones > :nth-child(2) > .btn').click()
                   cy.get('.reportar-botones > :nth-child(1) > .btn',{timeout:10000}).click()
                   var loggeo= count+1
                }
                cy.get('.dir').should('be.visible')
                cy.get('.precio-uf').should('be.visible')
                cy.get('.col-lg-8 > :nth-child(1)').should('be.visible')
                
                cy.get('.f-programa > :nth-child(1)').should('be.visible')
                cy.get('.f-programa > :nth-child(2)').should('be.visible')
                cy.get('.f-programa > :nth-child(3)').should('be.visible')
           
                cy.get('.cf-cotizar > .cf-cta > .btn').click()
                cy.get(':nth-child(2) > .modal > .modal-dialog > .modal-content > .modal-body > .reportar-texto > #exampleFormControlTextarea1').type('prueba QA')
                cy.get('.botonera-contacto > :nth-child(2) > .btn').click()

                cy.get('.mt-4 > .btn').click()

                cy.get(':nth-child(3) > :nth-child(1) > a').then(function($elem2){
                  cy.wait(3000)
                  var email=$elem2.text()
                  cy.log(email)

                  cy.get('.cod').then(function($elem1){
                    var codtxt= $elem1.text()
                    cy.log(codtxt)
                    
                    
                    // cy.contains('test_invite_member@gmail.com').should('not.exist')  cy.get('.bl').should('not.have.descendants', 'row entorno-container')
                   // cy.get('.container').should('not.have.descendants', '.subtt font-bold')
                    //cy.get('.container').should('not.have.descendants', 'img')
                    

                   /* cy.get(':nth-child(2) > .bl > .h-pl > div > .subtt').then(($entorno) => {

                        var text = "Información sobre el entorno"
                        if (cy.contains(':nth-child(2) > .bl > .h-pl > div > .subtt'))
                        {
                            cy.writeFile('ficha_usada.txt', '\nid: '+i+ ' Codigo: ' + codtxt + ' ' + dirtxt + ' Sin información de entorno', {flag: 'a+'})   
                        } else {
                            cy.writeFile('ficha_usada.txt', '\nid: '+i+ ' Codigo: ' + codtxt + ' ' + dirtxt + ' Con información de entorno', {flag: 'a+'})  
                        }
                    })

                    cy.get('.fondo-mobile > .col-sm-12 > .card > .card-header > .card-title').then(($educacion) => {

                        if ($educacion.hasClass('activa'))
                        {
                            cy.writeFile('ficha_usada.txt', '\nid: '+count+ ' Codigo: ' + codtxt + ' ' + dirtxt + ' Sin Establecimiento educacional', {flag: 'a+'})   
                        } else {
                            cy.writeFile('ficha_usada.txt', '\nid: '+count+ ' Codigo: ' + codtxt + ' ' + dirtxt + ' Con Establecimiento educacional', {flag: 'a+'})  
                        }
                    })*/
   

                    cy.writeFile('ficha_usada.txt', '\nid: '+count+ ' Codigo: ' + codtxt + ' ' + dirtxt + 'Email: ' + email, {flag: 'a+'})
                  }) 

                })
   
               })    
            })   
            count++ 
        })
        
      }

    })

 })
