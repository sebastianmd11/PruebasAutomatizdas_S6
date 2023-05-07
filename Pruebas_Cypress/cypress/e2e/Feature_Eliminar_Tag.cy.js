describe('Eliminar un Tag', () => {
let variables;

before(() => {
  cy.readFile('variables.json').then((content) => {
    variables = content;
  });
});

  it('Como usuario administrador inicio sesión en Ghost, busco el primer elemento de la lista Tag y lo elimino', () => {
    cy.visit(variables.UrlBase + '/#/signin');
    cy.wait(5000);
    cy.get('#identification').type(variables.username);
    cy.wait(2000);
    cy.get('#password').type(variables.password);
    cy.wait(2000);
    cy.get('[data-test-button="sign-in"]').click();
    cy.wait(5000);
    cy.get('[data-test-nav="tags"]').click();
    cy.wait(5000);
    cy.get('.gh-list-chevron').first().click();;
    cy.wait(5000);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click();
    cy.wait(5000);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    cy.wait(5000);
  });
});