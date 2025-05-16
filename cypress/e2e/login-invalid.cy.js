describe('Test de Login - Connexion invalide', () => {
  it('Connexion avec un mot de passe incorrect', () => {
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.wait(2000);

    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('motdepasse_incorrect');
    cy.contains('button', 'Sign In').click();

    cy.url().should('include', '/auth/login');
    cy.contains('Incorrect username or password.').should('be.visible');
  });
});
