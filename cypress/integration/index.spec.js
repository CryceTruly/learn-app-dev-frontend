const baseUrl='http://localhost:3030/'

describe('Home',()=>{
    it('should be valid',()=>{
    cy.visit('https://cocky-lamport-d9ae8a.netlify.com/');
    cy.contains('Welcome');
    });
});