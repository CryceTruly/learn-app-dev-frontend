const baseUrl='http://localhost:3030/'

describe('Home',()=>{
    it('should be valid',()=>{
    cy.visit('http://google.com');
    cy.contains('Google');
    });
});