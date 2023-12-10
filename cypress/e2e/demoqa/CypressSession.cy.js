Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Login to OrangeHRM website
describe('OrangeHRM Login', () => {
    beforeEach(() => {
      cy.loginAndMaintainSession();
});
      // after(() => {
      //   Cypress.session.clearAllSavedSessions() 
      // });
    it('Navigates to My Info Page', () => {
        cy.visit('/dashboard/index');
        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').contains('My Info').click();
      });
    it('Navigates to Leave Page', () => {
        cy.visit('/dashboard/index'); 
        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').contains('Leave').click();  
      });
    it('Navigates to Admin Page', () => {
        cy.visit('/dashboard/index');
        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').contains('Admin').click(); 
    });

});  


