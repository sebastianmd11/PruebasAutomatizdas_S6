describe('Utilizar un Tag en una Pagina', () => {
let variables;

before(() => {
  cy.readFile('variables.json').then((content) => {
    variables = content;
  });
});

  it('Como usuario administrador inicio sesion en Ghost, selecciono una pagina y le agrego un Tag', () => {
    cy.visit(variables.UrlBase + '/#/signin');
    cy.wait(5000);
    cy.get('#identification').type(variables.username);
    cy.wait(2000);
    cy.get('#password').type(variables.password);
    cy.wait(2000);
    cy.get('[data-test-button="sign-in"]').click();
    cy.wait(5000);
    cy.get('[data-test-nav="pages"]').click();
    cy.wait(5000);
    cy.get('.gh-post-list-cta.edit').first().click();
    cy.wait(5000);
    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(5000);
    cy.get('.ember-power-select-status-icon').click();
    cy.wait(5000);
    cy.get('[data-option-index="0"]').click();
    cy.wait(5000);
    cy.get('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    cy.wait(5000);
    cy.get('[data-test-button="publish-save"]').click();
    cy.wait(5000);
  });
});
