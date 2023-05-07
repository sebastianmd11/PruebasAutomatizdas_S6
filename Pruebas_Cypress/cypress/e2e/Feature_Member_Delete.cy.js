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
  
      it('Hacer Login, crear un miembro, eliminar un miembro y validar que el miembro ha sido eliminado', () => {
        cy.visit(variables.UrlBase);
        cy.wait(5000);
        cy.get('#identification').type(variables.username);
        cy.get('#password').type(variables.password);
        cy.get(properties.buttons['sign-in']).click();
        cy.wait(4000);


        cy.get(properties.buttons.miembros).click();
        cy.wait(3000);
        cy.get(properties.buttons["miembros-nuevo"]).click();
        cy.wait(3000);
        cy.get(properties.elements["miembro-nombre"]).type('Ana Maria');
        cy.get(properties.elements["miembro-correo"]).type('anamaria@correo.com');
        cy.get(properties.buttons["miembro-guardar"]).click();
        
        cy.wait(4000);
        cy.get(properties.buttons.miembros).click();
        cy.wait(4000);
        cy.get(properties.buttons["miembro-primero"]).filter((_, element) => {
          return Cypress.$(element).attr('alt') === 'Ana Maria';
        }).click();
        cy.wait(4000);
        cy.get(properties.buttons["miembro-acciones"]).click();
        cy.wait(2000);
        cy.get(properties.buttons["miembro-eliminar"]).click();
        cy.wait(3000);
        cy.get(properties.buttons["miembro-eliminar-confirmacion"]).click();
        cy.wait(4000);
        cy.get(properties.buttons["miembro-primero"]).first().click();
        cy.wait(4000);
    
        cy.get(properties.elements["miembro-titulo-nombre"]).should('not.contain', 'Ana Maria');
      });
  });