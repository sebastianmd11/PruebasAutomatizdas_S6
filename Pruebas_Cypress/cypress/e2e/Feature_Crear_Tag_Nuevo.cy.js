describe('Crear un Tag nuevo', () => {
  let variables;

  before(() => {
    cy.readFile('variables.json').then((content) => {
      variables = content;
    });
  });

  it('Como usuario administrador inicio sesion en Ghost y creo un elemento Tag', () => {
    cy.visit(variables.UrlBase + '/#/signin')
      .get('#identification')
      .type(variables.username)
      .get('#password')
      .type(variables.password)
      .get('[data-test-button="sign-in"]')
      .click()
      .get('[data-test-nav="tags"]')
      .click()
      .get('.ember-view.gh-btn.gh-btn-primary')
      .click() 
      .get('#tag-name')
      .type('Tag Example Test')
      .get('input[placeholder="15171A"]')
      .type('f20707')
      .get('#tag-description')
      .type('Esta es una descripcion de prueba para validar la funcionalidad de crear Tags')
      .get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
      .click()
      .then(() => {
        cy.get('[data-test-link="tags-back"]').click();
      })
      .then(() => {
        const tagName = 'Tag Example Test';
        cy.get('h3.gh-tag-list-name').contains(tagName).should('be.visible');
      });
  });
});