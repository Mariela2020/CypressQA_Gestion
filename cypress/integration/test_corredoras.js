describe('Tests Suites', function() 
{

  it('Flujo Catalogo Corredora',function ()  
  {
     // cy.visit('https://ww2.qatoctoc.com/gestioncorredor/')
      cy.visit('https://ww2.toctoc.com/gestioncorredor/')
      cy.title().should('eq','TOCTOC.com - Gestión corredor - Planes de publicación')

      cy.get('.toggle-button').click()
      cy.get(':nth-child(7)>button').click()
      cy.get('.containerList > :nth-child(13) > a > strong').click()
      cy.get('.tt').should('be.visible').and('contain','Catálogo de Corredoras')

      cy.get('#searchBoxInput').type('Acom')
      cy.get('#btnBusca').click()
      
      var newUrl = 'https://ww2.toctoc.com/gestioncorredor/corredoras/propiedades/acom-propiedades/7006';
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen').callsFake(url => {
                newUrl = url;
            });
        })

       // cy.get('.sld-item').eq(-4).click()
        cy.get('.imgslide').eq(-4).click({force:true})
        cy.wait(1000)
        cy.get('@windowOpen').should('be.called');
        cy.visit(newUrl)
      
        cy.get('#region').select('13')
        cy.get('#comuna').select('337')
        cy.get('#btnBusca').click()
        cy.wait(1000)
        cy.get('[tabindex="0"] > .lnk-info > .c-infores > .info-body > .region').should('contain.text', 'Providencia')
         
         cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen');
         });
      
        cy.get('.sld-item').first().click({force:true})   
        cy.get('@windowOpen').should('be.calledWith', Cypress.sinon.match.string).then(stub => {
          cy.visit(stub.args[0][0]);
         // stub.restore;
        });
      
      }) 
    
      

})  

