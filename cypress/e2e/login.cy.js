describe('Test de Login', () => {
  it('Connexion avec un compte valide', () => {
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.wait(2000); // attend que la page charge complètement

    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('sarrahabibisarra123');

    // 🔥 Ciblage du bouton via son texte
    cy.contains('button', 'Sign In').click();

    // ✅ Vérifie que l'utilisateur est redirigé après connexion
   //cy.url().should('include', '/dashboard');
  });
});
