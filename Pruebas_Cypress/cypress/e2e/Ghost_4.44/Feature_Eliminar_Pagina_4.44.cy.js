//Importar el archivo JSON como variable
//Tenga en cuenta que al ejecutar esta prueba no deben haber paginas en estado DRAF en el listado//

const properties = require('./properties_sebastian_4.44.json');
const variables =  require('../../../variables_4.44.json');
const test_name = 'Pages_DeletePage_4.44'
let number =1;

describe('Eliminar una página de la aplicación Ghost', () => {
  it('Iniciar sesión, crear una página nueva y luego eliminarla', () => {
    cy.visit(variables.UrlBase)
    cy.screenshot(`${test_name}/${number}_navegacion_a_ghost`,{overwrite: true})
      number++;

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_ingresar_username_before`,{overwrite: true})
      number++;

      cy.get('input[name="identification"]').type(variables.username)
      

      .wait(2000)
      cy.screenshot(`${test_name}/${number}_ingresar_username_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_ingresar_password_before`,{overwrite: true})
      number++;

      cy.get('input[name="password"]').type(variables.password)
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_ingresar_password_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_signIn_before`,{overwrite: true},{capture: 'runner'})
      number++;
      

      cy.get(properties.buttons.next).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_signIn_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_pages_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons.pages).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_pages_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_newPage_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons["New Page"]).first().click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_newPage_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_write_pageTitle_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('textarea[placeholder="Page title"]').type('Delete Page Test')
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_write_pageTitle_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_write_pageBody_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('div[data-placeholder="Begin writing your page..."]').type('Este test inicia sesión, crea una página nueva y luego elimina la página creada.')
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_write_pageBody_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_publish_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons.publish).click()


      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_publish_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_click_confirmPublish_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons["confirm publish"]).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_confirmPublish_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_backToPages_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get(properties.buttons["back to pages"]).click()
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_click_backToPages_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_click_editPage_before`,{overwrite: true})
      number++;

      cy.get(properties.buttons["edit page"]).first().click()
      

      .wait(2000)
      cy.screenshot(`${test_name}/${number}_click_editPage_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_click_pageSettings_before`,{overwrite: true})
      number++;

      cy.get(properties.buttons["page settings"]).click()
      

      .wait(2000)
      cy.screenshot(`${test_name}/${number}_click_pageSettings_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_click_deletePage_before`,{overwrite: true})
      number++;

      cy.get(properties.buttons["delete page"]).click()
      

      .wait(2000)
      cy.screenshot(`${test_name}/${number}_click_deletePage_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_click_confirmDelete_before`,{overwrite: true})
      number++;

      cy.get(properties.buttons["confirm delete"]).click()
      

      .wait(2000)
      cy.screenshot(`${test_name}/${number}_click_confirmDelete_after`,{overwrite: true})
      number++;
      cy.screenshot(`${test_name}/${number}_assert_before`,{overwrite: true})
      number++;

      cy.get('h3.gh-content-entry-title').should('not.contain', 'Delete Page Test')
      cy.screenshot(`${test_name}/32`,{overwrite: true})
  });
});