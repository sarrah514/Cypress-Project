describe('Test Ajout CV', () => {
  it('Doit ajouter un CV', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.contains('button', 'Se connecter').click();
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
    cy.contains('button', 'Ajouter un CV').should('be.visible').click();
    cy.wait(3000);

    // Étape 5 : Vérifie que la page d’ajout s'affiche
    cy.url().should('include', '/ajoutcv');
    cy.get('form').should('be.visible');

    // Étape 6 : Remplir le titre
    cy.get('input[formcontrolname="title"]').type('CV Développeuse Web');

    // Sélectionner le champ "Public"
    cy.contains('label', 'Public').click({ force: true });
    cy.wait(2000);

    // 🔽 Étape 6 bis : Sélectionner le type de candidat (Engineer ou Intern)
    cy.get('mat-select[formcontrolname="candidateType"]').should('be.visible').click();
    cy.get('mat-option').contains('Stagiaire').click(); // ou 'Intern'
    cy.wait(2000);

    // Étape 7 : Upload du fichier CV
    cy.get('input[type="file"]').selectFile('cypress/fixtures/cv.pdf', { force: true });

    // Étape 8 : Soumettre le formulaire
    cy.contains('button', 'Soumettre').click();
    cy.wait(20000);

    // Étape 9 : Redirection automatique
cy.wait(5000);
cy.get('.card-container').should('exist');
    cy.get('.card-container', { timeout: 10000 }).should('exist');
    cy.wait(3000);

    // Étape 11 : Vérifier que le CV ajouté est là
    cy.contains('.card-container', 'CV Développeuse Web').should('exist');

    // Étape 12 : Hover sur la carte
    cy.get('.card-container').first().as('premiereCarteCV').trigger('mouseover');
    cy.wait(2000);

    // Étape 13 : Modifier le CV
    cy.get('@premiereCarteCV').find('mat-icon').contains('edit').click({ force: true });
    cy.wait(3000);

    // Étape 14 : Redirection vers page de modification
    cy.url().should('include', '/modifier-cv');
    cy.get('input[formcontrolname="titre"]', { timeout: 10000 }).clear().type('testtest');
    cy.wait(2000);

    // Étape 15 : Mettre à jour
    cy.contains('button', 'Mettre à jour').click(); 
    cy.wait(10000);

    // Étape 16 : Supprimer
    cy.get('@premiereCarteCV').find('mat-icon').contains('delete').click({ force: true });
    cy.wait(2000);
    cy.contains('button', 'Supprimer').click();
  });
});
