describe('TC Recorre Propiedades', function() 
 {
    beforeEach(function(){
        cy.visit('https://www.toctoc.com/propiedades/arriendoparticularsr/departamento/estacion-central/toro-mazote-64-(+-bodega)-condominio-centro-alameda-ii/1460927?o=arriendos_extranjeros_caluga_info');
        //cy.get('#onesignal-slidedown-cancel-button').click()
      });
  
    it('Recorre las propiedades en Arriendo < 350 mil pesos',function ()  
     {
       const ante = ':nth-child'
       const post = '> .c-imgres > a > .res-slide > .sld-item > picture > img.imgslide'
       var count = 0
       var total= 3

         
        
    
     })


    })