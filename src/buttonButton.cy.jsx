import React from 'react'
import Button from '../cypress/src/components/button'

describe('<Button />', () => {
  it('test initial', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />)
    cy.get("button").should('contain.text','Hello');

  });
})