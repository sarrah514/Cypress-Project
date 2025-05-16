describe('Test Ajout CV', () => {
  it('Doit ajouter un CV', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('sarrahabibisarra123');
    cy.contains('button', 'Sign In').click();

    // Étape 2 : Attente de redirection vers /home
    cy.url().should('include', '/home');
    cy.get('.toast-success', { timeout: 10000 }).should('not.exist');

    // Étape 3 : Aller à la page My CVs
    cy.visit('https://app-uat.career.allence.cloud/client/my-cvs');
    cy.url().should('include', '/my-cvs');

    // Étape 4 : Cliquer sur le bouton "ADD A CV"
cy.contains('button', 'Add a CV').should('be.visible').click();

    // Étape 5 : Vérifie que la page d’ajout s'affiche
    cy.url().should('include', '/ajoutcv');
    cy.get('form').should('be.visible');
    // Remplir le titre
    cy.get('input[formcontrolname="title"]').type('CV Développeuse Web');

    cy.contains('label', 'Public').click({ force: true });

    // Upload du fichier CV
    const cvFile = 'cv.pdf';
cy.get('input[type="file"]').selectFile('cypress/fixtures/cv.pdf', { force: true });

    // Soumettre le formulaire
    cy.contains('button', 'Submit').click();

    // Vérifier succès
//cy.contains('CV successfully added!', { timeout: 10000 }).should('be.visible');
    //// Attendre que la page soit bien affichée
// Étape 1 : visiter la page où les CV sont listés
cy.visit('https://app-uat.career.allence.cloud/client/my-cvs');

// Étape 2 : attendre que les cartes soient présentes
cy.get('.card-container', { timeout: 10000 }).should('exist');

// Étape 3 : cibler la première carte et effectuer un survol
cy.get('.card-container').first().as('premiereCarteCV');

// Étape 4 : déclencher le hover pour faire apparaître l’icône "edit"
cy.get('@premiereCarteCV').trigger('mouseover');

// Étape 5 : cliquer sur l’icône "edit"
cy.get('@premiereCarteCV')
  .find('mat-icon')
  .contains('edit')
  .click({ force: true });

// Étape 6 : vérifier la redirection vers la page de modification
cy.url().should('include', '/modifier-cv');

// Étape 1 : Attendre que le champ du titre soit visible
cy.get('input[formcontrolname="titre"]', { timeout: 10000 }) // Ajuste selon le nom réel
  .clear()
  .type('testtest');

// Étape 2 : Modifier la visibilité (ex. passer à "private")
// Si c'est un select ou des boutons radio, on adapte :





// Étape 3 : Cliquer sur le bouton "Enregistrer" ou "Mettre à jour"
cy.contains('button', 'Update').click(); 



  });
});
