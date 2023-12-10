// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('LoginSession', () => {
//     cy.session(['orangeHRM_login'], () => {
        // cy.visit('/auth/login');
        // cy.get(':nth-child(2) > .oxd-input-group').type('Admin');
        // cy.get(':nth-child(3) > .oxd-input-group').type('admin123');
        // cy.get('.oxd-button').click();
//         });
//     });

import 'cypress-file-upload';

Cypress.Commands.add('loginAndMaintainSession', () => {
    cy.session('orangeHRM_login', () => {
        cy.visit('/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group').type('admin123');
        cy.get('.oxd-button').click();
}, { cacheAcrossSpecs: true });
  });

  Cypress.Commands.add('Visiting_demoqa', () => {
    cy.session('visit_demoqa', () => {
        cy.visit('https://demoqa.com/');
        cy.contains('Elements').click();
    }, { cacheAcrossSpecs: true });
  });
  
  Cypress.Commands.add('Visiting_demoqa_forms', () => {
    cy.session('visit_demoqa_forms', () => {
        cy.visit('https://demoqa.com/');
        cy.contains('Forms').click();
    }, { cacheAcrossSpecs: true });
  });

  Cypress.Commands.add('loginCIP', () => {
    cy.session('d3Login_as_cip', () => {
        cy.visit('/user/login');
        cy.get('#email').type('syed_cip@circadia.health');
        cy.get('#password').type('Rafay@badar12');
        cy.contains('Login').click();
        cy.wait(20000);
}, { cacheAcrossSpecs: true });
    
  });

  Cypress.Commands.add('loginVRN', () => {
    cy.session('d3Login_as_vrn', () => {
        cy.visit('/user/login');
        cy.get('#email').type('syed_vrn@circadia.health');
        cy.get('#password').type('Rafay@badar12');
        cy.contains('Login').click();
        cy.wait(20000);
}, { cacheAcrossSpecs: true });
  });



