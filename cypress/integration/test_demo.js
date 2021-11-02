// https://mindicador.cl/ no tiene los valores actualizados
// https://reqres.in/
const fetch = require('node-fetch')

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('/') + ' ' +
  [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')
const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

describe('Demo', function(){

    beforeEach(function(){

      cy.viewport('iphone-5') 
      //cy.visit('https://www.saucedemo.com/');
     });
  
     it('visits site', () => {

      cy.visit('https://www.saucedemo.com/');
  })


     it('should have title value Swag Labs', function(){
  
       cy.title().should('eq', 'Swag Labs');
     });
  
     it('URL should be', function(){
       cy.url().should('eq', 'https://www.saucedemo.com/');
     });
  
     it('should redirect /inventory.html', function(){
  
       cy.get('[data-test="username"]').type('standard_user');
       cy.get('[data-test="password"]').type('secret_sauce', {sensitive: true});
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
          
         //const fecha = new Date()
          let valortxt= $valorelem.text()
          cy.log(valortxt)
          var valor1=valortxt.substring(1)
          cy.log(valor1)
          let valor2= parseFloat(valor1)
          cy.log(valor2)
          let valor3 = parseFloat(valor2)+100
          cy.log(valor3)
          let valor4 = Math.round(valor3)
          cy.log(valor4)
         
          var cadena3= "$ 35.084 CLP"
          var cadena4= cadena3.substring(1)
          var cadena6= parseFloat(cadena4)
          cy.log(cadena6)
         // const valoresp= '$15.99'
          //expect(valortxt).eq(valoresp)
          cy.log(hora)
        
          var array = new Array()
          cy.log(array)
          var precioUF = 1
          precioUF = { precioUF : (precioUF)};
          cy.writeFile('cypress/fixtures/dataUF2.json', precioUF);
        
        });

        cy.fixture('dataUF2.json').then((dataUF2) => {
          var precio = dataUF2.precioUF
          cy.log(precio)
          var precio1 = parseInt(precio)
          cy.log(precio1)

          cy.fixture('dataUF.json').then((dataUF) => {
            var value = dataUF.uf
            cy.log(value)
            //var value1= value.substring(1)
            //var value2 = parseFloat(value1)
            //cy.log(value2)
            //var value3 = Math.round(value2)
            //cy.log(value3)
            
            var ivaUF = precio1*0.19
            var precioesp= (precio1+ivaUF)*value
            cy.log('Totalesp :' +precioesp)
            var totalesp= Math.round(precioesp) 
            cy.log(totalesp)
            var totalesp1 = new Intl.NumberFormat().format(totalesp)
            cy.log('mil: '+totalesp1)
            cy.log(prueba1)
            var prueba= (value*0.19)
            var prueba1= Math.round(prueba)

            var prueba2 = new Intl.NumberFormat("de-DE").format(prueba)

           // var prueba1 = new Intl.NumberFormat("de-DE").format(prueba)
            cy.log('Ivaclp :' +prueba2)
            //var prueba4= parseFloat(prueba2)
            
            //var prueba3= parseFloat(prueba2)
            //cy.log('Ivaclp :' +prueba4)
            //var prueba1= (value2*0.19)
            //cy.log(prueba1)

            //var ivaCLP= Math.round(ivaUF*value2)
            //cy.log(ivaCLP)  
            //var totalres = precioesp+ivaCLP
            //cy.log(totalres)
          })
        });
         

          
        cy.request('GET', 'https://reqres.in/api/users/2').then((response) =>{
         expect(response.status).equal(200)     
        })
         

        const d = new Date
        const date = [d.getDate(),
        d.getMonth() + 1,
        d.getFullYear()].join('-')

       cy.fixture('prueba.json')
         .as('data')
         .then((data) => {
          data.table[0].number = 1;
          //data.table[1].number = 2;
          cy.log(data);
        });
       
        
        cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF'); 
        cy.get('@respuestaUF').then((response) => {
          var someArr = new Array();
          //cy.log(someArr)  // lo muestra vacio
         // const formatConfig = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'})
       /*   var value = response.body.serie.map(e => e.valor).toString();
          //someArr = { uf : formatConfig.format(value)};
          cy.log(value)
          var value1 = Math.round(value)
          cy.log(value1)
          someArr = { uf : (value1)};
          cy.writeFile('cypress/fixtures/dataUF2.json', someArr);
          cy.writeFile('registroUF1.txt', '\nUF: ' + value + ' ' + date, {flag:'a+'})*/
       // }) 
       
        cy.fixture('dataUF2.json').then((dataUF2) => {
          var precioUF = dataUF2.precioUF
          var ivaesp = precioUF*0.19
          var ivaesp1 =(ivaesp*29510)
          cy.log(ivaesp1)
          var iva1 = Math.round(ivaesp1)
          cy.log(iva1)
          var iva2 = new Intl.NumberFormat("de-DE").format(iva1)
          var iva3 = parseFloat(iva2)
          cy.log('iva3 ' +iva3)

        })
          cy.fixture('dataUF2').then((dataUF1) => {
            
            var value = dataUF1.uf
            cy.log(value)
           // var value1 = parseFloat(value)
           // cy.log(value1)
            var value9 = value +100
            cy.log(value9)
            //var value8 = Math.round(value9)
            //cy.log(value8)

            var value2= 1*0.19 
            cy.log(value2)
            var value3= value2*value
            cy.log(value3)           
        
          })       
        })   
          
       
           // cy.fixture('productos.json'.then(array =>{
           //
            //  const prod = aray.find(element => element.producto === Inicia )
            //  cy.log(prod)
           // }))

        })
       
        
//});
      



       //cy.fixture('ufmes').as('data1').then((data1)=> {
        
         // data.Dia[d.getDate()].uf.text()
      //   expect(data1.dia[d.getDate()]).text();
      //   data1.tabla[0].Dia=[d.getDate()];
      //    cy.log(data1);
         
       
         //const valoruftxt= '${d27}';  
         //cy.log(valoruftxt); 
        
    
        //cy.get('[data-test="username"]').type(example.username);
        //const valoresp= '$15.99'
      //expect(valortxt).eq(valoresp)

       //cy.fixture('valoruf').then(function($valoruf) {
      
     //  cy.fixture('valoruf').then((valoruf)=> {
     //   const valoruftxt= $valoruf.text(valoruf.d27); 
     //   cy.log(valoruftxt); 
      // })
      //  const valoruftxt= $valoruf.text()
      //  cy.log(valoruftxt);
        
      /*  cy.fixture('valoruf').then(valoruf)
          .each(function($el, index, $listofElements){
            cy.log($el.text())
    
            if(index==d){
                $el.text(valor)
                cy.log(valor)
            } 

        })*/

     // })
       
      // cy.get('valoruf').then(function($valorelem=d){
      //   const valoruftxt= $valorelem.text()
      //   cy.logt(valoruftxt);
        
       
     
    
   // })
       
      
       
       
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
  
   /*  it('read file test', function(){
  
      cy.readFile('sampleFile.txt').should('exist').and('contain', 'Hello')
    
      
      cy.fixture('example').then((profile)=> {
  
          expect(profile.name).to.eq('Prueba1')
  
      })
  
     })
  
     */
  
})  
  
  
describe('Demo mobile', function(){

  beforeEach(function(){

   // cy.viewport('iphone-5') 
    cy.visit('https://www.saucedemo.com/');
   });

   //it('visits site', () => {

   // cy.visit('https://www.saucedemo.com/');
//})


   it('should have title value Swag Labs', function(){

     cy.title().should('eq', 'Swag Labs');
   });

   it('URL should be', function(){
     cy.url().should('eq', 'https://www.saucedemo.com/');
   });

   it('should redirect /inventory.html', function(){

     cy.get('[data-test="username"]').type('standard_user');
     cy.get('[data-test="password"]').type('secret_sauce', {sensitive: true});
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
        
       //const fecha = new Date()
        let valortxt= $valorelem.text()
        cy.log(valortxt)
        var valor1=valortxt.substring(1)
        cy.log(valor1)
        let valor2= parseFloat(valor1)
        cy.log(valor2)
        let valor3 = parseFloat(valor2)+100
        cy.log(valor3)
        let valor4 = Math.round(valor3)
        cy.log(valor4)
       
        var cadena3= "$ 35.084 CLP"
        var cadena4= cadena3.substring(1)
        var cadena6= parseFloat(cadena4)
        cy.log(cadena6)
       // const valoresp= '$15.99'
        //expect(valortxt).eq(valoresp)
        cy.log(hora)
      
        var array = new Array()
        cy.log(array)
        var precioUF = 1
        precioUF = { precioUF : (precioUF)};
        cy.writeFile('cypress/fixtures/dataUF2.json', precioUF);
      
      });

      cy.fixture('dataUF2.json').then((dataUF2) => {
        var precio = dataUF2.precioUF
        cy.log(precio)
        var precio1 = parseInt(precio)
        cy.log(precio1)

        cy.fixture('dataUF.json').then((dataUF) => {
          var value = dataUF.uf
          cy.log(value)
          //var value1= value.substring(1)
          //var value2 = parseFloat(value1)
          //cy.log(value2)
          //var value3 = Math.round(value2)
          //cy.log(value3)
          
          var ivaUF = precio1*0.19
          var precioesp= (precio1+ivaUF)*value
          cy.log('Totalesp :' +precioesp)
          var totalesp= Math.round(precioesp) 
          cy.log(totalesp)
          var totalesp1 = new Intl.NumberFormat().format(totalesp)
          cy.log('mil: '+totalesp1)
          cy.log(prueba1)
          var prueba= (value*0.19)
          var prueba1= Math.round(prueba)

          var prueba2 = new Intl.NumberFormat("de-DE").format(prueba)

         // var prueba1 = new Intl.NumberFormat("de-DE").format(prueba)
          cy.log('Ivaclp :' +prueba2)
          //var prueba4= parseFloat(prueba2)
          
          //var prueba3= parseFloat(prueba2)
          //cy.log('Ivaclp :' +prueba4)
          //var prueba1= (value2*0.19)
          //cy.log(prueba1)

          //var ivaCLP= Math.round(ivaUF*value2)
          //cy.log(ivaCLP)  
          //var totalres = precioesp+ivaCLP
          //cy.log(totalres)
        })
      });
       

        
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) =>{
       expect(response.status).equal(200)     
      })
       

      const d = new Date
      const date = [d.getDate(),
      d.getMonth() + 1,
      d.getFullYear()].join('-')

     cy.fixture('prueba.json')
       .as('data')
       .then((data) => {
        data.table[0].number = 1;
        //data.table[1].number = 2;
        cy.log(data);
      });
     
      
      cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF'); 
      cy.get('@respuestaUF').then((response) => {
        var someArr = new Array();
        //cy.log(someArr)  // lo muestra vacio
       // const formatConfig = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'})
     /*   var value = response.body.serie.map(e => e.valor).toString();
        //someArr = { uf : formatConfig.format(value)};
        cy.log(value)
        var value1 = Math.round(value)
        cy.log(value1)
        someArr = { uf : (value1)};
        cy.writeFile('cypress/fixtures/dataUF2.json', someArr);
        cy.writeFile('registroUF1.txt', '\nUF: ' + value + ' ' + date, {flag:'a+'})*/
     // }) 
     
      cy.fixture('dataUF2.json').then((dataUF2) => {
        var precioUF = dataUF2.precioUF
        var ivaesp = precioUF*0.19
        var ivaesp1 =(ivaesp*29510)
        cy.log(ivaesp1)
        var iva1 = Math.round(ivaesp1)
        cy.log(iva1)
        var iva2 = new Intl.NumberFormat("de-DE").format(iva1)
        var iva3 = parseFloat(iva2)
        cy.log('iva3 ' +iva3)

      })
        cy.fixture('dataUF2').then((dataUF1) => {
          
          var value = dataUF1.uf
          cy.log(value)
         // var value1 = parseFloat(value)
         // cy.log(value1)
          var value9 = value +100
          cy.log(value9)
          //var value8 = Math.round(value9)
          //cy.log(value8)

          var value2= 1*0.19 
          cy.log(value2)
          var value3= value2*value
          cy.log(value3)           
      
        })       
      })   
        
     
         // cy.fixture('productos.json'.then(array =>{
         //
          //  const prod = aray.find(element => element.producto === Inicia )
          //  cy.log(prod)
         // }))

      })
     
      
//});
    



     //cy.fixture('ufmes').as('data1').then((data1)=> {
      
       // data.Dia[d.getDate()].uf.text()
    //   expect(data1.dia[d.getDate()]).text();
    //   data1.tabla[0].Dia=[d.getDate()];
    //    cy.log(data1);
       
     
       //const valoruftxt= '${d27}';  
       //cy.log(valoruftxt); 
      
  
      //cy.get('[data-test="username"]').type(example.username);
      //const valoresp= '$15.99'
    //expect(valortxt).eq(valoresp)

     //cy.fixture('valoruf').then(function($valoruf) {
    
   //  cy.fixture('valoruf').then((valoruf)=> {
   //   const valoruftxt= $valoruf.text(valoruf.d27); 
   //   cy.log(valoruftxt); 
    // })
    //  const valoruftxt= $valoruf.text()
    //  cy.log(valoruftxt);
      
    /*  cy.fixture('valoruf').then(valoruf)
        .each(function($el, index, $listofElements){
          cy.log($el.text())
  
          if(index==d){
              $el.text(valor)
              cy.log(valor)
          } 

      })*/

   // })
     
    // cy.get('valoruf').then(function($valorelem=d){
    //   const valoruftxt= $valorelem.text()
    //   cy.logt(valoruftxt);
      
     
   
  
 // })
     
    
     
     
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

 /*  it('read file test', function(){

    cy.readFile('sampleFile.txt').should('exist').and('contain', 'Hello')
  
    
    cy.fixture('example').then((profile)=> {

        expect(profile.name).to.eq('Prueba1')

    })

   })

   */

})  

  
  
  