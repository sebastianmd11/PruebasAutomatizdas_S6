describe('Eliminar un Tag', () => {
  let variables;
  let uncaughtExceptionHandler;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

  beforeEach(() => {
    uncaughtExceptionHandler = (err, runnable) => {
      return false;
    };
    Cypress.on('uncaught:exception', uncaughtExceptionHandler);
  });

  afterEach(() => {
    Cypress.off('uncaught:exception', uncaughtExceptionHandler);
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
    cy.get('.ember-view.gh-btn.gh-btn-primary').click()
    cy.wait(5000);
    cy.get('#tag-name').type('00001')
    cy.wait(2000);
    cy.get('input[placeholder="15171A"]').type('f20707')
    cy.wait(2000);
    cy.get('#tag-description').type('Esta es una descripcion de prueba para validar la funcionalidad de crear Tags')
    cy.wait(2000);
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.wait(2000);
    cy.get('[data-test-link="tags-back"]').click();
    cy.wait(2000);
    cy.get('.gh-list-chevron').first().click();
    cy.wait(2000);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click();
    cy.wait(3000);
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
   });
});