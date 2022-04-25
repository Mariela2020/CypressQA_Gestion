/*beforeEach(function(){
  
    cy.visit('https://cloudservtrx.scotiabank.cl/sweb/mfe/digital-mortgage/')
    cy.title().should('eq', 'Scotiabank | Hipotecario digital')
  })

  it('Completa datos', function(){

    cy.fixture('formulario').then((formulario)=> {

     cy.get('#name-input').type(formulario.name)
     cy.get('#date-input').type(formulario.fecha_nac)
     cy.get('#rut-input').type(formulario.rut)
     cy.get('#idSerial-input').type(formulario.serial)
     cy.get('#nationalities_status-dropdown').select(formulario.nacionalidad)
     cy.get('#employment_status-dropdown').select(formulario.situacion_lab)
     cy.get('#email-input').type(formulario.email)
     cy.get('#telefono-input').type(formulario.telefono)
     cy.get('#salary-input').type(formulario.salario)
     const btn_continuar = Cypress.$('#simulation-button')     
     //cy.get(btn_continuar).should('be.enabled').click()
     cy.wrap(btn_continuar)
       .should('not.have.class', 'active')
       .click()
       .wait(2000)

    })  
  }) */

  // https://cloudservtrx.scotiabank.cl/sweb/bff/digital-onboarding/v1/subject

  it('POST API', ()=>{

    const item = {"name": "Asd","date": "11/11/1990","rut": "111111111","idserial": "A00000000","nationalities":"CL","employmentSituation":"01","mail":"a@a.com","phone":"99999999", "employmentSalary":"450000"}
    
    cy.request('POST', 'https://cloudservtrx.scotiabank.cl/sweb/bff/digital-onboarding/v1/subject', item)
      .its('body')
      .its('data')
      .should('include', {name:'Asd'}) 
    //.then((response) => {
      // expect(response).to.have.property('status', 200)
       //expect(response.body).to.not.be.null
    //})    
      
  })
