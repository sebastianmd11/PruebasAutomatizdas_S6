Feature: Gestión Post

@user1 @web
Scenario: Hacer Login, ingresar al perfil de usuario, modificar el perfil del usuario, guardar
  Given I navigate to my page "/ghost"
  And I wait for 5 seconds
  When I put identification "usuario_ghost"
  And I put password "usuario_ghost"
  And I click button "sign-in"
  And I wait for 5 seconds  
  And I click button "user"
  And I wait for 3 seconds
  And I click button "profile"
  And I wait for 3 seconds
  And I click button "regenerate-token"
  And I click button "confirm-regenerate"