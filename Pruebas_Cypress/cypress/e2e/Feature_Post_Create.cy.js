describe('Gestión Post', () => {
    let properties;
    let variables;
  
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
      cy.get('#identification').type(variables.username);
      cy.get('#password').type(variables.password);
      cy.get(properties.buttons['sign-in']).click();
      cy.wait(4000);

        cy.get(properties.buttons['posts']).click();
    
        cy.wait(4000);
        cy.get(properties.buttons['new-post']).click();
    
        cy.wait(4000);
        cy.get(properties.elements['post-title-input']).type('Test Post');
    
        cy.wait(4000);
        cy.get(properties.elements['post-title-input']).type('{enter}');
    
        cy.wait(4000);
        cy.get(properties.buttons['publish']).click();
    
        cy.wait(4000);
        cy.get(properties.buttons['continue']).click();
    
        cy.wait(4000);
        cy.get(properties.buttons['confirm-publish']).click();
    
        cy.wait(4000);
        cy.get(properties.elements['post-title']).contains('Test Post').should('exist');;
      });    
  });