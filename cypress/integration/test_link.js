describe('TC Recorre Propiedades', ()=> { 
     
    
       // cy.visit('https://www.saucedemo.com/');
       
    it('Revisión de enlace', ()=>{  
        
        var total= 6
        var count = 0

        for (let i = 1; i < total; i++) { 
            
          cy.readFile('cypress/fixtures/sitioweb.json').then((data) =>{
            var dat = data[count].id
            cy.log(dat)
            var enlace=data[count].url
            cy.log(enlace)

            cy.request(`${enlace}`).then((response) => { 
             
                if(!response.status===200)
                  { 
                    cy.writeFile('link_error.txt', '\nURL: ' + enlace, {flag: 'a+'} )
                  }  
                if(response.body.null===true)  
                  {
                    cy.log(dat)
                    cy.writeFile('link_vacio.txt', '\nURL: ' + enlace, {flag: 'a+'} ) 
                  }
                   
                      
            })  

            count++ 

          })
            
          } 
        
        })
      
      })
        
        
          
        

    




