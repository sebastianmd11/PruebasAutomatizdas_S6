//Importar el archivo JSON como variable
const properties = require('./properties_sebastian_4.44.json');
const variables =  require('../../../variables_4.44.json');
const test_name = 'Pages_NewPage'

describe('Crear una nueva página en la aplicación Ghost', () => {
  it('Iniciar sesión y crear una nueva página', () => {
    cy.visit(variables.UrlBase)
      cy.screenshot(`${test_name}/1`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/2`,{overwrite: true})

      .get('input[name="identification"]').type(variables.username)
      cy.screenshot(`${test_name}/3`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/4`,{overwrite: true})

      .get('input[name="password"]').type(variables.password)
      cy.screenshot(`${test_name}/5`,{overwrite: true})

      .get(properties.buttons.next).click()
      cy.screenshot(`${test_name}/6`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/7`,{overwrite: true})

      .get(properties.buttons.pages).click()
      cy.screenshot(`${test_name}/8`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/9`,{overwrite: true})

      .get(properties.buttons["New Page"]).click()
      cy.screenshot(`${test_name}/10`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/11`,{overwrite: true})

      .get('textarea[placeholder="Page title"]').type('New Page Test')
      cy.screenshot(`${test_name}/12`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/13`,{overwrite: true})

      .get('div[data-placeholder="Begin writing your page..."]').type('This is a test for a new page')
      cy.screenshot(`${test_name}/14`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/15`,{overwrite: true})

      .get(properties.buttons.publish).click()
      cy.screenshot(`${test_name}/16`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/17`,{overwrite: true})

      .get(properties.buttons["confirm publish"]).click()
      cy.screenshot(`${test_name}/18`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/19`,{overwrite: true})

      .get(properties.buttons["back to pages"]).click()
      cy.screenshot(`${test_name}/20`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/21`,{overwrite: true})

      .get('a.gh-post-list-title h3')
      .contains('New Page Test')
      .should('be.visible');
      cy.screenshot(`${test_name}/22`,{overwrite: true})
  });
});
