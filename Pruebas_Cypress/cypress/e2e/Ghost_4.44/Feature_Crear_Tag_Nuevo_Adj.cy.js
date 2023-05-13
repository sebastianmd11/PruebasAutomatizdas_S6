const test_name = 'Tag_NewTag/before-'
const FileNum = 1

describe('Crear un Tag nuevo', () => {
  let variables;
  let contador= FileNum;

  before(() => {
    cy.readFile('variables_4.44.json').then((content) => {
      variables = content;
    });
  });

  it('Como usuario administrador inicio sesion en Ghost y creo un elemento Tag', () => {
    cy.viewport(1200, 1500);
    
    cy.visit(variables.UrlBase + '/#/signin')
    cy.get('[name="identification"]').type(variables.username)
    cy.get('[name="password"]').type(variables.password)
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('[type="submit"]').click()
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('[href="#/tags/"]').click()
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('.ember-view.gh-btn.gh-btn-primary').click() 
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('#tag-name').type('Tag Example Test')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('input[placeholder="15171A"]').type('f20707')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('#tag-description').type('Esta es una descripcion de prueba para validar la funcionalidad de crear Tags')
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 
    
    cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.screenshot(`${test_name}${contador}`,{overwrite: true})
    cy.wait(2000);
    contador++; 

    cy.get('[href="#/tags/"]').first().click();
    cy.then(() => {
        const tagName = 'Tag Example Test';
        cy.get('h3.gh-tag-list-name').contains(tagName).should('be.visible');
      });
      cy.visit(variables.UrlBase + '/#/signin');
      cy.screenshot(`${test_name}${contador}`,{overwrite: true})
      cy.wait(2000);
      contador++; 

  });
});