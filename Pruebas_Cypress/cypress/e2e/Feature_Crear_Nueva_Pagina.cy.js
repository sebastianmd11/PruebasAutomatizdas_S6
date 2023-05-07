//Importar el archivo JSON como variable
const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');

describe('Crear una nueva página en la aplicación Ghost', () => {
  it('Iniciar sesión y crear una nueva página', () => {
    cy.visit(variables.UrlBase)
      .wait(1000)
      .get('#identification').type(variables.username)
      .wait(1000)
      .get('#password').type(variables.password)
      .get(properties.buttons.next).click()
      .wait(1000)
      .get(properties.buttons.pages).click()
      .wait(1000)
      .get(properties.buttons["New Page"]).click()
      .wait(2000)
      .get('textarea[placeholder="Page title"]').type('New Page Test')
      .wait(2000)
      .get('div[data-placeholder="Begin writing your page..."]').type('This is a test for a new page')
      .wait(1000)
      .get(properties.buttons.publish).click()
      .wait(1000)
      .get(properties.buttons["continue to final review"]).click()
      .wait(1000)
      .get(properties.buttons["confirm publish"]).click()
      .wait(1000)
      .get(properties.buttons["back to editor"]).click()
      .wait(1000)
      .get(properties.buttons["back to pages"]).click()
      .wait(1000)
      .get('a.gh-post-list-title h3')
      .contains('New Page Test')
      .should('be.visible');
  });
});
