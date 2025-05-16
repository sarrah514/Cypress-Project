import React from 'react'; 

it ('google test', function(){
    cy.visit('https://google.com')
    cy.get('gLFyf').type('Automation step by step {enter}')
    cy.wait(4000)
    cy.contains('videos').click()
}
)