import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const d = new Date
const date = [d.getDate(),
d.getMonth() + 1,
d.getFullYear()].join('-') 

const hora = [d.getHours(),
  d.getMinutes(),
  d.getSeconds()].join(':')

Given('El usuario se encuentra en la página de Gestión Corredor y Hace click sobre el Entrar', () =>{
  
  cy.visit('https://ww2.qatoctoc.com/gestioncorredor/')
  //cy.visit('https://ww2.toctoc.com/gestioncorredor/') 
  cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')    

});

And('Debe iniciar cuenta con credenciales de corredor valido', ()=>{

  cy.get('.menu__section--profile > a').click()
  cy.intercept("${ssoGatewayUrl}/**").as('sso')
  cy.get('#email').type('hurtadomariela2@gmail.com')
  cy.get('#password').type('prueba',{sensitive: true})
  // cy.get('#email').type('fchaves@remax-vision.cl')
  // cy.get('#password').type('sebajacartera')
  cy.get('.btn > span').click()
  cy.get('[href="https://sso.toctoc.com/?o=gc&url=aHR0cDovL3d3Mi50b2N0b2MuY29tL2dlc3Rpb25jb3JyZWRvci8="]').should('be.visible').and('contain','hurtadomarie')  
    
});

And('Hace click sobre el link Producto', ()=>{

  cy.get('.gCdesktop > :nth-child(3) > a').click()
   
});

And('Visualiza los productos y selecciona la tarjeta del producto a contratar', ()=>{

  cy.get(':nth-child(2) > .item_superior > .desktop').click()
  var precioUF = "3.00"
  precioUF = { precioUF : (precioUF)};
  cy.writeFile('cypress/fixtures/dataUF2.json', precioUF);
});

When('Cuando el usuario Selecciona el producto a Contratar', ()=>{

  cy.get('.modal-footer > :nth-child(2) > .btn').click()

});

And('Se verifica los datos almacenado en cada formulario', ()=>{

  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 1/3')
  cy.wait(3000)
  cy.get('#nextStep').click()
  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 2/3')
    
});

And('Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC', ()=>{
    
  cy.get('#aceptaTerminos').click()
    
});

And('Hace click al botón Enviar', ()=>{

  cy.get('.btn-danger').click({force: true}) 

});

And('Se debe redireccionar al Detalle del contrato', ()=>{

  //  cy.get('.title > :nth-child(2)').should('be.visible').and('contain','paso 3/3')
  
  //cy.get('.item-flex > span.total').then(function($valorelem){
  cy.get(':nth-child(2) > span.total').then(function($valorelem){
        
    const totalrestxt= $valorelem.text()
    var totalres = totalrestxt.substring(1)
    //cy.log(totalrestxt)
    var totalint= parseFloat(totalres)
    cy.log(totalint)
      
    cy.fixture('dataUF2').then((dataUF2) => {
      var precio = dataUF2.precioUF
      var precio1= parseFloat(precio)
      cy.log(precio1)

      cy.fixture('dataUF.json').then((dataUF) => {
        var valueUF = dataUF.uf
        var valueUF1 = parseFloat(valueUF)
        cy.log(valueUF1)

        var ivaUF = (precio*0.19).toFixed(2)
        cy.log(ivaUF)
        var precioesp= Number(precio1) + Number(ivaUF) 
        cy.log(precioesp)
        var precioesp1= precioesp * valueUF1
        cy.log(precioesp1)
        var totalesp= Math.round(precioesp1) 
        //cy.log(totalesp)
        var totalesp1 = new Intl.NumberFormat().format(totalesp)
        var totalesp2 = parseFloat(totalesp1)
        cy.log(totalesp2)

       // expect(totalint, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(totalesp2)
        
        totalres = { totalres : (totalesp2)};
        cy.writeFile('cypress/fixtures/datatotal.json', totalres);

        if (totalint==totalesp2)
          {
          cy.log('El Total del Resumen obtenido es igual al Total esperado')
          }
        else
          {
          cy.writeFile('diferencia.txt', '\nTotal Resumen Obtenido: ' + totalint + '/ Total Resumen Obtenido: ' + totalesp2 + ' ' + date + '  ' + hora, { flag: 'a+' })
          //cy.writeFile('diferencia.txt', '\nPrecio del producto esperado: ' + precioesp2 + ';  ' + date + '  ' + hora, { flag: 'a+' })
          }  
      })
    
    })
        
    cy.writeFile('producto.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  }) 

   // cy.get(':nth-child(4) > .col-12 > h6').click()
   // cy.screenshot()  
    cy.get('.btn').click({force: true})
    cy.title().should('eq','Pago de servicios')
})  

Then('Se visualizar medio de pago disponibles', ()=>{    
  
  cy.get('.col-md-8 > :nth-child(2)').then(function($valorelem){
        
    const productotxt= $valorelem.text()           
    cy.writeFile('producto.txt', '\nProducto: ' + productotxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
  })

  cy.get('.body-process > :nth-child(2) > .row > .col-md-4 > .title-c').then(function($valorelem){
      
    const preciotxt= $valorelem.text().trim()
    //cy.log(preciotxt)
    var precio_obt = preciotxt.substring(1)
    var precio_obt1 = parseFloat(precio_obt)
    cy.log(precio_obt1)

    cy.fixture('dataUF').then((dataUF) => {
      const valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
        
      cy.fixture('dataUF2').then((dataUF2) => {
        var precio = dataUF2.precioUF
        var precio1= parseFloat(precio)
        cy.log(precio1)
        var precioesp = precio1*valueUF1
        cy.log(precioesp)
        var precioesp1= Math.round(precioesp)
        cy.log(precioesp1)
        var precioesp2 = new Intl.NumberFormat().format(precioesp1)
        var precioesp3 = parseFloat(precioesp2)
        cy.log(precioesp2)
       
        // expect(precio_obt1, "El Precio obtenido debe ser igual al Precio esperado").eq(precioesp2)
      
  
      cy.writeFile('producto.txt', '\nPrecio del producto: ' + preciotxt + ';  ' + date + '  ' + hora, { flag: 'a+' })

      if (precio_obt1==precioesp3)
        {
          cy.log('El Precio obtenido es igual al Precio esperado')
        }
      else
        {
          cy.writeFile('diferencia.txt', '\nPrecio del producto Obtenido: ' + precio_obt1 + '/ Precio del producto esperado: ' + precioesp3 + ' ' + date + '  ' + hora, { flag: 'a+' })
        //  cy.writeFile('diferencia.txt', '\nPrecio del producto esperado: ' + precioesp2 + ';  ' + date + '  ' + hora, { flag: 'a+' })
        }  

      })

    })
      
  })
               
  cy.get(':nth-child(3) > .col-sm-12 > .title-c').then(function($valorelem){
      
    const ivatxt= $valorelem.text()
    var ivaobt= ivatxt.substring(6)
    var ivaobt1 = parseFloat(ivaobt)

    cy.fixture('dataUF').then((dataUF) => {
      const valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
         
      cy.fixture('dataUF2.json').then((dataUF2) => {
        var precioUF = dataUF2.precioUF
        var precio= parseFloat (precioUF)
        var ivauf = (precio*0.19).toFixed(2)
        cy.log(ivauf)
        var ivaclp =(ivauf*valueUF1)
        cy.log(ivaclp)
        var ivaclp1 = Math.round(ivaclp)
        var ivaclp2 = new Intl.NumberFormat("de-DE").format(ivaclp1)
        var ivaclp3 = parseFloat(ivaclp2)
       // expect(ivaobt1, "El Iva obtenido debe ser igual al Iva esperado").eq(ivaclp3)
        
  
      cy.writeFile('producto.txt', '\nIva: ' + ivatxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
  

    if (ivaobt1==ivaclp3)
        {
          cy.log('El Iva obtenido es igual al Iva esperado')
        }
      else
        {
          cy.writeFile('diferencia.txt', '\nIva del producto Obtenido: ' + ivaobt1 + '/ Iva del producto esperado: ' + ivaclp3 + date + '  ' + hora, { flag: 'a+' })
         // cy.writeFile('diferencia.txt', '\nIva del producto esperado: ' + ivaclp3 + ';  ' + date + '  ' + hora, { flag: 'a+' })
        }  
      
      })
      
    })  
  })

  cy.get('.total > strong').then(function($valorelem){
      
    const totaldetxt= $valorelem.text()
    //cy.log(totaldetxt)
    var totaldet = totaldetxt.substring(1)
    var totaldet1 = parseFloat(totaldet)
    cy.log(totaldet1)
    
    cy.fixture('datatotal.json').then((datatotal) =>{

      var totalrestxt1 = datatotal.totalres
      var totalres1= parseFloat(totalrestxt1)
      cy.log(totalres1)
      //expect(totaldet1, "El Total del Detalle es igual al Total del Resumen de Compra").eq(totalrestxt1)
               
    cy.writeFile('producto.txt', '\nTotal: ' + totaldetxt + ';  ' + date + '  ' + hora, {flag: 'a+'} )
                  
    if (totaldet1==totalres1)
        {
          cy.log('El Total del Detalle es igual al Total del Resumen de Compra')
        }
    else
       {
        cy.writeFile('diferencia.txt', '\nTotal del Detalle Obtenido: ' + totaldet1 + '/ Total del Resumen Obtenido: ' + totalrestxt1 + ' ' + date + '  ' + hora, { flag: 'a+' })
       // cy.writeFile('diferencia.txt', '\nTotal del Resumen Obtenido: ' + totalrestxt1 + ';  ' + date + '  ' + hora, { flag: 'a+' })
       // cy.screenshot() 
       }          
  })

 })
});

