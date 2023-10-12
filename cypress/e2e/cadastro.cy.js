/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        cy.visit('Register.html')
        cy.get('input[ng-model="FirstName"]').type('Jean')
        cy.get('input[ng-model="LastName"]').type('Viana')
        cy.get('input[ng-model="EmailAdress"]').type('jean@mail.com')
        cy.get('input[ng-model="Phone"]').type('5555555555')
        cy.get('input[value="FeMale"]').check()
        cy.get('input[type="checkbox"]').check('Cricket')
        cy.get('input[type="checkbox"]').check('Movies')
        
    });
});