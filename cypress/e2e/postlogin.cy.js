describe('Test API login', () => {
  it('should return 201 on successful login', () => {
    cy.request({
      method: 'POST',
      url: 'https://41k6nzgmu7.execute-api.eu-west-1.amazonaws.com/stage/users/',
      body: {
        email: 'habibisarra042@gmail.com',
        password: 'sarrahabibisarra123'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      // tu peux aussi vérifier si un token ou autre info est renvoyé
      cy.log(JSON.stringify(response.body));
    });
  });
});
