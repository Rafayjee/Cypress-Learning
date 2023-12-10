/// <reference types="cypress" />
import dc from "../../fixtures/demo-qa-constants.json"
import dl from "../../locators/demo-qa-locators.json"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

describe('demoqa - Text Box Test', () => {
    beforeEach(() => {
        cy.Visiting_demoqa();
        cy.visit('/elements')
    });
    it('Text Box Test', () => {
        cy.get(dl.Elements.textBox).click();
        cy.get(dl.TextBox.userName).type(dc.textBox.userName).should('have.value', dc.textBox.userName);
        cy.get(dl.TextBox.userEmail).type(dc.textBox.userEmail).should('have.value', dc.textBox.userEmail);
        cy.get(dl.TextBox.currentAddress).type(dc.textBox.currentAddress).should('have.value', dc.textBox.currentAddress);
        cy.get(dl.TextBox.permanentAddress).type(dc.textBox.permanentAddress).should('have.value', dc.textBox.permanentAddress);
        cy.get(dl.TextBox.submitBtn).click()
    });
    it('Check Box Test', () => {
        cy.get('#item-1').click();
        cy.get('.rct-option-expand-all').click();
        cy.contains('Home').click();
        cy.contains('Desktop').click();
        cy.contains('Documents').click();
        cy.contains('Downloads').click();
        cy.contains('Desktop').click();
        cy.get('.rct-option-collapse-all').click();
        cy.get('.text-success').should('have.length', 3);
    });
    it('Radio Button Test', () => {
        cy.get(dl.Elements.radioButton).click();
        cy.get(dl.radioButton.yesRadioBtn).click({force: true});
        cy.get(dl.radioButton.successText).should('have.text', dc.radioButton.yesSuccess);
        cy.get(dl.radioButton.impressiveRadioBtn).click({force: true});
        cy.get(dl.radioButton.successText).should('have.text', dc.radioButton.impressiveSuccess);
        cy.get(dl.radioButton.noRadioBtn).should('be.disabled');
    });
    it('Buttons Test', () => {
        cy.get(dl.Elements.Buttons).click();
        cy.get(dl.Buttons.doubleClickMe).dblclick();
        cy.get(dl.Buttons.doubleClickSuccess).should('have.text', dc.Buttons.doubleClickMessage);
        cy.get(dl.Buttons.rightClickMe).rightclick();
        cy.get(dl.Buttons.rightClickSuccess).should('have.text', dc.Buttons.rightClickMessage);
        // cy.get('.btn-primary').contains('Click Me').click();
        // cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
    });
    it('Upload File Test', () => {
        cy.get(dl.Elements.uploadAndDownload).click();
        cy.get(dl.uploadAndDownload.uploadFileBtn).attachFile(dc.uploadAndDownload.picture);
        cy.get(dl.uploadAndDownload.downloadBtn).click();
    });
});

