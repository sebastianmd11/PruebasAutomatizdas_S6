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
  
      it('Hacer Login, Crear un post, eliminar Post y verificar la eliminacion', () => {
  
        cy.visit(variables.UrlBase);
        cy.wait(5000);
        cy.get('#identification').type(variables.username);
        cy.get('#password').type(variables.password);
        cy.get(properties.buttons['sign-in']).click();
        cy.wait(4000);        

        cy.get(properties.buttons.posts).click();
        cy.wait(3000);
        cy.get(properties.buttons["new-post"]).click();
        cy.wait(3000);
        cy.get(properties.elements["post-title-input"]).type('Deleteable Post');
        cy.wait(3000);
        cy.get(properties.elements["post-title-input"]).type('{enter}');
        cy.wait(3000);
        cy.get(properties.buttons["back-to-posts-button"]).click();
        cy.wait(4000);
        cy.get(properties.elements["lista-post-title"]).first().contains('Deleteable Post').click();
        cy.wait(4000);
        cy.get(properties.buttons["settings-menu-toggle"]).click();
        cy.wait(4000);
        cy.get(properties.buttons["delete-post-button"]).click();
        cy.wait(4000);
        cy.get(properties.buttons["confirm-delete-button"]).click();
        cy.wait(4000);
        cy.get(properties.elements["lista-post-title"]).first().click();
        cy.wait(4000);
    
        cy.get(properties.elements["post-title-input"]).contains('Deleteable Post').should('not.exist');
      });
  });