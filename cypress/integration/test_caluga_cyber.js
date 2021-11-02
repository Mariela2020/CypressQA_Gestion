describe('TC Recorre Cyber Oct 21', function() 
 {
    beforeEach(function(){
        cy.visit('https://qa.toctoc.com/cyber/')
        
    });
  
    it('Recorre Precio de las calugas',function ()  
     {
       // boton cy.get(':nth-child(1) > .card > .item-padre > :nth-child(3) > .proyecto > .informacion > .btn')    
       //var count = 0
       //var count1= 0
       //var total= 298
       
         for (let i = 100; i < 141; i++) { 
            
           // count++
           // count1++

            cy.visit('https://qa.toctoc.com/cyber/');
            //cy.get('#onesignal-slidedown-cancel-button').click()
            //cy.log(count)  

            //var caluga_precio= ':nth-child' + '('+count+')' + ' > .card > .item-padre > :nth-child(3) > .proyecto > .precios > .normal'  
            var proyecto =':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .d-flex > .hd > .nom'
            var caluga_precio= ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > div > .normal'  
            var oferta = ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > div > .oferta' 
            var depto= ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .proyecto > .programa > .unidad > strong'
            var btn = ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > .btn'
            
            cy.get(proyecto, {timeout:5000}).then(function($prop){       
              var proyecto1= $prop.text()
             // cy.writeFile('caluga_cyber_precio.txt', '\nid: '+i+ ' Proyecto: ' + proyecto1, {flag: 'a+'} )
            // })

              cy.get(depto).then(function($depto){
                var depto1 = $depto.text()  
               // cy.writeFile('caluga_cyber_precio.txt', ' ' + depto1, {flag: 'a+'} )
                // cy.writeFile('caluga_cyber_precio.txt', '\nid: '+i+ ' Proyecto: ' + proyecto1 + ' Depto: ' + depto1 + ' Precio caluga: ' + precio_caluga, {flag: 'a+'} )
            // })

             cy.get(caluga_precio).then(function($el){ 
                var precio_caluga= $el.text()
                //cy.writeFile('caluga_cyber_precio.txt', ' Precio caluga: ' + precio_caluga, {flag: 'a+'} ) 
             //}) 
          
             cy.get(oferta).then(function($oferta){  
               const precio_oferta= $oferta.text() 
               var precio_oferta1= precio_oferta.substring(9)
               cy.log(precio_oferta1)
               var precio_caluga_oferta = parseFloat(precio_oferta1)
               //cy.log('precio_caluga ' +precio_caluga_oferta)
               //cy.writeFile('caluga_cyber_precio.txt', ' Oferta: ' + precio_oferta, {flag: 'a+'} ) 
             
               cy.writeFile('caluga_cyber_precio.txt', '\nid: '+i+ ' Proyecto: ' + proyecto1 + ' Depto: ' + depto1 + ' Precio caluga: ' + precio_caluga + ' precio Oferta: ' + precio_caluga_oferta, {flag: 'a+'} )
               //})
             
             //var boton_ver = ':nth-child(143) > .card > .item-padre > :nth-child(3) > .proyecto > .informacion > .btn'
    
              cy.get(btn).should('exist').and('not.be.disabled')
               // cy.get(boton_ver).should('exist').and('not.be.disabled')
               // cy.log(boton_ver) 
                cy.get(btn).click()
                //cy.get('#onesignal-slidedown-allow-button').click()
                
                cy.get('.valor-precio').then(function($precio){

                    const precio_resumen= $precio.text()
                   // var precio_res1 = precio_resumen.substring(9)
                    var precio_res_oferta = parseFloat(precio_resumen)
                   // cy.log('precio_res '+precio_res_oferta)    
                    
                    expect(precio_caluga_oferta).eq(precio_res_oferta)
                
                
                cy.get('h2.text-right').then(function($desc){

                  var descuento = $desc.text()

                 // cy.writeFile('precio_caluga_cyber.txt', '\nid: '+i+ ' precio oferta resumen: ' + precio_resumen + ' Descuento: ' + descuento, {flag: 'a+'} )
                  
               // })    
                
      
                cy.get('h1 > strong').then(function($proyecto){

                    var proyecto_resumen=$proyecto.text()
                   // cy.log(proyecto_resumen)

                    cy.url().then(urlString => {
          
                       // cy.log(urlString)
                        cy.get('ul > :nth-child(7)').should('be.visible').then(function($depto){

                            var depto=$depto.text()
                          //  cy.log(depto)

                       //})

                    cy.get('#onesignal-slidedown-container').should('be.visible')
                    cy.get('.slick-active > :nth-child(1) > div > picture > img.imgslide').should('be.visible')
                    cy.get('.c-info').should('be.visible')
                    
                    cy.get('.d-block').then(function($reserva){

                      const valor_reserva=$reserva.text()
                      var reserva1= valor_reserva.substring(2)
                     // cy.log(reserva1)
                      var reserva2= parseFloat(reserva1)
                      //cy.log(reserva2)
                    
                      cy.get('#chkAcepto').click()

                    cy.get('#btnPagarReserva').should('exist').and('be.enabled')
                    cy.get('.contenedor-beneficios').should('be.visible')
                    
                    cy.writeFile('resumen_cyber.txt', '\nURL: ' + urlString + ' ; Proyecto: ' + proyecto_resumen + ' ; ' + depto + ' ; Oferta: ' + precio_res_oferta + ' Descuento: ' + descuento + ' Reserva: ' + valor_reserva, {flag: 'a+'} )

                   /* cy.get('.texto-decorado').click()
                    //cy.get('.btn').click()
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
        })

        }
    
     })

   })
