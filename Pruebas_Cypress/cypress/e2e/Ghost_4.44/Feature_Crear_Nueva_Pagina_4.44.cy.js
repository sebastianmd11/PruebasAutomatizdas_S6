//Importar el archivo JSON como variable
const properties = require('./properties_sebastian_4.44.json');
const variables =  require('../../../variables_4.44.json');
const test_name = 'Pages_NewPage_4.44'
let number =1;

describe('Crear una nueva página en la aplicación Ghost', () => {
  it('Iniciar sesión y crear una nueva página', () => {
    cy.visit(variables.UrlBase)
    cy.screenshot(`${test_name}/${number}_navegacion_a_ghost`,{overwrite: true},{capture: 'runner'})
    number++;

    cy.wait(2000)
    cy.screenshot(`${test_name}/${number}_ingresar_username_before`,{overwrite: true},{capture: 'runner'})
    number++;

      cy.get('input[name="identification"]').type(variables.username)
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_ingresar_username_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_ingresar_password_before`,{overwrite: true},{capture: 'runner'})
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

      cy.get('textarea[placeholder="Page title"]').type('New Page Test')
      

      cy.wait(2000)
      cy.screenshot(`${test_name}/${number}_write_pageTitle_after`,{overwrite: true},{capture: 'runner'})
      number++;
      cy.screenshot(`${test_name}/${number}_write_pageBody_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('div[data-placeholder="Begin writing your page..."]').type('This is a test for a new page')
      

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
      cy.screenshot(`${test_name}/${number}_assert_before`,{overwrite: true},{capture: 'runner'})
      number++;

      cy.get('a.gh-post-list-title h3')
      .contains('New Page Test')
      .should('be.visible');
      cy.screenshot(`${test_name}/${number}_assert_after`,{overwrite: true},{capture: 'runner'})
  });
});
