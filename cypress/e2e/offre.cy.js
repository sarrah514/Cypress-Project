describe('Test job offer', () => {
  it('Doit ajouter une offre', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.contains('button', 'Sign In').click();
cy.wait(3000);
    // Étape 2 : Attente de redirection vers /home
    cy.url().should('include', '/home');
    cy.get('.toast-success', { timeout: 10000 }).should('not.exist');
cy.wait(3000);

    // Étape 3 : Aller à la page joboffer
    cy.visit('https://app-uat.career.allence.cloud/client/joboffer');
    cy.url().should('include', '/joboffer')
cy.wait(3000);
// Étape 4 : Cliquer sur le bouton "ADD A new cv"
cy.contains('button', 'A').should('be.visible').click();
cy.wait(3000);

    // Étape 5 : Vérifie que la page d’ajout s'affiche
    cy.url().should('include','/ajout-job-offer')
    cy.wait(3000);
    cy.contains('mat-panel-title', 'Advanced Details')
  .should('be.visible')
  .click({ force: true });

cy.wait(1000); 
 // Étape 6 : Remplir le titre
 cy.get('input[placeholder="Add a title to your offer ..."]')
  .should('be.visible')
  .type('CV Développeuse Web');
  cy.wait(1500);
 cy.get('input[placeholder="Enter company name..."]')
  .should('be.visible')
  .type('CHOSA')
    cy.wait(1500);
  cy.get('input[placeholder="Enter job location..."]')
  .should('be.visible')
  .type('paris')
    cy.wait(1500);
   cy.get('input[placeholder="Technologies (comma-separated)"]')
  .should('be.visible')
  .type('aws,java')
    cy.wait(1500);
  cy.get('input[placeholder="Enter the job description"]')
  .should('be.visible')
  .type('aaa')
    cy.wait(1500);
  cy.get('input[placeholder="Enter the proposed salary"]')
  .should('be.visible')
  .type('200')
    cy.wait(1500);
  cy.get('input[placeholder="Select the start date"]')
  .should('be.visible')
  .type('ASAP')
    cy.wait(1500);
  cy.get('input[placeholder="Enter the contract duration"]')
  .should('be.visible')
  .type('paris')
    cy.wait(1500);
    cy.get('input[placeholder="Skills (comma-separated)"]')
  .should('be.visible')
  .type('aws,java')
    cy.wait(1500);
  // Cibler via le label "Select experience level"
cy.contains('mat-label', 'Select experience level')
  .parents('mat-form-field')
  .find('mat-select')
  .click({ force: true });
  cy.wait(1500);
// Puis sélectionner une option
cy.get('mat-option').contains('Senior').click();
  cy.wait(1500);
     cy.get('#mat-input-10').type('2025-05-27');
           cy.wait(1500);
    cy.contains('label', 'Private').click({ force: true });
      cy.wait(1500);


    // Étape 8 : Soumettre le formulaire
cy.contains('button', 'Submit').click();
//cy.url({ timeout: 10000 }).should('include', '/joboffer');
  })     
});