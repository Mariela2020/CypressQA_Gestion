describe('TC Recorre Landing Tour Virtual', function() 
 {
    beforeEach(function(){
        cy.visit('https://www.toctoc.com/landing/tour-virtual/')
       //cy.visit('https://ww2.toctoc.com/gestioncorredor/corredoras/propiedades/procasa/procasa-villarrica-spa-propiedades/14737')
  
    });
  
    it('Recorre Precio de las calugas',function ()  
     {
           
       var count = 0
       var total= 228
       
        for (let i = 1; i < total; i++) { 
            count++
            //cy.visit('https://www.toctoc.com/landing/tour-virtual/');
            const caluga = '//*[@id="listado"]/li'    
            var localizador= caluga + '['+count+']'   
            //cy.log(localizador)
            
            cy.xpath(localizador).then(function($el){
            
                var precio_caluga= $el.text().trim()
                //cy.log(precio_caluga)   
                var precio= precio_caluga.slice(0, 8) 
                //cy.log(precio)   

                cy.writeFile('precio_caluga.txt', '\nid: '+i+ ' precio: ' + precio, {flag: 'a+'})
            
            })

           

        }
    
     })

    })




  

