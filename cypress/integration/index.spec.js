const baseUrl='http://localhost:3000/'

describe('Home',()=>{
    it('should be valid',()=>{
    cy.visit(baseUrl);
    cy.contains('Welcome');
    });
});