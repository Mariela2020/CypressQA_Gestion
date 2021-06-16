describe('Tests Suites', function() 
{
 // var uf= 29064.70; 
  var iva= 0.19;
  const d = new Date
   const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  it('Flujo Planes Inicia',function ()  
  {
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')
      cy.get('.gCdesktop > :nth-child(2) > a').click()
      cy.get('.inicia > .col-12 > .plan-btn > .btn').click({force:true})
      cy.get('#nombreUser').type('Mariela Hurtado')
      cy.get('#telefonoUser').type('+56993947209')
      cy.get('#emailUser').type('hurtadomariela2@gmail.com')
      cy.get('#password').type('#password')
      cy.get('#nextStep').click()
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
      cy.get('#aceptaTerminos').click()
      cy.get('.btn-danger').click()
      cy.wait(3000)
      //cy.get('#verDetalle').click()
      
      
      cy.get('.item-flex > span.total').then(function($valorelem){
        const totalrestxt= $valorelem.text()
       // var totalres = totalrestxt
        cy.log(totalrestxt)       
        cy.writeFile('fichero.txt', '\n\nTotal Resumen: ' +totalrestxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )
                  
      })
      
      //cy.screenshot()
      cy.get('div.pago__Productos__Extra__detalle.contenedor-padre:nth-child(4) section.flujo__pago div.container.detallePago div.row.detalle__datos:nth-child(5) div.btn-next.col-12 a.btn.btn-danger.button.btn-block > span:nth-child(1)').click()
      cy.get('.modal-footer > .btn').click()
         
      cy.get('.detalle > :nth-child(1) > .text').then(function($valorelem){
        
        const productotxt= $valorelem.text()
        cy.log(productotxt)       
        cy.writeFile('fichero.txt', '\nProducto: ' +productotxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )
                  
      })

      cy.get('.desktop > .title-c').then(function($valorelem){
        
        const preciotxt= $valorelem.text()
        cy.log(preciotxt)
        cy.writeFile('fichero.txt', '\nPrecio del producto: ' +preciotxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )
                  
      })
      
      cy.get('.iva > .col-sm-12 > .title-c').then(function($valorelem){
        
          const ivatxt= $valorelem.text()
          cy.log(ivatxt)             
          cy.writeFile('fichero.txt', '\nIva del producto: ' +ivatxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )
                      
      })  

      cy.get('.total > strong').then(function($valorelem){
        
        const totaldetxt= $valorelem.text()
       // var totaldet = totaldetxt
        cy.log(totaldetxt)
        //const valoresp= '$29.99'
        //expect(totalres).eq(totaldet)
        cy.writeFile('fichero.txt', '\nTotal del producto: ' +totaldetxt + ';  '  + date + '  ' + hora, {flag: 'a+'} )
    
      
    })  

      
      
    })

 })
