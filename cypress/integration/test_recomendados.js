describe('TC Recorre Propiedades', function() 
 {
    beforeEach(function(){
        //cy.visit('https://www.toctoc.com/landing/tour-virtual/')
        cy.visit('https://qa.toctoc.com/cyber/')
       // cy.visit('https://www.toctoc.com/Landing/valle-grande/')
       // cy.visit('https://www.toctoc.com/venta/?o=link_menu&d=todo_venta')
        //cy.visit('https://www.toctoc.com/');
        //cy.get('#onesignal-slidedown-cancel-button').click()
        //cy.title().should('eq','TOCTOC.com - Casas, Departamentos en Venta y Arriendo publicados en este portal inmobiliario') 
       
      });
  
    it('Recorre las propiedades en Recomendados',function ()  
     {
        var total= 50
        var count = 0


        for (let i = 1; i < total; i++) { 
            
          
          cy.readFile('cypress/fixtures/cyber.json').then((data) =>{
            var dat = data[count].id
            cy.log(dat)
            var propiedad = data[count].propiedad
            var enlace=data[count].url
            //cy.log(enlace)
            
           cy.visit(enlace) 

           cy.url().then(url => {
            //cy.log(url)   
           
            if(url === enlace)
            {
              cy.log('publicado')
              cy.wait(2000)
              cy.xpath('//*[@id="partialCabecera"]/div[1]/div/div/div/strong').each(function($valorelem){
            
                var precio_ficha= $valorelem.text()
                cy.log(precio_ficha)   
                cy.writeFile('publicado.txt', '\nid: ' + dat + '  '+ propiedad + ' Precio Ficha: ' + precio_ficha, {flag: 'a+'} )
               // cy.writeFile('publicado.txt', '\nid: ' + dat + '  '+ propiedad, {flag: 'a+'} )
              })

            } 
            else
             {
                cy.log('despublicado')
                cy.writeFile('despublicado.txt', '\nid: ' + dat + '  '+ propiedad, {flag: 'a+'} )
            }

          })
   
            count++ 
        
          })

        }

     })


 })


   