describe('Gestión Post', () => {
  let properties;
  let variables;
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let numeroPantalla=0;
  const test_name = 'PostCreate';    

  before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
      cy.readFile('post_properties.json').then((content_post) => {
        properties = content_post;
      });    
  });

  it('Hacer Login, Crear un post, publicarlo y consultar la publicación', () => {

      cy.visit(variables.UrlBase);
      cy.wait(5000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-visit`,{overwrite: true},{capture: 'runner'});

      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-sign-in`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-posts`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['posts']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-posts`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-new-post`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['new-post']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-new-post`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-post-title-input`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements['post-title-input']).type('Test Post');
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-post-title-input`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      cy.get(properties.elements['post-title-input']).type('{enter}',{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-publish`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['publish']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-publish`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-continue`,{overwrite: true},{capture: 'runner'});      
      cy.get(properties.buttons['continue']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-continue`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-before-confirm-publish`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.buttons['confirm-publish']).click();
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-confirm-publish`,{overwrite: true},{capture: 'runner'});

      cy.wait(3000);
      numeroPantalla++;
      cy.screenshot(`${test_name}/${numeroPantalla}-after-validacion-existencia-post`,{overwrite: true},{capture: 'runner'});
      cy.get(properties.elements['post-title']).contains('Test Post').should('exist');
  });    
});
