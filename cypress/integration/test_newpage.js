describe('Tests Suites', function() 
{

  it('Flujo Catalogo Corredora',function ()  
  {
      cy.visit('http://codenboxautomationlab.com/practice/')
      

  })
  
  it('invoke child tab', function(){

    cy.get('#opentab').invoke('removeAttr', 'target').click()
  })

  

 /* beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');

   // cy.fixture('precio').then(data =>{
    //  this.data = data
     // cy.log(this.data.precioUF)
    //})

  })
  

  it('Calculos gestion', function (){

    cy.fixture('precio.json').then((dataprecio) => {
      //cy.reload()
      var precio = dataprecio.precioUF
      //var precio =  parseFloat(this.data.precioUF)
      cy.log(precio)
      var precio1 = parseFloat(precio).toFixed(2)
      cy.log(precio1)

    cy.fixture('dataUF.json').then((dataUF) => {
      var valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
      
      var ivaUF = (precio1*0.19).toFixed(2)
      cy.log(ivaUF)
      var precio2 = Number(precio1)+ Number(ivaUF)
      cy.log(precio2)
      var precioesp= precio2*valueUF1
      cy.log(precioesp)
      var totalesp= Math.round(precioesp) 
      var totalesp1 = new Intl.NumberFormat().format(totalesp)
      var totalesp2 = parseFloat(totalesp1)
      cy.log(totalesp2)
     // expect(totalint, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(totalesp2)

     var precioUF = "5.00"
     precio = { precioUF : (precioUF)};
     cy.writeFile('cypress/fixtures/precio.json', precio);

     cy.readFile('cypress/fixtures/precio.json').then((data1) =>{
      var dat = data1.precioUF
      //var precio3 =  this.data.precioUF
      cy.log(dat)
      expect(precioUF).to.equal(dat)
     }) 
     
      
    })

  })
})

  it('Otro producto', function (){

    cy.fixture('precio').then((datprecio) => {
      //cy.reload()
      var precio = datprecio.precioUF
     // cy.log(this.data.precioUF)
      var precio4 =  parseFloat(precio)
      cy.log(precio4)
      var precio1 = parseFloat(precio4)
      cy.log(precio1)

    cy.fixture('dataUF.json').then((dataUF) => {
      var valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
      
      var ivaUF = (precio1*0.19).toFixed(2)
      cy.log(ivaUF)
      var precioespUF= Number(precio1)+Number(ivaUF)
      cy.log(precioespUF)
      var precioesp= precioespUF*valueUF1
      cy.log(precioesp)
      var totalesp= Math.round(precioesp) 
      var totalesp1 = new Intl.NumberFormat().format(totalesp)
      var totalesp2 = parseFloat(totalesp1)
      cy.log(totalesp2)
     // expect(totalint, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(totalesp2)

     var precioUF = "2.00"
     var json = { precioUF : (precioUF)};
     cy.writeFile('cypress/fixtures/precio.json', json);

     cy.readFile('cypress/fixtures/precio.json').then((data1) =>{
       
      var dat = data1.precioUF
     // cy.log(this.data.precioUF)
      expect(precioUF).to.equal(dat)
     }) 
     
      
    })
    
  })

  })

  it('Otro 2 producto', function (){
    
    cy.readFile('cypress/fixtures/precio.json').then((data6) =>{
       
      var dat = data6.precioUF
      cy.log(dat)
     // expect(precioUF).to.equal(dat)
      
    //cy.fixture('precio').then((data4) => {
     // cy.reload()
    //  cy.log(data4.precioUF)
      //var precio5 = data4.precioUF
     // var precio5 =  parseFloat(this.data.precioUF)
     // cy.log(precio5)
      var precio1 = parseFloat(dat)
      cy.log(precio1)

    cy.fixture('dataUF.json').then((dataUF) => {
      var valueUF = dataUF.uf
      var valueUF1 = parseFloat(valueUF)
      cy.log(valueUF1)
      
      var ivaUF = (precio1*0.19).toFixed(2)
      cy.log(ivaUF)
      var precioespUF= Number(precio1)+Number(ivaUF)
      cy.log(precioespUF)
      var precioesp= precioespUF*valueUF1
      cy.log(precioesp)
      var totalesp= Math.round(precioesp) 
      var totalesp1 = new Intl.NumberFormat().format(totalesp)
      var totalesp2 = parseFloat(totalesp1)
      cy.log(totalesp2)
     // expect(totalint, "El Total del Resumen obtenido debe ser igual al Total esperado").eq(totalesp2)

     var precioUF = "4.00"
     var json = { precioUF : (precioUF)};
     cy.writeFile('cypress/fixtures/precio.json', json);

     cy.readFile('cypress/fixtures/precio.json').then((data1) =>{

     var dat = data1.precioUF
     //var precio10 =  this.data.precioUF
     cy.log(dat)
     expect(precioUF).to.equal(dat)
     }) 
     
      
    })
    
  })

  }) */

})
