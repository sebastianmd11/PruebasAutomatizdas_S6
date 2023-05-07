Feature: Crear una página nueva, publicarla y despublicarla para dejarla en draft

@user1 @web
Scenario: Como usuario deseo realizar inicio de sesión y poder crear una nueva página en la aplicación
Given I navigate to page "http://localhost:2368/ghost/" 
And I wait for 2 seconds
When I put identification "usuario_ghost"
And I wait for 1 seconds
And I enter password "usuario_ghost"
And I click on button "next"
And I wait for 1 seconds
And I click on button "pages"
And I wait for 1 seconds
And I click on button "New Page"
And I wait for 1 seconds
And I write the New Page´s title "Unpublish Page Test"
And I wait for 1 seconds
And I write the New Page´s body "Este es un test para despublicar una página y dejarla en draft"
And I wait for 1 seconds
And I click on button "publish"
And I wait for 1 seconds
And I click on button "continue to final review"
And I wait for 1 seconds
And I click on button "confirm publish"
And I wait for 1 seconds
And I click on button "back to editor"
And I wait for 1 seconds
And I click on button "back to pages"
And I wait for 1 seconds
And I click on button "edit page"
And I wait for 1 seconds
And I click on button "unpublish page"
And I wait for 1 seconds
And I click on button "confirm unpublish"
And I wait for 1 seconds
And I click on button "back to pages"
And I wait for 1 seconds
Then there should be exactly 1 draft page
And I wait for 1 seconds
And I click on button "edit page"
And I wait for 1 seconds
And I click on button "page settings"
And I wait for 1 seconds
And I click on button "delete page"
And I wait for 1 seconds
And I click on button "confirm delete"
And I wait for 2 seconds



