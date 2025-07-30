describe('Test amélioration cv', () => {
  it('Doit améliorer le cv', () => {
    cy.visit('https://app-uat.career.allence.cloud/auth/login');
    cy.get('input[type="email"]').type('habibisarra042@gmail.com');
    cy.get('input[type="password"]').type('123456');
    cy.contains('button', 'Se connecter').click();
    cy.url().should('include', '/home');
    cy.wait(3000);

    cy.visit('https://app-uat.career.allence.cloud/client/my-cvs');
    cy.url().should('include', '/my-cvs');
    cy.wait(3000);

    cy.get('.card-container').first().as('premiereCarteCV');
    cy.get('@premiereCarteCV').trigger('mouseover');
    cy.wait(1000);
    cy.get('@premiereCarteCV').within(() => {
      cy.get('img[alt="message-bot"]').click({ force: true });
    });

    cy.url().should('include', '/chat');
    cy.wait(3000);
    // Ouvre une nouvelle discussion en cliquant sur le bouton +
cy.get('mat-icon')
  .contains('add')
  .click({ force: true });
cy.wait(3000);
    const sendMessageAndWaitForBot = (message) => {
      cy.get('input[placeholder="Tapez un message"]').clear().type(message);
      cy.get('button.send-btn').click({ force: true });

      // Vérifie que le message utilisateur apparaît
      cy.get('.message-bubble').contains(message).should('exist');

      // Attend que le bot réponde avec un message différent
      cy.get('.message-bubble', { timeout: 15000 })
        .should('have.length.greaterThan', 1)
        .last()
        .should('not.contain.text', message);
    };

    sendMessageAndWaitForBot('bonjour');
    cy.wait(8000);

    sendMessageAndWaitForBot('je veux améliorer mon cv');
        cy.wait(8000);
    sendMessageAndWaitForBot('Autres idées svp');
        cy.wait(8000);
cy.get('button.clear-history').click();
        cy.wait(3000);
cy.get('button.delete-btn').click();
cy.reload();
cy.get('.chat-message').should('not.exist'); 

  });
});
