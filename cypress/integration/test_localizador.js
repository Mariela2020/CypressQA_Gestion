describe('localizador', function(){

    it('construye localizador', function(){
  
       cy.visit('https://www.saucedemo.com/')
 
       var prod_esc = "Api Contactos"
      // var prod_esc = "Banner"

        cy.readFile('cypress/fixtures/productos_prueba.json').then((data) =>{
            var producto = prod_esc
            cy.log(producto)
            //datareporte.testResults[0].targets[1].targetName
            var nro_prod = data.[producto][0].datos[0].nro
            cy.log(nro_prod) 
            
            var precio = data.[producto][0].datos[0].precio
            cy.log(precio) 
            
            var localizador = ":nth-child("
            var localizador2 = ") > .item_superior > .desktop"    
            var localizador_f= localizador + nro_prod + localizador2
            cy.log(localizador_f)
            var precioUF = { precioUF : (precio)}
            cy.writeFile('cypress/fixtures/precio.json', precioUF); 
        })
  
     })

})