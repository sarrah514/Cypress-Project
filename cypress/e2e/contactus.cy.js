describe('contact us', () => {
  it('Doit contacter ladmin', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('sarrahabibisarra123');
    cy.contains('button', 'Sign In').click();
cy.wait(3000);
    // Étape 2 : Attente de redirection vers /home
    cy.url().should('include', '/home');
    cy.get('.toast-success', { timeout: 10000 }).should('not.exist');
cy.wait(3000);

    // Étape 3 : Aller à la page contact us
    cy.visit('https://app-uat.career.allence.cloud/client/contact-us')
    cy.url().should('include', '/contact-us')
cy.wait(1500);
 // Étape 2 : Saisir l'email
    cy.get('input[formcontrolname="from"]')
      .should('be.visible')
      .type('sarahhabibi653@gmail.com')
cy.wait(1000);

    // Étape 3 : Sélectionner un sujet
    cy.get('select[formcontrolname="object"]')
      .should('be.visible')
      .select('Problème technique'); // adapte la valeur si nécessaire
cy.wait(1000);

    // Étape 4 : Saisir le message
    cy.get('textarea[formcontrolname="message"]')
      .should('be.visible')
      .type('Bonjour, je rencontre un problème technique sur le site.');
cy.wait(1000);

    // Étape 5 : Cliquer sur le bouton d'envoi
    cy.contains('button', 'Send')
      .should('be.visible')
      .click();
cy.wait(1000);

    // Étape 6 : Vérifier la soumission (à adapter selon le comportement)
   //y.get('.toast-success') // ou une autre alerte de confirmation
    //.should('be.visible')
    //.and('contain', 'Message envoyé');
  });
});