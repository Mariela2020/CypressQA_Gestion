const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')
    
describe('API Coda Reporte', ()=> {

  let token = ('a6246f43-97fc-4fc2-a51a-6405762e4a65')  
  
  Cypress.config('baseUrl', 'https://coda.io/apis/v1')

    it('GET API coda', ()=>{

        cy.api({
          url: '/docs/WvYdhdLDJH/tables/data_tp/rows', 
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token

            }       
        }).then((response) => {
           expect(response).to.have.property('status', 200)
           expect(response.body).to.not.be.null
        })    
          
    })

    it('POST API coda', ()=>{
            
      cy.request({
        url: '/docs/WvYdhdLDJH/tables/data_tp/rows', 
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'content-type': 'application/json'
          },
        body : {
          'rows': [
                {
              'cells': [
                       {'column': 'c-EpQqFfXnAK', 'value': date},
                       {'column': 'c-WCPjfjBaPt', 'value': 'Planes'},
                       {'column': 'c-eH0JSGhwu3', 'value': '79.190'},
                       {'column': 'c-Kmtt3mu9qz', 'value': '76.751'},
                       {'column': 'c-pjTfOWbYSQ', 'value': '78.845'},
                       {'column': 'c-t_ZWUMTCSx', 'value': 'Failed'}
                      ]
              }
          ] 
        }

      }).then((response) => {
         expect(response.status).to.eq(202)
       })

    })


})



  
