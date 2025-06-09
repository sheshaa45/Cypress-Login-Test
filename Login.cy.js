describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://example.com/login');
    cy.get('#username').type('admin');
    cy.get('#password').type('admin123');
    cy.get('#login').click();
  });
});
it('should show error on invalid login', () => {
  cy.visit('https://example.com/login');
  cy.get('#username').type('wrong');
  cy.get('#password').type('wrongpass');
  cy.get('#login').click();
  cy.contains('Invalid credentials').should('be.visible');
});

