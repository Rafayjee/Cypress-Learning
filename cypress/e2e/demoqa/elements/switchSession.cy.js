/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
describe('switch session in one spec file', () => {
    // beforeEach(() => {
    //     cy.visit('/dashboard')
    // });
    it('navigate to rooms as CIP', () => {
        cy.loginCIP();
        cy.wait(20000);
        cy.visit('/dashboard');
        cy.wait(20000);
        cy.get('#user-settings').click();
    });
    it('navigate to consent as AM', () => {
        cy.loginVRN();
        cy.wait(20000);
        cy.visit('/dashboard');
        cy.wait(20000);
        cy.get('#user-settings').click();
    });
    it('navigate to rooms as CIP', () => {
        cy.loginCIP();
        cy.wait(20000);
        cy.visit('/dashboard');
        cy.wait(20000);
        cy.get('#user-settings').click();
        cy.wait(5000);
    });
    it('navigate to consent as AM', () => {
        cy.loginVRN();
        cy.wait(20000);
        cy.visit('/dashboard');
        cy.wait(20000);
        cy.get('#user-settings').click();
        cy.wait(5000); 
    });
});