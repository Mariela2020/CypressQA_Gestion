describe('Tests Suites', function() 
{
  
   /* beforeEach(function(){
  
      cy.visit('https://www.retasalo.com/');
        //cy.visit('https://www.retasalo.com/home?token=eyJraWQiOiJQMVRUa2ZXdHlvZDUrc3JRMldETTZub2dIZlhzR0xaaUo0UkpZRDVMbjgwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmZTJhYmViMC01MmIzLTQxN2QtYTFhZC0zNGU3OGFmMWNlYzEiLCJhdWQiOiIyY2lmMTlsNzVzYjQxcWlmMzRrbjE3MTJwaiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImNhOTFjYTdiLWUxODAtNGY1MS1hMjMwLWYzZjk3MDI5NGRiOSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjIwMzM0MTk3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV81TzNHQzE0M3oiLCJjb2duaXRvOnVzZXJuYW1lIjoiZmUyYWJlYjAtNTJiMy00MTdkLWExYWQtMzRlNzhhZjFjZWMxIiwiZXhwIjoxNjIwMzM3Nzk3LCJjdXN0b206ZGlyZWN0aW9uIjoiLCBPZi4gMiIsImlhdCI6MTYyMDMzNDE5NywiZW1haWwiOiJodXJ0YWRvbWFyaWVsYTJAZ21haWwuY29tIn0.YhZghNium_1cgj0ne25xY_ZNkZk--JzcTVNx2olSewlvHD95VVbnvQsNqJ_lOQlhA6yp3WS5cpdhxEqrHEi-Li4ckvU4ZPZHC6gj5NDPPT-oLj9bb_J5--HYnlB7S83Pr6FCvLrAhaMaIvDZKKf1EeDwkQzB-84E8AgbKuqjPCKbMdtrs4duEqxbHpHXDHBtrs46MCfB93QeQOkenJuluwXYGi2XIPUZXQKIbJ4MicoHe2t_yqfkJWHa5Dwze7q98JFCnpjTnUGNT8y9g2_ow9XkF_KYREHTNprZCeeWcvvm5YNh8A7KUw6dNEHHkETOVkdbG21TqZP2P090wPIhUA&o=buscador_retasalo');
      });*/

 
  it('Flujo Retasalo',function ()  
  {
      cy.visit('https://www.retasalo.com/')
      cy.title().should('eq','TOCTOC.com - Retasalo - Tasación de propiedades')
     // cy.get('.btn > strong').click()    
    
 })

 /*it('Login de Retasalo',function ()  
  {
   // cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('hurtadomariela2@gmail.com')
   // cy.get('[id="IngresoUsuario.Contrasena"]').type('prueba',{sensitive: true})
    cy.get('[id="IngresoUsuario.CorreoElectronico"]').type('camilo.olivos@toctoc.com')
    cy.get('[id="IngresoUsuario.Contrasena"]').type('123456',{sensitive: true})
    cy.get(':nth-child(5) > .btn').click()  
    cy.wait(3000)
    //cy.get(':nth-child(2) > .nav-link',{timeout:6000}).should('to.visible').click()
  }) */   
    
  it ('Busco Propiedad por Rol', () => {

      cy.get(':nth-child(2) > .nav-link').click()
  
     // cy.get('.form-control > .selector__control > .selector__value-container').eq(0).click()
     cy.get('.selector__value-container').eq(0).click()
       .find('#react-select-4-input').first().focus()
     // .find('#react-select-5-input').first().focus()   //#react-select-4-option-2
      cy.contains('Santiago').click({force:true})
       
      cy.get('.form-control').type('235-15').first().focus()
      cy.contains('235-15 - ROSAS 3024 - Santiago').click({force:true})   

      cy.get('.resuls').should('to.visible').and('contain', '235-15 - ROSAS 3024 - Santiago')
    
      cy.get('.custom-control').click()
      // cy.get('.c-rol > form > .text-left > .btn').click()
      cy.get('[data-test=btn_continuar]').should('to.enabled').click()
      cy.url().should('include', 'https://sso.toctoc.com/')

  })

  it('Login de Retasalo',function ()  
  {
   // cy.get('#email').type('camilo.olivos@toctoc.com')
   // cy.get('#password').type('josefa41',{sensitive: true})
    cy.get('#email').type('hurtadomariela2@gmail.com')
    cy.get('#password').type('prueba',{sensitive: true})
   // cy.get('.contenido > .row > .btn').click()  
    cy.wait(3000)

   // cy.get('#email').type('camilo.olivos@toctoc.com')
   // cy.get('#password').type('josefa41',{sensitive: true})
    
  })

  it('Ingresa el RUT', function ()
  {
    cy.get('#rut').type('267008469')
    cy.get('.btn').click()
    cy.wait(3000)
  })
   
  it('visualizar partes del informe', function()
  {
    
   // cy.get('.comreg').should('be.visible').and('contain', 'Santiago 235-15')
    cy.get('.dir').should('be.visible').and('contain', 'ROSAS N°3024,') 
    cy.get(':nth-child(1) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(2) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(3) > .accordion-feat').should('be.visible')
    cy.get(':nth-child(4) > .accordion-feat').should('be.visible')

  }) 

  it('Medio de Pago disponible', function()
  {
    cy.get('.btn').click()
    cy.wait(3000)
    cy.url().should('include', 'https://ventas.toctoc.com/')
  
  })
 
})