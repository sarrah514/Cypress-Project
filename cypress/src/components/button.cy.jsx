// src/components/button.cy.jsx
import Button from './button';
import { mount } from 'cypress/react';

describe('Button component', () => {
  it('renders correctly', () => {
    mount(<Button />);
    cy.contains('Hello').should('exist');
  });
});
