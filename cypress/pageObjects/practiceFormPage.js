import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
    static get url() {
        return '/automation-practice-form';
    }

    static get firstNameField() {
        return cy.get('#firstName');
    }

    static get lastNameField() {
        return cy.get('#lastName');
    }

    static get emailField() {
        return cy.get('#userEmail');
    }

    static get genderMaleRadio() {
        return cy.get('[for="gender-radio-1"]');
    }

    static get mobileField() {
        return cy.get('#userNumber');
    }

    static get dateOfBirthField() {
        return cy.get('#dateOfBirthInput');
    }

    static get monthDropdown() {
        return cy.get('.react-datepicker__month-select');
    }

    static get yearDropdown() {
        return cy.get('.react-datepicker__year-select');
    }

    static selectDay(day) {
        return cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
    }

    static get subjectsField() {
        return cy.get('#subjectsInput');
    }

    static get musicCheckbox() {
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get fileUpload() {
        return cy.get('#uploadPicture');
    }

    static get currentAddressField() {
        return cy.get('#currentAddress');
    }

    static get stateDropdown() {
        return cy.get('#state');
    }

    static get cityDropdown() {
        return cy.get('#city');
    }

    static get submitButton() {
        return cy.get('#submit');
    }

    static get confirmationModal() {
        return cy.get('.table-responsive');
    }
}