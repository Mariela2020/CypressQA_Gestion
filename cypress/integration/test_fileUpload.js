// https://mindicador.cl/ no tiene los valores actualizados
// https://reqres.in/


describe('Demo', function(){

    beforeEach(function(){
       cy.visit('https://www.saucedemo.com/');
     });
  
     it('should have title value Swag Labs', function(){
  
       cy.title().should('eq', 'Swag Labs');
     });
  
     it('URL should be', function(){
       cy.url().should('eq', 'https://www.saucedemo.com/');
     });
  
     it('should redirect /inventory.html', function(){
  
       cy.get('[data-test="username"]').type('standard_user');
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('[data-test="login-button"]').click();
  
       cy.location('pathname').should('eq', '/inventory.html');
  
       cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs ')
       //.first().click()
       //.last().click()
       //.eq(-2).click()
       .each(function($el, index, $listofElements){
          cy.log($el.text())
  
          if(index==3){
              $el.click()
          }
  
          if($el.text()== 'Sauce Labs Bolt T-Shirt'){
              $el.click()
          }
  
        /*  cy.get('.inventory_details_price').then(function($valorelem){
  
              const valortxt= $valorelem.text()
              cy.log(valortxt)
              const valoresp= '$15.99'
              expect(valortxt).eq(valoresp)
            //  expect(valortxt).eq('Total '+valoresp)
          }) */
  
       })
  
       cy.get('.inventory_details_price').then(function($valorelem){
          
          const fecha = new Date()
          const valortxt= $valorelem.text()
          cy.log(valortxt)
          
          const valoresp= '$15.99'
          expect(valortxt).eq(valoresp)
          
          
          cy.writeFile('sampleFile.txt', '\nvalor del producto: ' + valortxt + ';  ' + Date(), {flag: 'a+'} )
         
             
          })
          
          cy.request('GET', 'https://reqres.in/api/users/2').then((response) =>{
           expect(response.status).equal(200)     
         })
         
      })     
      
       
       
      //cy.request('GET', 'https://reqres.in/api/users/2').then((response) =>{
      //     expect(response.status).equal(200)     
      //})
  
      //cy.intercept("GET", "dia/21", { fixture: "cypress/fixtures/UFmes.json" })
  
         
     /* cy.readFile("cypress/fixtures/prueba.json").then((valor) => {
        var UF= [fecha.getDate()-1];
        //cy.writeFile("cypress/fixtures/data.json", JSON.stringify(data))
        cy.log(valor.UF);
      })*/
  
  
  
     /* cy.readFile("cypress/fixtures/UFmes.json", (err, data) => {
        if (err) {
            return console.error(err);
        };
      }).then((data) => {
        data.dia = diaUF
        //cy.writeFile("cypress/fixtures/data.json", JSON.stringify(data))
        cy.log(data);
      }) */
  
      
   
  
  
   /* it ('write on a file test', function(){
  
      cy.writeFile('sampleFile.txt', 'Hello world\n')
      cy.writeFile('sampleFile.txt', 'this is my samplefile', {flag: 'a+'})
  
      cy.writeFile('cypress/fixtures/example.json', {
  
          name: "Prueba1",
          email: "prueba1@gmail.com",
          password: "123456", 
          
        //  {flag: 'a+'},
          
          
      }) 
  
     }) */
  
     it('read file test', function(){
  
      cy.readFile('sampleFile.txt').should('exist').and('contain', 'Hello')
    
      
      cy.fixture('example').then((profile)=> {
  
          expect(profile.name).to.eq('Prueba1')
  
      })
  
     })
  
   
  })
  
  
  
  
  
  
  