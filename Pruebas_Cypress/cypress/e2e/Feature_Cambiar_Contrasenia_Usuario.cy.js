describe('Modificar Perfil de Usuario', () => {
    let variables;
    
    before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
    });
     
      it('Como usuario administrador inicio sesion en Ghost, ingreso a mi perfil y modifico mi contraseña', () => {
        cy.visit(variables.UrlBase + '/#/signin');
        cy.wait(2000);
        cy.get('#identification').type(variables.username);
        cy.wait(2000);
        cy.get('#password').type(variables.password);
        cy.wait(2000);
        cy.get('[data-test-button="sign-in"]').click();
        cy.wait(2000);
        cy.get('[class="gh-user-avatar relative"]').click();
        cy.wait(2000);
        cy.get('[data-test-nav="user-profile"]').click();
        cy.wait(2000);
        cy.get('#user-password-old').clear().type('Test123456');
        cy.wait(2000);
        cy.get('#user-password-new').clear().type(variables.password);
        cy.wait(2000);
        cy.get('#user-new-password-verification').clear().type(variables.password);
        cy.wait(2000);
        cy.get('[data-test-save-pw-button]').click();
        cy.wait(2000);
        });
    });
    