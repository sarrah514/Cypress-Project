describe('Test de déconnexion', () => {
  it('Doit se déconnecter correctement', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('sarrahabibisarra123');
    cy.contains('button', 'Sign In').click();

    // Étape 2 : Attendre que l'utilisateur soit connecté (adapter selon la page d'accueil)
    cy.url().should('include', '/home');
// Attendre que la notification disparaisse
cy.get('.toast-success', { timeout: 10000 }).should('not.exist');
// Clique sur le div qui déclenche le menu
cy.get('div.mat-mdc-menu-trigger.user-avatar').click();

// Ensuite clique sur le bouton "Logout" dans le menu qui apparaît dans l'overlay
cy.contains('button[role="menuitem"]', 'Logout').click();


   
  });
});
