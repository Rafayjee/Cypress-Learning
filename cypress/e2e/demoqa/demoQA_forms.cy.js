/// <reference types="cypress" />
import dc from "../../fixtures/demo-qa-constants.json"
import dl from "../../locators/demo-qa-locators.json"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

describe('demoqa - Text Box Test', () => {
    beforeEach(() => {
        cy.Visiting_demoqa_forms();
        cy.visit('/forms');
    });
    it('Forms Test', () => {
        cy.get(dl.DemoQA.listClass).find(dl.DemoQA.sideMenu).contains(dc.SideMenu.practiceForm).click();
        cy.get(dl.practiceForm.firstName).type(dc.practiceForm.firstName);
        cy.get(dl.practiceForm.lastName).type(dc.practiceForm.lastName);
        cy.get(dl.practiceForm.Email).type(dc.practiceForm.userEmail);
        cy.get(dl.practiceForm.genderRadioBtn1).click({force: true});
        cy.get(dl.practiceForm.mobileNumber).type(dc.practiceForm.mobileNumber);
        cy.get(dl.practiceForm.DOB).click();
        cy.get(dl.practiceForm.DOB_monthSelect).select(dc.practiceForm.DOB_month);
        cy.get(dl.practiceForm.DOB_yearSelect).select(dc.practiceForm.DOB_year);
        cy.get(dl.practiceForm.DOB_daySelect).click({force: true});
        cy.get(dl.practiceForm.Subjects).type('M');
        cy.get(dl.practiceForm.subjectsDropdown).contains(dc.practiceForm.subjectMaths).click();
        cy.get(dl.practiceForm.Subjects).type('C');
        cy.get(dl.practiceForm.subjectsDropdown).contains(dc.practiceForm.subjectComputer).click();
        cy.get(dl.practiceForm.hobbiesCheckbox1).check({force: true});
        cy.get(dl.practiceForm.hobbiesCheckbox3).check({force: true});
        cy.get(dl.practiceForm.uploadPictureBtn).attachFile(dc.practiceForm.picture);
        cy.get(dl.practiceForm.currentAddress).type(dc.practiceForm.Address);
        cy.get(dl.practiceForm.State).click({force: true});
        cy.get(dl.practiceForm.state_cityDropdown).contains(dc.practiceForm.stateNCR).click();
        cy.get(dl.practiceForm.City).click();
        cy.get(dl.practiceForm.state_cityDropdown).contains(dc.practiceForm.stateDelhi).click();
        cy.get(dl.practiceForm.SubmitBtn).click({force: true});
        cy.get(dl.practiceForm.submitForm_Header).should('have.text', dc.practiceForm.formHeaderText);
        cy.wait(dc.Waits.fourSeconds);
        cy.get(dl.practiceForm.submitForm_closeBtn).click();
    });
});