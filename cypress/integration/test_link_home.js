describe('TC Recorre Propiedades', ()=> { 
     
    
        
 it('Revisión de enlace', ()=>{  
     
    //cy.visit('https://www.toctoc.com/arriendo/?o=link_menu');
   // cy.visit('https://www.toctoc.com/venta/?o=link_menu&d=todo_venta')
  //cy.visit('https://www.toctoc.com/Landing/valle-grande/');
   //cy.visit('https://www.toctoc.com/landing/especial-extranjeros/')
   //cy.visit('https://qa.toctoc.com/cyber/')
   //cy.visit('https://www.toctoc.com/oportunidades/?o=link_menu')
   cy.visit('https://www.toctoc.com/oportunidades?ordenarpor=por-defecto&total=306&comuna=Todas&dormitorio=0&banos=0&superficieDesde=0&superficieHasta=0&precioDesde=0&precioHasta=0')
   //cy.visit('https://www.toctoc.com/landing/tour-virtual/')
   //cy.visit('https://www.toctoc.com/venta/?o=link_menu&d=todo_venta')
    
    var count = 0   
    cy.get("a").each($a => {
        count++
        const url = $a.attr("href")
        cy.writeFile('proyecto_oportunidades.txt', '\nid: '+ count + ' '+url, {flag: 'a+'} )

    })   
    
    
        
   })

})
     
     
       
     