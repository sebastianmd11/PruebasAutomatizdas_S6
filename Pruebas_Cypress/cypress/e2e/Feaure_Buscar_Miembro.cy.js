describe('Buscar un miembro', () => {
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
  
    it('Como usuario administrador inicio sesion en Ghost, creo un elemento Member y lo busco', () => {
      // Inicio de sesion
      cy.visit(variables.UrlBase + '/#/signin')
      .get('#identification')
      .type(variables.username)
      .get('#password')
      .type(variables.password)
      cy.get('[data-test-button="sign-in"]').click();
      cy.wait(5000);
  
      // Crear un nuevo miembro
      cy.get('[data-test-nav="members"]').click();
      cy.wait(5000);
      cy.get('.ember-view.gh-btn.gh-btn-primary').click();
      cy.wait(2000);
      cy.get('#member-name').type('Juan Perez Test User');
      cy.wait(2000);
      cy.get('#member-email').type('juanperez@gmail.com');
      cy.wait(2000);
      cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click();
      cy.wait(5000);
  
      // Buscar un miembro
      cy.get('[data-test-link="members-back"]').click();
      cy.wait(5000);
      cy.get('[data-test-button="members-filter-actions"]').click();
      cy.wait(2000);
      cy.get('[aria-label="Search members"]').type('juanperez@gmail.com');
      cy.wait(5000);
  
      // Verificar si el miembro fue encontrado
      cy.get('.gh-list').then((members) => {
        let memberFound = false;
        members.each((index, member) => {
          if (member.innerText.includes('juanperez@gmail.com')) {
            memberFound = true;
            return false;
          }
        });
        if (!memberFound) {
          throw new Error('Member juanperez@gmail.com was not found in the list of members.');
        }
      });
    });
  });
  