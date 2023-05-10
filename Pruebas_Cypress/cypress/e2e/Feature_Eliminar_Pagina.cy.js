//Importar el archivo JSON como variable
//Tenga en cuenta que al ejecutar esta prueba no deben haber paginas en estado DRAF en el listado//

const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');
const test_name = 'Pages_DeletePage'

describe('Eliminar una página de la aplicación Ghost', () => {
  it('Iniciar sesión, crear una página nueva y luego eliminarla', () => {
    cy.visit(variables.UrlBase)
    cy.screenshot(`${test_name}/1`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/2`,{overwrite: true})

      .get('#identification').type(variables.username)
      cy.screenshot(`${test_name}/3`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/4`,{overwrite: true})

      .get('#password').type(variables.password)
      cy.screenshot(`${test_name}/5`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/6`,{overwrite: true})

      .get(properties.buttons.next).click()
      cy.screenshot(`${test_name}/7`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/8`,{overwrite: true})

      .get(properties.buttons.pages).click()
      cy.screenshot(`${test_name}/9`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/10`,{overwrite: true})

      .get(properties.buttons["New Page"]).click()
      cy.screenshot(`${test_name}/11`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/12`,{overwrite: true})

      .get('textarea[placeholder="Page title"]').type('Delete Page Test')
      cy.screenshot(`${test_name}/13`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/14`,{overwrite: true})

      .get('div[data-placeholder="Begin writing your page..."]').type('Este test inicia sesión, crea una página nueva y luego elimina la página creada.')
      cy.screenshot(`${test_name}/15`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/16`,{overwrite: true})

      .get(properties.buttons.publish).click()
      cy.screenshot(`${test_name}/17`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/18`,{overwrite: true})

      .get(properties.buttons["continue to final review"]).click()
      cy.screenshot(`${test_name}/19`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/20`,{overwrite: true})

      .get(properties.buttons["confirm publish"]).click()
      cy.screenshot(`${test_name}/21`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/22`,{overwrite: true})

      .get(properties.buttons["back to editor"]).click()
      cy.screenshot(`${test_name}/23`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/24`,{overwrite: true})

      .get(properties.buttons["back to pages"]).click()
      cy.screenshot(`${test_name}/25`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/26`,{overwrite: true})

      .get(properties.buttons["edit page"]).first().click()
      cy.screenshot(`${test_name}/27`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/28`,{overwrite: true})

      .get(properties.buttons["page settings"]).click()
      cy.screenshot(`${test_name}/29`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/30`,{overwrite: true})

      .get(properties.buttons["delete page"]).click()
      cy.screenshot(`${test_name}/31`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/32`,{overwrite: true})

      .get(properties.buttons["confirm delete"]).click()
      cy.screenshot(`${test_name}/33`,{overwrite: true})

      .wait(2000)
      cy.screenshot(`${test_name}/34`,{overwrite: true})

      .get('h3.gh-content-entry-title').should('not.contain', 'Delete Page Test')
      cy.screenshot(`${test_name}/35`,{overwrite: true})
  });
});