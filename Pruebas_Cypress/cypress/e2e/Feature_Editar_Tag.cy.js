describe('Editar un Tag', () => {
let variables;

before(() => {
  cy.readFile('variables.json').then((content) => {
    variables = content;
  });
});
 
  it('Como usuario administrador inicio sesion en Ghost, busco el primer elemento de la lista Tag y lo edito', () => {
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
    cy.get('#tag-name').clear().type('New Tag Example Test');
    cy.wait(2000);
    cy.get('input[placeholder="15171A"]').clear().type('1c0df8');
    cy.wait(2000);
    cy.get('#tag-slug').clear().type('New_Tag_Example_Test');
    cy.wait(2000);
    cy.get('#tag-description').clear().type('Esta es una descripcion nueva de prueba para validar la funcionalidad de editar Tags');
    cy.wait(2000);
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
    cy.wait(5000);
  });
});
