describe('Entretien Téléphonique IA', () => {
  it('doit permettre à un candidat de postuler et lancer un entretien téléphonique', () => {
    // Étape 1 : Connexion
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.contains('button', 'Se connecter').click();

    // Vérifie redirection dashboard
    cy.url({ timeout: 10000 }).should('include', '/home');
    cy.wait(2000);

    // Étape 2 : Aller à la page des offres
    cy.visit('https://app-uat.career.allence.cloud/client/joboffer');
    cy.url().should('include', '/joboffer');
    cy.wait(3000);

    // Étape 3 : Cliquer sur l'offre
    cy.contains('.premium-header', 'aa', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Étape 4 : Si déjà postulé, aller à l’entretien
 cy.contains('button', 'Postuler', { timeout: 10000 })
  .should('be.visible')
  .click({ force: true });



    //Sinon décommenter pour postuler :
     cy.get('img.cvImage', { timeout: 10000 }).first().click();
     cy.contains('button', 'Soumettre', { timeout: 10000 }).click({ force: true });

    // Étape 5 : Lancer l'entretien téléphonique
    cy.contains('Entretien téléphonique', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button', 'Continuer', { timeout: 10000 }).should('be.visible').click();

    /// Étape : Récupérer le numéro à composer
cy.get('.code-box', { timeout: 10000 })
  .should('be.visible')
  .invoke('text')
  .then((rawCode) => {
    const numberToCall = rawCode.trim();
    const digitsOnly = numberToCall.replace(/\D/g, ''); // Supprime tous les caractères non numériques

    cy.log('Numéro à appeler : ' + digitsOnly);

    // Aller à la page de numérotation
    cy.visit('https://app-uat.career.allence.cloud/client/phone-dial');

    // Attendre que le clavier soit prêt (ex: bouton "1" visible)
    cy.contains('button', '1', { timeout: 15000 }).should('be.visible');

    // Taper chaque chiffre du numéro
    [...digitsOnly].forEach((digit) => {
      cy.contains('button', digit, { timeout: 5000 }).click();
    });

    // Cliquer sur le bouton "Call"
    cy.contains('button', 'Call', { timeout: 10000 }).click();

    // Vérifier que l'appel est lancé
    cy.contains('Call in progress', { timeout: 15000 }).should('be.visible');
  });

      });
  });

