const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

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
        var duracion_t= datareporte.testResults[0].duration
        var browserA= datareporte.testResults[0].targets[0].targetName
        var res_A = datareporte.testResults[0].targets[0].result
        var browser1 = browserA.replace(/[0-9.]/g, '')
        var duration1= datareporte.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        //var duration_final = duration4 + duration_ms
        var duration_final = duration4 + "." + duration_ms
        var duration1_final1= parseFloat(duration_final)
 
        var browserB= datareporte.testResults[0].targets[1].targetName
        var res_B = datareporte.testResults[0].targets[1].result
        var browser2 = browserB.replace(/[0-9.]/g, '')
        var duration5= datareporte.testResults[0].targets[1].duration
        var duration2_ms= duration5.substring(9)
        var duration6= datareporte.testResults[0].targets[1].duration
        var duration2_min= duration6.slice(4, 5)
        var duration7= datareporte.testResults[0].targets[1].duration
        var duration2_sec= duration7.slice(6, 8)
        var minuto2= parseInt(duration2_min)
        var segundo2= parseInt(duration2_sec)
        var duration8 = (minuto2 * 60) + segundo2
        var duration_final2 = duration8 + "." + duration2_ms
        //var duration_final2 = duration8 + duration2_ms
        var duration2_final2= parseFloat(duration_final2)
          
        var browserC= datareporte.testResults[0].targets[2].targetName
        var res_C = datareporte.testResults[0].targets[2].result
        var browser3 = browserC.replace(/[0-9.]/g, '')
        // var duration3= datareporte.testResults[0].targets[2].duration
        // var duration30= duration3.substring(6)
        var duration9= datareporte.testResults[0].targets[2].duration
        var duration3_ms= duration9.substring(9)
        var duration10= datareporte.testResults[0].targets[2].duration
        var duration3_min= duration10.slice(4, 5)
        var duration11= datareporte.testResults[0].targets[2].duration
        var duration3_sec= duration11.slice(6, 8)
        var minuto3= parseInt(duration3_min)
        var segundo3= parseInt(duration3_sec)
        var duration12 = (minuto3 * 60) + segundo3
        var duration_final3 = duration12 + duration3_ms
        var duration_final3 = duration12 + "." + duration3_ms
        //var duration_final3 = duration12 + duration3_ms
        var duration3_final3= parseFloat(duration_final3)
                
        cy.request({
          url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_tp/rows', 
          method: 'POST',
          headers: {
            'Authorization': 'Bearer a6246f43-97fc-4fc2-a51a-6405762e4a65',
            'content-type': 'application/json'
          },
          body : {
            'rows': [
              {
                'cells': [
                  {'column': 'c-EpQqFfXnAK', 'value': date},
                  {'column': 'c-WCPjfjBaPt', 'value': test},
                  {'column': 'c-eH0JSGhwu3', 'value': duration1_final1},
                  {'column': 'c-0eYdlpJ-yS', 'value': res_A},
                  {'column': 'c-Kmtt3mu9qz', 'value': duration2_final2},
                  {'column': 'c-Pq-KFPZnM8', 'value': res_B},
                  {'column': 'c-pjTfOWbYSQ', 'value': duration3_final3},
                  {'column': 'c-XzMm-vsq9J', 'value': res_C},
                  {'column': 'c-ar3XOIvtRN', 'value': duracion_t},
                  {'column': 'c-t_ZWUMTCSx', 'value': resultado}
                ]
              }
            ] 
          }
                
        }).then((response) => {
          expect(response.status).to.eq(202)
        })
             
        //cy.writeFile('datareporte.txt', '\n\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration10 + '; ' + browser2 + ':' + duration20 + '; ' + browser3 + ':' + duration30 +'; Resultado: ' + resultado, { flag: 'a+' })  
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
        var duracion_t= datareporte1.testResults[0].duration
        var browserA= datareporte1.testResults[0].targets[0].targetName
        var res_A = datareporte1.testResults[0].targets[0].result
        var browser1 = browserA.replace(/[0-9.]/g, '')
        var duration1= datareporte1.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte1.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte1.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        //var duration_final = duration4 + duration_ms
        var duration_final = duration4 + "." + duration_ms
        var duration1_final1= parseFloat(duration_final)
 
        var browserB= datareporte1.testResults[0].targets[1].targetName
        var res_B = datareporte1.testResults[0].targets[1].result
        var browser2 = browserB.replace(/[0-9.]/g, '')
        var duration5= datareporte1.testResults[0].targets[1].duration
        var duration2_ms= duration5.substring(9)
        var duration6= datareporte1.testResults[0].targets[1].duration
        var duration2_min= duration6.slice(4, 5)
        var duration7= datareporte1.testResults[0].targets[1].duration
        var duration2_sec= duration7.slice(6, 8)
        var minuto2= parseInt(duration2_min)
        var segundo2= parseInt(duration2_sec)
        var duration8 = (minuto2 * 60) + segundo2
        var duration_final2 = duration8 + "." + duration2_ms
        //var duration_final2 = duration8 + duration2_ms
        var duration2_final2= parseFloat(duration_final2)
            
        var browserC= datareporte1.testResults[0].targets[2].targetName
        var res_C = datareporte1.testResults[0].targets[2].result
        var browser3 = browserC.replace(/[0-9.]/g, '')
        // var duration3= datareporte.testResults[0].targets[2].duration
        // var duration30= duration3.substring(6)
        var duration9= datareporte1.testResults[0].targets[2].duration
        var duration3_ms= duration9.substring(9)
        var duration10= datareporte1.testResults[0].targets[2].duration
        var duration3_min= duration10.slice(4, 5)
        var duration11= datareporte1.testResults[0].targets[2].duration
        var duration3_sec= duration11.slice(6, 8)
        var minuto3= parseInt(duration3_min)
        var segundo3= parseInt(duration3_sec)
        var duration12 = (minuto3 * 60) + segundo3
        var duration_final3 = duration12 + "." + duration3_ms
        //var duration_final3 = duration12 + duration3_ms
        var duration3_final3= parseFloat(duration_final3)
               
        cy.request({
          url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_tp/rows', 
          method: 'POST',
          headers: {
            'Authorization': 'Bearer a6246f43-97fc-4fc2-a51a-6405762e4a65',
            'content-type': 'application/json'
          },
          body : {
            'rows': [
              {
                'cells': [
                  {'column': 'c-EpQqFfXnAK', 'value': date},
                  {'column': 'c-WCPjfjBaPt', 'value': test},
                  {'column': 'c-eH0JSGhwu3', 'value': duration1_final1},
                  {'column': 'c-0eYdlpJ-yS', 'value': res_A},
                  {'column': 'c-Kmtt3mu9qz', 'value': duration2_final2},
                  {'column': 'c-Pq-KFPZnM8', 'value': res_B},
                  {'column': 'c-pjTfOWbYSQ', 'value': duration3_final3},
                  {'column': 'c-XzMm-vsq9J', 'value': res_C},
                  {'column': 'c-ar3XOIvtRN', 'value': duracion_t},
                  {'column': 'c-t_ZWUMTCSx', 'value': resultado}
                ]
              }
            ] 
          }
                    
        }).then((response) => {
          expect(response.status).to.eq(202)
        })


        //cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
      })  
    })                
        
  })

  it('Registro Cross Browser de Producto', ()=>{

    cy.api({
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
        var duracion_t= datareporte2.testResults[0].duration
        var browserA= datareporte2.testResults[0].targets[0].targetName
        var res_A = datareporte2.testResults[0].targets[0].result
        var browser1 = browserA.replace(/[0-9.]/g, '')
        var duration1= datareporte2.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte2.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte2.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        var duration_final = duration4 + "." + duration_ms
        // var duration_final = duration4 + duration_ms
        var duration1_final1= parseFloat(duration_final)
 
        var browserB= datareporte2.testResults[0].targets[1].targetName
        var res_B = datareporte2.testResults[0].targets[1].result
        var browser2 = browserB.replace(/[0-9.]/g, '')
        var duration5= datareporte2.testResults[0].targets[1].duration
        var duration2_ms= duration5.substring(9)
        var duration6= datareporte2.testResults[0].targets[1].duration
        var duration2_min= duration6.slice(4, 5)
        var duration7= datareporte2.testResults[0].targets[1].duration
        var duration2_sec= duration7.slice(6, 8)
        var minuto2= parseInt(duration2_min)
        var segundo2= parseInt(duration2_sec)
        var duration8 = (minuto2 * 60) + segundo2
        var duration_final2 = duration8 + "." + duration2_ms
        //var duration_final2 = duration8 + duration2_ms
        var duration2_final2= parseFloat(duration_final2)
              
        var browserC= datareporte2.testResults[0].targets[2].targetName
        var res_C = datareporte2.testResults[0].targets[2].result
        var browser3 = browserC.replace(/[0-9.]/g, '')
        // var duration3= datareporte.testResults[0].targets[2].duration
        // var duration30= duration3.substring(6)
        var duration9= datareporte2.testResults[0].targets[2].duration
        var duration3_ms= duration9.substring(9)
        var duration10= datareporte2.testResults[0].targets[2].duration
        var duration3_min= duration10.slice(4, 5)
        var duration11= datareporte2.testResults[0].targets[2].duration
        var duration3_sec= duration11.slice(6, 8)
        var minuto3= parseInt(duration3_min)
        var segundo3= parseInt(duration3_sec)
        var duration12 = (minuto3 * 60) + segundo3
        var duration_final3 = duration12 + "." + duration3_ms
        //var duration_final3 = duration12 + duration3_ms
        var duration3_final3= parseFloat(duration_final3)
                
        cy.request({
          url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_tp/rows', 
          method: 'POST',
          headers: {
            'Authorization': 'Bearer a6246f43-97fc-4fc2-a51a-6405762e4a65',
            'content-type': 'application/json'
          },
          body : {
           'rows': [
            {
              'cells': [
                {'column': 'c-EpQqFfXnAK', 'value': date},
                {'column': 'c-WCPjfjBaPt', 'value': test},
                {'column': 'c-eH0JSGhwu3', 'value': duration1_final1},
                {'column': 'c-0eYdlpJ-yS', 'value': res_A},
                {'column': 'c-Kmtt3mu9qz', 'value': duration2_final2},
                {'column': 'c-Pq-KFPZnM8', 'value': res_B},
                {'column': 'c-pjTfOWbYSQ', 'value': duration3_final3},
                {'column': 'c-XzMm-vsq9J', 'value': res_C},
                {'column': 'c-ar3XOIvtRN', 'value': duracion_t},
                {'column': 'c-t_ZWUMTCSx', 'value': resultado}
              ]
            }
           ] 
          }
                    
        }).then((response) => {
          expect(response.status).to.eq(202)
        })


        //cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
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
        var duracion_t= datareporte3.testResults[0].duration
        var browserA= datareporte3.testResults[0].targets[0].targetName
        var res_A = datareporte3.testResults[0].targets[0].result
        var browser1 = browserA.replace(/[0-9.]/g, '')
        var duration1= datareporte3.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte3.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte3.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        var duration_final = duration4 + "." + duration_ms
        // var duration_final = duration4 + duration_ms
        var duration1_final1= parseFloat(duration_final)
 
        var browserB= datareporte3.testResults[0].targets[1].targetName
        var res_B = datareporte3.testResults[0].targets[1].result
        var browser2 = browserB.replace(/[0-9.]/g, '')
        var duration5= datareporte3.testResults[0].targets[1].duration
        var duration2_ms= duration5.substring(9)
        var duration6= datareporte3.testResults[0].targets[1].duration
        var duration2_min= duration6.slice(4, 5)
        var duration7= datareporte3.testResults[0].targets[1].duration
        var duration2_sec= duration7.slice(6, 8)
        var minuto2= parseInt(duration2_min)
        var segundo2= parseInt(duration2_sec)
        var duration8 = (minuto2 * 60) + segundo2
        var duration_final2 = duration8 + "." + duration2_ms
        //var duration_final2 = duration8 + duration2_ms
        var duration2_final2= parseFloat(duration_final2)
             
        var browserC= datareporte3.testResults[0].targets[2].targetName
        var res_C = datareporte3.testResults[0].targets[2].result
        var browser3 = browserC.replace(/[0-9.]/g, '')
        // var duration3= datareporte.testResults[0].targets[2].duration
        // var duration30= duration3.substring(6)
        var duration9= datareporte3.testResults[0].targets[2].duration
        var duration3_ms= duration9.substring(9)
        var duration10= datareporte3.testResults[0].targets[2].duration
        var duration3_min= duration10.slice(4, 5)
        var duration11= datareporte3.testResults[0].targets[2].duration
        var duration3_sec= duration11.slice(6, 8)
        var minuto3= parseInt(duration3_min)
        var segundo3= parseInt(duration3_sec)
        var duration12 = (minuto3 * 60) + segundo3
        var duration_final3 = duration12 + duration3_ms
        var duration_final3 = duration12 + "." + duration3_ms
        var duration3_final3= parseFloat(duration_final3)
                
        cy.request({
          url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_tp/rows', 
          method: 'POST',
          headers: {
            'Authorization': 'Bearer a6246f43-97fc-4fc2-a51a-6405762e4a65',
            'content-type': 'application/json'
          },
          body : {
            'rows': [
              {
                'cells': [
                  {'column': 'c-EpQqFfXnAK', 'value': date},
                  {'column': 'c-WCPjfjBaPt', 'value': test},
                  {'column': 'c-eH0JSGhwu3', 'value': duration1_final1},
                  {'column': 'c-0eYdlpJ-yS', 'value': res_A},
                  {'column': 'c-Kmtt3mu9qz', 'value': duration2_final2},
                  {'column': 'c-Pq-KFPZnM8', 'value': res_B},
                  {'column': 'c-pjTfOWbYSQ', 'value': duration3_final3},
                  {'column': 'c-XzMm-vsq9J', 'value': res_C},
                  {'column': 'c-ar3XOIvtRN', 'value': duracion_t},
                  {'column': 'c-t_ZWUMTCSx', 'value': resultado}
                ]
              }
            ] 
          }
                    
        }).then((response) => {
          expect(response.status).to.eq(202)
        })

        //cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
      })  
    })                
        
  }) 


  it('Registro TC Intranet de Gestión Corredor', ()=>{

    cy.api({
      url: "/projects/br1AckSWwkavretXdaERbQ/jobs/a2Gs6WUH_E2J9FTbafM-_g/reports/latest?details=false&format=TestProject",
      method: "GET",
      headers: {
        "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
      }
    }).then((response) => {

      cy.writeFile('cypress/fixtures/testproject.json', response.body)
       
      cy.readFile('cypress/fixtures/testproject.json').then((datareporte4) =>{
             
        var resultado = datareporte4.resultType
        var duration1= datareporte4.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte4.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte4.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        var duration_final = duration4 + "." + duration_ms
        // var duration_final = duration4 + duration_ms
        var duration1_final1= parseFloat(duration_final)
        // cy.log(duration1_final1)

        cy.request({
          url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_intranet/rows', 
          method: 'POST',
          headers: {
            'Authorization': 'Bearer fdaf70a0-204e-48f2-9c6f-2aa8156f847f',
            'content-type': 'application/json'
          },
          body : {
            'rows': [
              {
                'cells': [
                  {'column': 'c-8zEK5a76rG', 'value': date},
                  {'column': 'c-YnUJ9SLh5F', 'value': duration1_final1},
                  {'column': 'c-pMNNXP0xrE', 'value': resultado}                                                                          
                ]
              }
            ] 
          }
                              
        }).then((response) => {
          expect(response.status).to.eq(202)
        })
                               
      })
        
    })    
  }) 
  
  
  /*it('Registro Cross Browser de AddInmobiliario', ()=>{

    cy.api({
      url: "/projects/br1AckSWwkavretXdaERbQ/jobs/zRt0o1m1vUKRPvwo918SdA/reports/latest?details=false&format=TestProject",
      method: "GET",
      headers: {
          "authorization": "ZUaxMZ3ClDHBjrWtH9mKX8LNIeO3iC7cUmgDx3LjHqA1"
      }
  }).then((response) => {

      cy.writeFile('cypress/fixtures/testproject.json', response.body)
      
      cy.readFile('cypress/fixtures/testproject.json').then((datareporte5) =>{
        var test = datareporte5.jobName
        var resultado = datareporte5.resultType
        var browserA= datareporte5.testResults[0].targets[0].targetName
        var browser1 = browserA.replace(/[0-9.]/g, '')
        var duration1= datareporte5.testResults[0].targets[0].duration
        var duration_ms= duration1.substring(9)
        var duration2= datareporte5.testResults[0].targets[0].duration
        var duration_min= duration2.slice(4, 5)
        var duration3= datareporte5.testResults[0].targets[0].duration
        var duration_sec= duration3.slice(6, 8)
        var minuto= parseInt(duration_min)
        var segundo= parseInt(duration_sec)
        var duration4 = (minuto * 60) + segundo
        var duration_final = duration4 + "." + duration_ms
       // var duration_final = duration4 + duration_ms
        var duration1_final1= parseFloat(duration_final)

        var browserB= datareporte5.testResults[0].targets[1].targetName
        var browser2 = browserB.replace(/[0-9.]/g, '')
        var duration5= datareporte5.testResults[0].targets[1].duration
        var duration2_ms= duration5.substring(9)
        var duration6= datareporte5.testResults[0].targets[1].duration
        var duration2_min= duration6.slice(4, 5)
        var duration7= datareporte5.testResults[0].targets[1].duration
        var duration2_sec= duration7.slice(6, 8)
        var minuto2= parseInt(duration2_min)
        var segundo2= parseInt(duration2_sec)
        var duration8 = (minuto2 * 60) + segundo2
        var duration_final2 = duration8 + "." + duration2_ms
        //var duration_final2 = duration8 + duration2_ms
        var duration2_final2= parseFloat(duration_final2)
        
        var browserC= datareporte5.testResults[0].targets[2].targetName
        var browser3 = browserC.replace(/[0-9.]/g, '')
       // var duration3= datareporte.testResults[0].targets[2].duration
       // var duration30= duration3.substring(6)
        var duration9= datareporte5.testResults[0].targets[2].duration
        var duration3_ms= duration9.substring(9)
        var duration10= datareporte5.testResults[0].targets[2].duration
        var duration3_min= duration10.slice(4, 5)
        var duration11= datareporte5.testResults[0].targets[2].duration
        var duration3_sec= duration11.slice(6, 8)
        var minuto3= parseInt(duration3_min)
        var segundo3= parseInt(duration3_sec)
        var duration12 = (minuto3 * 60) + segundo3
        var duration_final3 = duration12 + "." + duration3_ms
        //var duration_final3 = duration12 + duration3_ms
        var duration3_final3= parseFloat(duration_final3)
          
          cy.request({
              url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_tp/rows', 
              method: 'POST',
              headers: {
                'Authorization': 'Bearer a6246f43-97fc-4fc2-a51a-6405762e4a65',
                'content-type': 'application/json'
                },
              body : {
                'rows': [
                      {
                    'cells': [
                             {'column': 'c-EpQqFfXnAK', 'value': date},
                             {'column': 'c-WCPjfjBaPt', 'value': test},
                             {'column': 'c-eH0JSGhwu3', 'value': duration1_final1},
                             {'column': 'c-Kmtt3mu9qz', 'value': duration2_final2},
                             {'column': 'c-pjTfOWbYSQ', 'value': duration3_final3},
                             {'column': 'c-t_ZWUMTCSx', 'value': resultado}
                            ]
                    }
                ] 
              }
              
            }).then((response) => {
               expect(response.status).to.eq(202)
             })


          //cy.writeFile('datareporte.txt', '\nFecha: '+ date +'; Flujo: ' + test + '; ' + browser1 + ':' + duration1 + '; ' + browser2 + ':' + duration2 + '; ' + browser3 + ':' + duration3 +'; Resultado: ' + resultado, { flag: 'a+' }) 
       })  
   })                
  
  })*/

})


