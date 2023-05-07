# MISOPruebasAutomatizadas
Este es un repositorio creado para realizar las actividades de pruebas automatizadas

Para este punto es necesario tener Ghost instalado localmente y ejecutado en algun puerto del servidor local.

## Ejecutar Pruebas en Cypress
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Cypress"
  4) Ejecutar el comando "npm install"
  5) Modificar las credenciales de acceso a ghost en el archivo **"variables.json"**
  6) Ejecutar el comando "cypress open"
  7) Configurar el ambiente de pruebas seleccionando la carpeta "Pruebas_Cypress" en el repositorio local
  8) Seleccionar la prueba a correr en la carpeta de Specs

## Ejecutar Pruebas en Kraken
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Kraken"
  4) Ejecutar el comando "npm install"
  5) Abrir el proyecto en un editor como VS Code
  6) Modificar las credenciales de acceso a ghost en el archivo **"variables.json"**
  7) Mover la prueba o las pruebas a ejecutar desde el folder **Pruebas_Kraken/feature/web/Feature_Storage** al folder **Pruebas_Kraken/feature**
  8) Ejecutar el comando "npx kraken-node run"
  
## Comparacion de Herramientas E2E
Las herramientas seleccionadas fueron Kraken y Cypress
En el siguiente en enlace podría encontrar la comparación de las herramientas: 
https://github.com/DSalamanca94/MISOPruebasAutomatizadas/wiki

## Lista de funcionalidades a probar
- Gestión de Post
- Gestión de Tags
- Gestión de Miembros
- Gestión de Páginas.
- Gestión de Profile

## Lista de los 20 Escenarios de pruebas

Gestión de Post
  1. Escenario: Creación y Publicación de Post.
  2. Escenario: Eliminar Post.
    a. Iniciar sesión en Ghost.
    b. Crear un Post 
    c. Borrar  Post
    d. Validar que el Post fue borrado.
  3. Escenario: Editar Post.
    a. Iniciar sesión en Ghost.
    b. Crear un Post 
    c. Editar Post
    d. Validar que el Post fue editado exitosamente
  4. Escenario: Filtrar Post Publicados.
    a. Iniciar sesión en Ghost.
    b. Crear un Post 
    c. Publicar el Post.
    d. Filtrar Post Publicados
    e. Validar que el nuevo Post hace parte de los elementos publicados

2. Gestión de Tags
  1. Escenario: Crear nuevo Tag
    a. Iniciar Sesión en Ghost
    b. Crear un Tag
    c. Validar que el tad creado está en la lista de Tags
  2. Escenario: Editar un Tag
    a. Iniciar Sesión en Ghost
    b. Crear un Tag
    c. Editar el Tag
    d. Validar que el tag fue editado.
  3. Escenario: Eliminar un Tag
    a. Iniciar Sesión en Ghost
    b. Crear un Tag
    c. Borrar el Tag
    d. Validar que el tag fue borrado.
  4. Escenario: Utilizar un Tag en una página 
    a. Iniciar Sesión en Ghost
    b. Crear un Tag
    c. Seleccionar una página
    d. Agregar el tag a la página

3. Gestión de Miembros
  1. Escenario: Crear nuevo miembro
    a. Iniciar sesión en Ghost.
    b. Crear un miembro.
    c. Validar que el nombre del nuevo miembro creado se encuentra en la lista de miembros
  2. Escenario: Filtrar un Miembro en lista
    a. Iniciar sesión en Ghost.
    b. Crear un miembro.
    c. Filtrar el elemento en la lista de miembros
    d. Validar que el elemento se encuentre en la tabla
  3. Escenario: Editar miembro
    a. Iniciar sesión en Ghost.
    b. Crear un miembro.
    c. Seleccionar miembro creado
    d. Modificar la información del miembro
    e. Validar que me editó correctamente el miembro
  4. Escenario: Eliminar Miembro.
    a. Iniciar sesión en Ghost.
    b. Crear un miembro.
    c. Borrar miembro.
    d. Validar que el miembro ya no hace parte del sitio.

4. Gestión de Páginas.
  1. Escenario: Crear y publicar una nueva página
    a. Iniciar sesión
    b. Crear la nueva página
    c. Publicar la nueva página
    d. Verificar que la nueva página existe en la lista de páginas
  2. Escenario: Editar de una página
    a. Iniciar sesión
    b. Crear una nueva página
    c. Publicar la nueva página
    d. Convertir la página publicada nuevamente a draft
    e. Hacer una modificación al título de la página
    f. Publicar página nuevamente
    g. Verificar que la página con el nuevo título se encuentra en la lista de páginas
  3. Escenario: Eliminar una página
    a. Iniciar sesión
    b. Crear una nueva página
    c. Publicar la nueva página
    d. Eliminar la página
    e. Verificar que la página que se eliminó, ya no se encuentra en la lista de páginas

  4. Escenario: Despublicar una página
    a. Iniciar sesión
    b. Crear una nueva página
    c. Publicar la nueva página
    d. Despublicar la página
    e. Verificar que el status de la página se encuentra como “draft”

5. Gestión de Profile 
   1. Escenario: Modificar información de usuario
    a. Iniciar sesión
    b. Seleccionar perfíl de usuario
    c. Modificar la información del usuario
    d. Guardar
  2. Escenario: Cambiar la contraseña del usuario
    a. Iniciar sesión
    b. Seleccionar perfil de usuario
    c. Modificar la contraseña del usuario
    d. Guardar
  3. Escenario: Habilitar notificaciones de email
    a. Iniciar sesión
    b. Seleccionar perfil de usuario
    c. Habilitar las notificaciones de email
    d. Guardar
  4. Escenario: Regenerar Staff access token
    a. Iniciar sesión
    b. Seleccionar perfil de usuario
    c. Regenerar Staff access token
    d. Guardar
