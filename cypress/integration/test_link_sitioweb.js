describe('TC Recorre Propiedades', ()=> { 
       
    it('Revisión de enlace', ()=>{  
        
        var total= 40

        var count = 1

        for (let i = 1; i < total; i++) { 
            
          //cy.readFile('cypress/fixtures/sitioweb.json').then((data) =>{
          cy.readFile('cypress/fixtures/cyber_tourvirtual.json').then((data) =>{  
            var dat = data[count].id
            cy.log(dat)
            var enlace=data[count].tourvitual
           // var enlace=data[count].video
           // var propiedad=data[count].propiedad
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
            
       
        
      
        
        
          
        

    




