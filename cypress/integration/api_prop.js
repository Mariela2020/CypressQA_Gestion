describe('Test Propiedades cyber', ()=>{


 it.only('API Propiedad', ()=>{

    var total= 39
    var count = 0
    
    for (let i = 1; i < total; i++) { 
            
        //cy.readFile('cypress/fixtures/sitioweb.json').then((data) =>{
        cy.readFile('cypress/fixtures/proyecto_id.json').then((data) =>{  
            var dat = data[count].nro
            cy.log(dat)
            var id=data[count].id
            cy.log(id)
        
        cy.request('GET', `https://ww2.toctoc.com/gwtt/propiedad/nuevo/${id}`).as('propiedad')
        cy.get('@propiedad').should(response =>{
          expect(response.body.propiedad.imagenes).to.not.be.empty
          expect(response.body.propiedad.publicada).to.be.true
          expect(response).to.have.property('status', 200)
        })
        count++ 

      }) 
    
    }

 })


      
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