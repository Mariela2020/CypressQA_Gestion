describe('TC Recorre Cyber Oct 21', function() 
 {
    beforeEach(function(){
        cy.visit('https://qa.toctoc.com/cyber/')
        cy.visit
    });
  
    it('Recorre Precio de las calugas', ()=> { 
     
       //var count = 178
       //cy.log(count)  
       var total= 3
        for (let i = 1; i < total; i++) { 
            
            //count++    
         
            var proyecto =':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .d-flex > .hd > .nom'
            var caluga_precio= ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > div > .normal'  
            var oferta = ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > div > .oferta' 
            var depto= ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .proyecto > .programa > .unidad > strong'
            var btn = ':nth-child' + '('+i+')' + ' > .card > .item-padre > .card-body > .precios > .btn'
           
               cy.get(proyecto).then(function($prop){       
                var proyecto1= $prop.text()
                cy.writeFile('caluga_cyber_precio.txt', '\nid: '+i+ ' Proyecto: ' + proyecto1, {flag: 'a+'} )
               })

                cy.get(depto).then(function($depto){
                  var depto1 = $depto.text()  
                  cy.writeFile('caluga_cyber_precio.txt', ' ' + depto1, {flag: 'a+'} )
                  // cy.writeFile('caluga_cyber_precio.txt', '\nid: '+i+ ' Proyecto: ' + proyecto1 + ' Depto: ' + depto1 + ' Precio caluga: ' + precio_caluga, {flag: 'a+'} )
               })

               cy.get(caluga_precio).then(function($el){ 
                  var precio_caluga= $el.text().trim()
                  cy.writeFile('caluga_cyber_precio.txt', ' Precio caluga: ' + precio_caluga, {flag: 'a+'} ) 
               }) 
            
               cy.get(oferta).then(function($desc){  
                 var precio_oferta= $desc.text().trim()  
                 cy.writeFile('caluga_cyber_precio.txt', ' Oferta: ' + precio_oferta, {flag: 'a+'} ) 
               })
               
               cy.get(btn).then(function($beneficio){ 
                 var beneficio1= $beneficio.text().trim()
                 cy.log(beneficio1)
                 //cy.writeFile('caluga_cyber_precio.txt', ' Beneficio: ' + beneficio1, {flag: 'a+'} ) 
               }) 
          
            }   
      })
    
     })
