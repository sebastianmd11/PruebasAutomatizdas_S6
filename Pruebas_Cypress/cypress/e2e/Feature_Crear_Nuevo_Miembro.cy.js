//Importar el archivo JSON como variable
const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');

describe('Crear un nuevo miembro para ghost', () => {
  it('Iniciar sesión y crear una nueva miembro', () => {
    cy.visit(variables.UrlBase)
      .wait(1000)
      .get('#identification').type(variables.username)
      .wait(1000)
      .get('#password').type(variables.password)
      .get(properties.buttons.next).click()
      .wait(1000)
      .get(properties.buttons.members).click()
      .wait(1000)
      .get(properties.buttons['new member']).click()
      .wait(2000)
      .get(properties.inputs.name).type('Sebastian')
      .wait(2000)
      .get(properties.inputs.email).type('Sebastian@gmail.com')
      .wait(1000)
      .get(properties.inputs.note).type('Esta es una nota para el nuevo miembro sebastian')
      .wait(1000)
      .get(properties.buttons['save member']).click()
      .wait(1000)
      .get(properties.buttons.members).click()
      .wait(1000)
      .get('h3.gh-members-list-name').should('contain', 'Sebastian')
      .should('be.visible');
  });
});
