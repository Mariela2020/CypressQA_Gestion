const d = new Date
  const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

describe('API Testproject Reporte', ()=> {

    Cypress.config('baseUrl', 'https://api.testproject.io/v2')

    it('Registro Cross Browser de Login', ()=>{

        cy.request({
            url: "/projects/br1AckSWwkavretXdaERbQ/jobs/SGTJYLvGHECxyaH3wvywxA/reports/latest?details=false&format=TestProject",
            method: "GET",
            headers: {
               "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
            }
        }).then((response) => {
 
           cy.writeFile('cypress/fixtures/testproject.json', response.body)
           
           cy.readFile('cypress/fixtures/testproject.json').then((datareporte) =>{
             var test = datareporte.jobName
             var resultado = datareporte.resultType
             var browserA= datareporte.testResults[0].targets[0].targetName
             var browser1 = browserA.replace(/[0-9.]/g, '')
             var duration1= datareporte.testResults[0].targets[0].duration
             var browserB= datareporte.testResults[0].targets[1].targetName
             var browser2 = browserB.replace(/[0-9.]/g, '')
             var duration2= datareporte.testResults[0].targets[1].duration
             var browserC= datareporte.testResults[0].targets[2].targetName
             var browser3 = browserC.replace(/[0-9.]/g, '')
             var duration3= datareporte.testResults[0].targets[2].duration
             
             cy.writeFile('datareporte.txt', '\n\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' })  
            })  
        })          
      
    })

    it('Registro Cross Browser de Planes', ()=>{

        cy.request({
            url: "/projects/br1AckSWwkavretXdaERbQ/jobs/7tvlFTpcbEaVBV_s-SsrCA/reports/latest?details=false&format=TestProject",
            method: "GET",
            headers: {
               "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
            }
        }).then((response) => {
 
            cy.writeFile('cypress/fixtures/testproject.json', response.body)
            
            cy.readFile('cypress/fixtures/testproject.json').then((datareporte1) =>{
                var test = datareporte1.jobName
                var resultado = datareporte1.resultType
                var browserA= datareporte1.testResults[0].targets[0].targetName
                var browser1 = browserA.replace(/[0-9.]/g, '')
                var duration1= datareporte1.testResults[0].targets[0].duration
                var browserB= datareporte1.testResults[0].targets[1].targetName
                var browser2 = browserB.replace(/[0-9.]/g, '')
                var duration2= datareporte1.testResults[0].targets[1].duration
                var browserC= datareporte1.testResults[0].targets[2].targetName
                var browser3 = browserC.replace(/[0-9.]/g, '')
                var duration3= datareporte1.testResults[0].targets[2].duration
                
                cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
             })  
         })                
        
    })

    it('Registro Cross Browser de Producto', ()=>{

        cy.request({
            url: "/projects/br1AckSWwkavretXdaERbQ/jobs/5ljcr9AMpUqyluASJ-OtEA/reports/latest?details=false&format=TestProject",
            method: "GET",
            headers: {
                "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
            }
        }).then((response) => {
 
            cy.writeFile('cypress/fixtures/testproject.json', response.body)
            
            cy.readFile('cypress/fixtures/testproject.json').then((datareporte2) =>{
                var test = datareporte2.jobName
                var resultado = datareporte2.resultType
                var browserA= datareporte2.testResults[0].targets[0].targetName
                var browser1 = browserA.replace(/[0-9.]/g, '')
                var duration1= datareporte2.testResults[0].targets[0].duration
                var browserB= datareporte2.testResults[0].targets[1].targetName
                var browser2 = browserB.replace(/[0-9.]/g, '')
                var duration2= datareporte2.testResults[0].targets[1].duration
                var browserC= datareporte2.testResults[0].targets[2].targetName
                var browser3 = browserC.replace(/[0-9.]/g, '')
                var duration3= datareporte2.testResults[0].targets[2].duration
                
                cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
             })  
         })                
        
    })

    it('Registro Cross Browser de Retasalo', ()=>{

        cy.request({
            url: "/projects/br1AckSWwkavretXdaERbQ/jobs/xOTUaBRM1EuqTg_3rojB6Q/reports/latest?details=false&format=TestProject",
            method: "GET",
            headers: {
                "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
            }
        }).then((response) => {
 
            cy.writeFile('cypress/fixtures/testproject.json', response.body)
            
            cy.readFile('cypress/fixtures/testproject.json').then((datareporte3) =>{
                var test = datareporte3.jobName
                var resultado = datareporte3.resultType
                var browserA= datareporte3.testResults[0].targets[0].targetName
                var browser1 = browserA.replace(/[0-9.]/g, '')
                var duration1= datareporte3.testResults[0].targets[0].duration
                var browserB= datareporte3.testResults[0].targets[1].targetName
                var browser2 = browserB.replace(/[0-9.]/g, '')
                var duration2= datareporte3.testResults[0].targets[1].duration
                var browserC= datareporte3.testResults[0].targets[2].targetName
                var browser3 = browserC.replace(/[0-9.]/g, '')
                var duration3= datareporte3.testResults[0].targets[2].duration
                
                cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
             })  
         })                
        
    })
   
})