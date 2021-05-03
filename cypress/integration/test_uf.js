it('obtenendo el valor de la UF',function(){
     
    const d = new Date
    const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') + ' ' +
 [d.getHours(),
 d.getMinutes(),
    d.getSeconds()].join(':')
   
    cy.log(d)
    
    //const valoresp= '$15.99'
    //expect(valortxt).eq(valoresp)

     cy.fixture('valoruf').then((valoruf)=> {
       const valor= 0;
       cy.get('valoruf').then(function($valorelem=d){
         const valoruftxt= $valorelem.text()
         cy.logt(valoruftxt);
         cy.get(valoruf.dia).text(valor);
       
        })
     })
  
 })