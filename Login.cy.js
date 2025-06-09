describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://example.com/login');
    cy.get('#username').type('admin');
    cy.get('#password').type('admin123');
    cy.get('#login').click();
  });
});
