describe('Tests Suites', function() 
{
 
  it('Flujo Retasalo',function ()  
  {
      cy.visit('https://www.qaretasalo.com/')
      //cy.visit('https://www.retasalo.com/')
      cy.title().should('eq','TOCTOC.com - Retasalo - Tasación de propiedades')
      // cy.title().should('eq','TOCTOC.com - Retasalo - Valorización de propiedades')
     //cy.get('.btn > strong').click()    
 })
    
  it ('Busco Propiedad por Rol', () => {

      cy.get(':nth-child(2) > .nav-link').click()
     
      cy.get('.selector__value-container').eq(0).click()
      .find('#react-select-4-input').first().focus().click({force:true})
     // cy.get('#react-select-4-option-0').click({force:true})   // selecciona a Ñuñoa
      cy.contains('Las Condes').click({force:true})
  
      cy.get('.form-control').type('2431-14').first().focus()
      cy.contains('2431-14 - AV LAS CONDES 12631 DP 306 - Las Condes').click({force:true}) 
        // 2431-12 - LAS CONDES 12631 DP 304 - Las Condes
      cy.get('.resuls').click()

      cy.get('[data-test=btn_continuar]').should('be.enabled').click()
      cy.url().should('include', 'https://sso.qatoctoc.com/')
  })

  it('Login de Retasalo',function ()  
  {
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba',{sensitive: true})
    //cy.get('#email').type('camilo.olivos@toctoc.com')
    //cy.get('#password').type('josefa41',{sensitive: true})
    cy.get('.contenido > .row > .btn').click()  
    cy.wait(6000)

   // cy.get('#email').type('camilo.olivos@toctoc.com')
   // cy.get('#password').type('josefa41',{sensitive: true})
    
  })   

 /* it('Ingresa el RUT', function ()
  {
    cy.get('#rut').type('267008469')
    cy.get('.btn').click()
    cy.wait(3000)
  })*/ 

  it('visualizar partes del informe', function()
  {
    cy.get('.dir').should('be.visible')
    cy.wait(1000)
    //.and('contain', 'LAS CONDES N°12631, DP 304')  
    cy.get(':nth-child(1) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(2) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(3) > .accordion-feat > .collapse > p').should('be.visible')
    cy.get(':nth-child(4) > .accordion-feat > .collapse > p').should('be.visible')

  }) 

  it('Medio de Pago disponible', function()
  {
    cy.get('.btn').click()
    cy.wait(3000)
    cy.url().should('include', 'https://pagos.qatoctoc.com/') 
  })

  it('Pago Informe Credito', function()
  {
    cy.get(':nth-child(1) > :nth-child(1) > .sub-title').click()
    cy.get('.number').type('4051885600446623')
    cy.get('#inputGroupSelectMonth').select('12')
    cy.get('#inputGroupSelectYear').select('21')
    cy.get('.col-4 > .form-control').type('123')
    cy.get('.btn-pagar').click() 

    
     
   // cy.get('h1.title-c').should('to.be.visible').screenshot()
   // var error = cy.get(('.error-ingreso > p').should('be.visible').and('contain','Lo sentimos, hemos tenido un problema generando el informe.'))
   
   // if (error==true) 
   // {
   //   cy.get('.btn').click()   //btn reintentar 
   // }
    
  })

  /*it('Pago Informe Debito', function()
  {
    
    cy.get(':nth-child(2) > .col-12 > .col-4 > img').click()

  })*/


})