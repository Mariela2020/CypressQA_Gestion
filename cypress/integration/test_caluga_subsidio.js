describe('TC Recorre Cyber Oct 21', function() 
 {
    beforeEach(function(){
       
      cy.visit('https://rb.qatoctoc.com/Subsidios?ordenarPorRecomendados=true&ordenarPorPrecio=false&filtrarPorPrecio=false&cargar=13&region=-1&tipo=-1&subsidio=-1&precioMin=1053&precioMax=2662&tourVirtual=-1')
      //cy.visit('https://rb.qatoctoc.com/Subsidios')
    })
  
    it('Recorre Precio de las calugas', ()=> { 
     
       //var count = 156
       var total= 101
       for (let i = 48; i < total; i++) {    

            var ubicacion= ':nth-child('+i+') > .lnk-info > .c-infores > .info-body > .region'
            var proyecto= ':nth-child('+i+') > .lnk-info > .c-infores > .info-body > .dir'
            var precio= ':nth-child('+i+') > .c-imgres > a > .imgres-down > .precio'
            var tipo= ':nth-child('+i+') > .lnk-info > .c-infores > .info-body > .tipo'
            var programa= ':nth-child('+i+') > .lnk-info > .ress-pie > .programa > :nth-child(1)'
            var metraje= ':nth-child('+i+') > .lnk-info > .ress-pie > .programa > .mt'
            var url= ':nth-child('+i+') > .lnk-info'
            
            cy.get(proyecto).then(function($prop){       
                var proyecto1= $prop.text()
                              
                cy.get(ubicacion).then(function($ubicacion){
                  var ubicacion1 = $ubicacion.text()                 

                  cy.get(precio).then(function($el){ 
                    var precio= $el.text().trim()
                    
                    cy.get(tipo).then(function($tipo){  
                       var tipo1= $tipo.text().trim()  
               
                        cy.get(programa).then(function($programa){ 
                           var programa1= $programa.text()
                 
                           cy.get(metraje).then(function($metraje){ 
                              var metraje1= $metraje.text()
          
                              cy.get(url).invoke('attr', 'href').then(href =>{
                                cy.log(href)
                                cy.writeFile('proyecto_subsidios_rb.txt', '\n '+i+ ' URL: ' + href + ' ; Proyecto: ' + proyecto1 + ' ; Ubicacion: ' + ubicacion1 + ' ; Precio: '+ precio + ' ; tipo de vivienda: ' + tipo1 + ' ; Programa: ' + programa1 + ' ; metraje: ' + metraje1, {flag: 'a+'} )
                                                             
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
