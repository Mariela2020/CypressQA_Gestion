describe('TC Recorre Cyber', function() 
{
  beforeEach(function(){
    cy.visit('https://qa.toctoc.com/ofertas-toctoc')  
  })
  
  it('Recorre Precio de las calugas',function ()  
    {    

      var nro= 200 

      for (let i = 130; i < 160; i++) { 
        
        cy.visit('https://qa.toctoc.com/ofertas-toctoc')
        
        //cy.get('#onesignal-slidedown-cancel-button').click() 
                
        var proyecto =':nth-child('+nro+') > .card > .item-padre > .card-body > .d-flex > .hd > .nom'
        //cy.log(proyecto)
        var caluga_precio= ':nth-child('+nro+') > .card > .item-padre > .card-body > .precios > div > .normal'  
        //cy.log(precio_caluga)
        var oferta = ':nth-child('+nro+') > .card > .item-padre > .card-body > .precios > div > .oferta' 
        //cy.log(oferta)
        var depto= ':nth-child('+nro+') > .card > .item-padre > .card-body > .proyecto > .programa > .unidad > strong'
        //cy.log(depto)
        var btn = ':nth-child('+nro+')  > .card > .item-padre > .card-body > .precios > .btn'

        cy.get(proyecto, {timeout:10000}).then(function($prop){       
          var proyecto1= $prop.text()
          cy.log(proyecto1)
           
          cy.get(depto).then(function($depto){
            var depto1 = $depto.text()  
            cy.log(depto1)

              cy.get(caluga_precio).then(function($el){ 
                var precio_caluga= $el.text()
                cy.log(precio_caluga)
                
              cy.get(oferta).then(function($oferta){  
                const precio_oferta= $oferta.text() 
                cy.log(precio_oferta)
                var precio_oferta1= precio_oferta.substring(9)
                cy.log(precio_oferta1)
                var precio_caluga_oferta = parseFloat(precio_oferta1)
                cy.log(precio_oferta1)
             
                cy.writeFile('caluga_cyber_precio.txt', '\nid: '+nro+ ' Proyecto: ' + proyecto1 + ' Depto: ' + depto1 + ' Precio caluga: ' + precio_caluga + ' precio Oferta: ' + precio_caluga_oferta, {flag: 'a+'} )
               
                cy.get(btn).should('exist').and('not.be.disabled')
             
                cy.get(btn).click()
                                
                cy.get('.valor-precio').then(function($precio){

                  const precio_resumen= $precio.text()
                  cy.log(precio_resumen)
                  var precio_res1 = precio_resumen.substring(3)
                  cy.log(precio_res1)
                  var precio_res_oferta = parseFloat(precio_res1)
                  cy.log(precio_res_oferta)
                  cy.log('precio_res '+precio_res_oferta)    
                    
                  expect(precio_caluga_oferta).eq(precio_res_oferta)
                 
                  cy.get('.valor-precio').then(function($desc){
                    var descuento = $desc.text()
                    cy.log(descuento)  

                    cy.get('h1 > strong').then(function($proyecto){
                      var proyecto_resumen=$proyecto.text()
                       cy.log(proyecto_resumen)

                      cy.url().then(urlString => {
          
                        // cy.log(urlString)
                        cy.get('ul > :nth-child(7)').should('be.visible').then(function($depto){
                          var depto=$depto.text()
                          cy.log(depto)
                          cy.get('#onesignal-slidedown-container', {timeout:10000}).should('be.visible')
                          cy.get('.slick-active > :nth-child(1) > div > picture > img.imgslide').should('be.visible')
                          cy.get('.c-info').should('be.visible')
                    
                          cy.get('.d-block').then(function($reserva){
                            const valor_reserva=$reserva.text()
                            var reserva1= valor_reserva.substring(17)
                            cy.log(reserva1)
                           // var reserva2= parseFloat(reserva1)
                           // cy.log(reserva2)
                    
                            cy.get('#chkAcepto').click()
                            cy.get('#btnPagarReserva').should('exist').and('be.enabled')
                            cy.get('.contenedor-beneficios').should('be.visible')
                    
                            cy.writeFile('resumen_cyber.txt', '\nURL: ' + urlString + ' ; Proyecto: ' + proyecto_resumen + ' ; ' + depto + ' ; Precio Normal: '+ precio_caluga + ' ; Oferta: ' + precio_res_oferta + ' ; Descuento: ' + descuento + ' ; Reserva: ' + valor_reserva, {flag: 'a+'} )

                            cy.get('.texto-decorado').invoke('attr', 'href').then(href =>{
                              cy.log(href)
                              cy.writeFile('proyecto_cyber.txt', '\nURL: ' + href,  {flag: 'a+'} )
                            })  
                              /*//cy.get('.btn').click()
                              cy.wait(2000)

                              cy.get('.tt-ficha', {timeout:10000}).should('be.visible').then(function($ficha){

                                var proyecto_ficha=$ficha.text()
                                //cy.log(proyecto_ficha)

                                cy.url().then(urlString => {
                    
                                  //cy.log(urlString)
                                  cy.writeFile('proyecto_cyber.txt', '\nURL: ' + urlString, {flag: 'a+'} )
                        
                                })

                                expect(proyecto_resumen).eq(proyecto_ficha)
                                
                                })  */
                          })
                        })  

                      }) 

                    })
                  })

                })
            
              })
          
            })
         
          })

          nro = nro+1
          cy.log(nro)
        
        })
        
        
      }
    
    })

})
