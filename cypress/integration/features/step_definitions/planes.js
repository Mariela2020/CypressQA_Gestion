import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
//const fetch = require('node-fetch')

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('-')

Given('Llamada a la API', () =>{
    
  cy.request(`https://mindicador.cl/api/uf/${date}`).as('respuestaUF'); 
  cy.get('@respuestaUF').then((response) => {
    var someArr = new Array();
   // const formatConfig = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'})
    var value = response.body.serie.map(e => e.valor).toString();
   // someArr = { uf : formatConfig.format(value)};
    var value1 = Math.round (value)
    someArr = { uf : (value1)};
    cy.writeFile('cypress/fixtures/dataUF.json', someArr);
    cy.writeFile('registroUF.txt', '\nUF: ' + value + ' ' + date , {flag:'a+'})
  }); 

});  

  And('El usuario se encuentra en la página de Gestion Corredor', () =>{
    cy.visit('https://ww2.toctoc.com/gestioncorredor/')
    //cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
    
  });

  And('Hace click sobre el botón Ver Planes',()=>{
    cy.get('.gCdesktop > :nth-child(2) > a').click()
  });

  And('Visualiza la información del plan seleccionado y hace click al botón Contratar',()=>{
    cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
    var precioUF = 1
    precioUF = { precioUF : (precioUF)};
    cy.writeFile('cypress/fixtures/dataUF2.json', precioUF);
    
  });

  When('Registra el Usuario',()=>{
    cy.get('#nombreUser').type('Mariela Hurtado')
    cy.get('#telefonoUser').type('+56993947209')
    cy.get('#emailUser').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('#password')
    cy.get('#nextStep').click()
  });

  And('Llena los formularios con los campos solicitados',()=>{
    cy.get('#razonSocial').type('Prueba de Flujo QA')
    cy.get('#rutFacturacion').clear().type('267008469')
    cy.get('#nombreFantasia').type('Tuinmueble.com')
    cy.get('#giro').type('Giro 123')
    cy.get('#telefono').type('+56993947209')
    cy.get('#nextStep').click()
    cy.get('#representanteLegal').type('Mariela Hurtado')
    cy.get('#rutRepresentanteLegal').clear().type('267008469')
    cy.get('#emailFacturacion').type('mariela.hurtado@toctoc.com')
    cy.get('#direccionFacturacion').type('Manuel Rodriguez')
    cy.get('#region').select('13')
    cy.get('#comuna').select('339')
  });

  And('Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC del Plan',()=>{
    cy.get('#aceptaTerminos').click()
    cy.get('.btn-danger').click()
    cy.wait(3000)
  });

  And('Visualizar el Detalle del contrato del plan a contratar',()=>{

    //cy.get('#verDetalle').click()
    //cy.screenshot()
    cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
   // cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(2) > span.total').then(function($valorelem){    
      const totalrestxt= $valorelem.text()
      var totalres= totalrestxt.substring(1)
      var totalint= parseFloat(totalres)
     
      cy.fixture('dataUF2.json').then((dataUF2) => {
        var precio = dataUF2.precioUF

      cy.fixture('dataUF.json').then((dataUF) => {
        var valueUF = dataUF.uf
        
        var ivaUF = precio*0.19
        var precioesp= (precio+ivaUF)*valueUF
        var totalesp= Math.round(precioesp) 
        var totalesp1 = new Intl.NumberFormat().format(totalesp)
        var totalesp2 = parseFloat(totalesp1)
        expect(totalint).eq(totalesp2)

        totalres = { totalres : (totalesp2)};
        cy.writeFile('cypress/fixtures/datatotal.json', totalres);
      })

    })
   
      cy.writeFile('fichero.txt', 'n\nTotal Resumen: ' +totalrestxt + ';  ' + date, {flag: 'a+'} )
    })
   
    cy.get('.modal-footer > .btn').click()
    //cy.get('.btn-danger').click()  
  
  });

  Then('Visualizar el Detalle de Pago y medio disponible', ()=>{
     
    cy.url().should('include', 'https://ventas.toctoc.com/')
    cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
      const productotxt= $valorelem.text()
      cy.log(productotxt)       
      cy.writeFile('fichero.txt', '\nProducto: ' +productotxt + ';  ' + date, {flag: 'a+'} )
        
    })

    cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
      
      const preciotxt= $valorelem.text().trim()
      var precio_obt = preciotxt.substring(1)
      var precio_obt1 = parseFloat(precio_obt)
     // cy.log(precio_obt1)   

      cy.fixture('dataUF').then((dataUF) => {
        const valueUF = dataUF.uf
       // cy.log(valueUF)  
      
        cy.fixture('dataUF2.json').then((dataUF2) => {
          var precio = dataUF2.precioUF
          var precioesp = precio*valueUF 
          var precioesp1 = new Intl.NumberFormat().format(precioesp)
          var precioesp2 = parseFloat(precioesp1)
          expect(precio_obt1).eq(precioesp2)
        })

        cy.writeFile('fichero.txt', '\nPrecio del producto: ' + preciotxt + ';  ' + date, { flag: 'a+' })
      })
    
    })
    
    cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
      
       const ivatxt= $valorelem.text() 
       var ivaobt= ivatxt.substring(6)
       var ivaobt1 = parseInt(ivaobt).replace(/./g, "")
      // ivaobt1 = ivaobt1.replace(/./g, "")
       
       cy.log(ivaobt1)
       
       cy.fixture('dataUF').then((dataUF) => {
        const valueUF = dataUF.uf
       
        cy.fixture('dataUF2.json').then((dataUF2) => {
         var precioUF = dataUF2.precioUF
         var ivaesp = precioUF*0.19
         var ivaespclp =(ivaesp*valueUF)
         // cy.log(ivaespclp)
         var ivaespclp1 = Math.round(ivaespclp)
         cy.log(ivaespclp1)

         //const formatConfig = new Intl.NumberFormat('es-CL', {currency: 'CLP'})
         //var ivaespclp2 = formatConfig.format(ivaespclp1)
         //var ivaespclp3 = parseInt(ivaespclp2)
         //cy.log(ivaespclp2) 
         //cy.log(ivaespclp3) 
         //expect(ivaobt1).eq(ivaespclp1)
        })  

        cy.writeFile('fichero.txt', '\nValor del producto: ' +ivatxt + ';  ' + date, {flag: 'a+'} )

      })

    cy.get('.total > strong').then(function($valorelem){
      
      const totaldetxt= $valorelem.text()
      var totaldet = totaldetxt.substring(1)
      var totaldet1 = parseFloat(totaldet)
    
          cy.fixture('datatotal.json').then((datatotal) =>{

              var totalrestxt1 = datatotal.totalres
              cy.log(totalrestxt1)
              expect(totaldet1).eq(totalrestxt1)
          })

      cy.writeFile('fichero.txt', '\nIva del producto: ' +totaldetxt + ';  ' + date, {flag: 'a+'} )
    })  

  

 })  
 
})

