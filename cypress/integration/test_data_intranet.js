const d = new Date
  const date = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') 

  const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')
    
describe('API Coda Reporte Intranet', ()=> {

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
        url: 'https://coda.io/apis/v1/docs/WvYdhdLDJH/tables/data_cy_intranet/rows', 
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
                      {'column': 'c-lreBlJcHOe', 'value': hora},
                      {'column': 'c-YnUJ9SLh5F', 'value': qadescarga},
                      {'column': 'c-pMNNXP0xrE', 'value': qastate},
  
                     
                                                       
                    ]
                  }
                  ] 
                }
                  
      }).then((response) => {
          expect(response.status).to.eq(202)
        })
  
             
          })
    
  })

