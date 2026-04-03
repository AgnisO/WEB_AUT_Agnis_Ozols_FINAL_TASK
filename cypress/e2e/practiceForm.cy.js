import { PracticeFormPage } from "../pageObjects/practiceFormPage";

describe('Practice Form', () => {
    beforeEach(() => {
        PracticeFormPage.visit();
    });

    it('Fill in and submit the practice form', () => {
        // Fill in first name
        PracticeFormPage.firstNameField.should('be.visible').type('John');

        // Fill in last name
        PracticeFormPage.lastNameField.should('be.visible').type('Doe');

        // Fill in email
        PracticeFormPage.emailField.should('be.visible').type('john.doe@email.com');

        // Select gender - Male
        PracticeFormPage.genderMaleRadio.click();

        // Fill in mobile number
        PracticeFormPage.mobileField.should('be.visible').type('1234567890');

        // Set Date of Birth - 28th February 1930
        PracticeFormPage.dateOfBirthField.click();
        PracticeFormPage.monthDropdown.select('February');
        PracticeFormPage.yearDropdown.select('1930');
        PracticeFormPage.selectDay('28');

        // Set Subjects to Economics
        PracticeFormPage.subjectsField.type('Economics{enter}');

        // Set Hobbies to Music
        PracticeFormPage.musicCheckbox.click();

        // Upload image from files folder
        PracticeFormPage.fileUpload.selectFile('cypress/files/image.jpg');

        // Fill in current address
        PracticeFormPage.currentAddressField.type('123 Test Street');

        // Set State to NCR
        PracticeFormPage.stateDropdown.click();
        cy.contains('NCR').click();

        // Set City to Delhi
        PracticeFormPage.cityDropdown.click();
        cy.contains('Delhi').click();

        // Click Submit
        PracticeFormPage.submitButton.click({ force: true });

        // Validate confirmation modal rows
        PracticeFormPage.confirmationModal.should('contain.text', 'John Doe');
        PracticeFormPage.confirmationModal.should('contain.text', 'john.doe@email.com');
        PracticeFormPage.confirmationModal.should('contain.text', 'Male');
        PracticeFormPage.confirmationModal.should('contain.text', '1234567890');
        PracticeFormPage.confirmationModal.should('contain.text', '28 February,1930');
        PracticeFormPage.confirmationModal.should('contain.text', 'Economics');
        PracticeFormPage.confirmationModal.should('contain.text', 'Music');
        PracticeFormPage.confirmationModal.should('contain.text', 'image.jpg');
        PracticeFormPage.confirmationModal.should('contain.text', '123 Test Street');
        PracticeFormPage.confirmationModal.should('contain.text', 'NCR Delhi');
    });
});