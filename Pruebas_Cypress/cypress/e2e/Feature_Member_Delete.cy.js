describe('Gestión Post', () => {
    let properties;
    let variables;
    const test_name = 'MemberDelete';
    let numeroPantalla=0;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  
    before(() => {
        cy.readFile('variables.json').then((content) => {
          variables = content;
        });
        cy.readFile('post_properties.json').then((content_post) => {
          properties = content_post;
        });
      });
  
      it('Hacer Login, crear un miembro, eliminar un miembro y validar que el miembro ha sido eliminado', () => {

        //cy.viewport(1440, 900);
        cy.visit(variables.UrlBase);
        cy.wait(5000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-visit`,{overwrite: true},{capture: 'runner'});

        cy.get('#identification').type(variables.username);
        cy.get('#password').type(variables.password);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-sign-in`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons['sign-in']).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-sign-in`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembros`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons.miembros).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembros`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;       
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembros-nuevo`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembros-nuevo"]).click();
        numeroPantalla++;       
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembros-nuevo`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-guardar`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.elements["miembro-nombre"]).type(`${timestamp}Ana Maria`, {force: true});
        cy.get(properties.elements["miembro-correo"]).type(`${timestamp}anamaria@correo.com`, {force: true});
        cy.get(properties.buttons["miembro-guardar"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-guardar`,{overwrite: true},{capture: 'runner'});

        
        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembros`,{overwrite: true},{capture: 'runner'});        
        cy.get(properties.buttons.miembros).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembros`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-primero1`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-primero"]).filter((_, element) => {
          return Cypress.$(element).attr('alt') === `${timestamp}Ana Maria`;
        }).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-primero1`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-acciones`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-acciones"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-acciones`,{overwrite: true},{capture: 'runner'});


        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-eliminar`,{overwrite: true},{capture: 'runner'});        
        cy.get(properties.buttons["miembro-eliminar"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-eliminar`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-eliminar-confirmacion`,{overwrite: true},{capture: 'runner'});
        cy.get(properties.buttons["miembro-eliminar-confirmacion"]).click();
        numeroPantalla++;
        cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-eliminar-confirmacion`,{overwrite: true},{capture: 'runner'});

        cy.wait(3000);
        cy.get('body').then(($body) => {
          // Comprueba si el elemento existe en el DOM.
          if ($body.find(properties.buttons["miembro-primero"]).length > 0) {
            // Si el elemento existe, hace clic en el primero
            numeroPantalla++;
            cy.screenshot(`${test_name}/${numeroPantalla}-before-miembro-primero2`,{overwrite: true},{capture: 'runner'});
            cy.get(properties.buttons["miembro-primero"]).first().click();
            numeroPantalla++;
            cy.screenshot(`${test_name}/${numeroPantalla}-after-miembro-primero2`,{overwrite: true},{capture: 'runner'});            

            cy.wait(3000);    
            numeroPantalla++;
            cy.screenshot(`${test_name}/${numeroPantalla}-after-validacion-no-existencia-miembro`,{overwrite: true},{capture: 'runner'});
            cy.get(properties.elements["miembro-titulo-nombre"]).should('not.contain', `${timestamp}Ana Maria`);

          }else{
              // Si el elemento no existe, lanza una aserción de éxito.
              expect(true).to.equal(true);            
          }
        });


      });
  });