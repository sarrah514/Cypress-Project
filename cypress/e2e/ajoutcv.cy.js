describe('Test Ajout CV', () => {
  it('Doit ajouter un CV', () => {
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

    // Étape 3 : Aller à la page My CVs
    cy.visit('https://app-uat.career.allence.cloud/client/my-cvs');
    cy.url().should('include', '/my-cvs');
cy.wait(3000);

    // Étape 4 : Cliquer sur le bouton "ADD A CV"
cy.contains('button', 'Add a CV').should('be.visible').click();
cy.wait(3000);

    // Étape 5 : Vérifie que la page d’ajout s'affiche
    cy.url().should('include', '/ajoutcv');
    cy.get('form').should('be.visible');
    // Étape 6 : Remplir le titre
    cy.get('input[formcontrolname="title"]').type('CV Développeuse Web');

    cy.contains('label', 'Public').click({ force: true });
cy.wait(3000);

    // Étape 7 : Upload du fichier CV
    const cvFile = 'cv.pdf';
cy.get('input[type="file"]').selectFile('cypress/fixtures/cv.pdf', { force: true });

    // Étape 8 : Soumettre le formulaire
    cy.contains('button', 'Submit').click();
cy.wait(3000);

  // Étape 9 : Attendre la redirection automatique (sans cy.visit)
cy.url({ timeout: 10000 }).should('include', '/my-cvs');
// Étape 9 : visiter la page où les CV sont listés
//cy.visit('https://app-uat.career.allence.cloud/client/my-cvs');
//cy.wait(3000);

// Étape 10 : attendre que les cartes soient présentes
cy.get('.card-container', { timeout: 10000 }).should('exist');
cy.wait(3000);

// Étape 11 : Vérifier que le CV "CV Développeuse Web" est bien là
cy.contains('.card-container', 'CV Développeuse Web').should('exist');
// Étape11 : cibler la première carte et effectuer un survol
cy.get('.card-container').first().as('premiereCarteCV');
cy.wait(3000);

// Étape 12 : déclencher le hover pour faire apparaître l’icône "edit"
cy.get('@premiereCarteCV').trigger('mouseover');
cy.wait(3000);

// Étape 13 : cliquer sur l’icône "edit"
cy.get('@premiereCarteCV')
  .find('mat-icon')
  .contains('edit')
  .click({ force: true });
cy.wait(3000);

// Étape 14 : vérifier la redirection vers la page de modification
cy.url().should('include', '/modifier-cv');
cy.wait(3000);

// Étape 15 : Attendre que le champ du titre soit visible
cy.get('input[formcontrolname="titre"]', { timeout: 10000 }) // Ajuste selon le nom réel
.clear()
 .type('testtest');
cy.wait(3000);

// Étape 16 : Cliquer sur le bouton "Enregistrer" ou "Mettre à jour"
cy.contains('button', 'Update').click(); 
cy.wait(3000);

// Étape 17 : Cliquer sur l’icône de suppression
cy.get('@premiereCarteCV').find('mat-icon').contains('delete').click({ force: true }); // si l'icône n'est visible qu'au hover
cy.wait(3000);

// Étape 18 : Confirmer la suppression (si popup)
cy.contains('button', 'Delete') 
  .click();



  });
});
