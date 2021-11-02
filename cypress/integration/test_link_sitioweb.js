describe('TC Recorre Propiedades', ()=> { 
       
    it('Revisión de enlace', ()=>{  
        
        var total= 3
        var count = 222

        for (let i = 1; i < total; i++) { 
            
          cy.readFile('cypress/fixtures/valle_grande.json').then((data) =>{
            var dat = data[count].id
            cy.log(dat)
           // var enlace=data[count].url
            var enlace=data[count].video
            var propiedad=data[count].propiedad
            cy.log(enlace)
            
            cy.request(`${enlace}`).then((response) => { 
              
              
               if(response.failOnStatusCode===true)
                { 
                 cy.writeFile('link_error.txt', '\nid:' + dat + ' ' + propiedad +  ' ' + enlace, {flag: 'a+'} )
               }  
              if(response.body.null==true)  
                {
                  cy.writeFile('link_error.txt', '\nid:' + dat + ' ' + propiedad +  ' ' + enlace, {flag: 'a+'} )
                }     
                          
              })

            count++ 
          })
        }

    })
        
})
            
       
        
      
        
        
          
        

    




