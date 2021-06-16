//import Creatable, { makeCreatableSelect } from 'react-select/creatable';
//import React from 'react';
//import Select from 'react-select';

describe('Tests Suites', function() 
{
    it('react-select', () => {
        cy.visit('https://react-select.com/creatable')
        cy.get('.css-yk16xz-control') // find react-select component     
          .click({multiple:true}) // click to open dropdown
         // .get('.react-select__menu') // find opened dropdown
         // .find('.react-select__option') // find all options
          .first() 
         // .click() // click on first option
        //cy.get('.css-10nd86i input:text').should('to.exist')
          //.eq(1) // get the first react-select input
         // .focus() // workaround for bug #2
         // .type('Ocean', {force:true}) // workaround for bug #1
      }) 

     /* it('react-select', () => {
       // cy.visit('https://react-select.com/creatable')
       // cy.get('.css-10nd86i').eq(1)
       //   .click() // click on the react-select div
       //   .find('input').focus() // workaround for bug #2
       // cy.contains('Ocean').click({force:true}) // workaround for bug #1
        // Other actions to take 👇
        // cy.focused().type('{downarrow}{enter}', {force:true}) 
        // cy.focused().type('{enter}', {force:true})
        // cy.focused().type('Ocean', {force:true})
      
      cy.get('.s3p-react-select__indicator').eq(1)
        .click()
      cy.get('[id^="react-select-"]').contains('<value_dropdownbox>')
        .click()
      cy.get('[class*="-control"]')
        .click(0, 0, { force: true })
        .get('[class*="-menu"]')
        .find('[id*="-option"]')
        .eq(2)
        .click(0, 0, { force: true })

      })

     /* cy.get('.react-select__control') // find react-select component     
      .click() // click to open dropdown
      .get('.react-select__menu') // find opened dropdown
      .find('.react-select__option') // find all options
      .first() 
      .click() // click on first option
       */
    })

  /*  it('busco Propiedad por Rol',function ()
    {
      
      cy.get(':nth-child(2) > .nav-link').click()
      
      cy.get('#react-select-4-input').should('be.visible')
      cy.get('#react-select-4-input').then(function($option){
          $option.val('Santiago').select
          //$option.val('Santiago').select
        })
        cy.get('#react-select-4-input').should('have.value', 'Santiago')
       
      cy.get('[id="react-select-4-input"]').each(($el,index,$list)=>{
  
          var comuna = $el.text()
          if(comuna=='Santiago')
            {
              cy.wrap($el).select('Santiago') 
              cy.wrap($el).click()
            }
      })
  
      cy.get('.selector__value-container').each(($el,index,$list)=>{
  
          var comuna = $el.text()
          if(comuna=='Santiago')
            {
              cy.wrap($el).select('Santiago')   
              cy.wrap($el).click()
            }
      })
      
      cy.get('.selector__value-container').children().first().then(function(dropdownEle){
  
        cy.log(dropdownEle.text())
    })*/  
  
 // })
  