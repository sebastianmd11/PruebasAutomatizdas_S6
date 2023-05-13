# MISOPruebasAutomatizadas

# Versiones de las herramientas utilizadas
Este es un repositorio creado para realizar las actividades de pruebas automatizadas

Node Version: 14.21.3
Cypress Version: 12.9.0
Ghost-CLI version: 1.24.0
Kraken-Node Version 1.0.0

Para esta semana se utilizaron dos versiones de Ghost corriendo en diferentes servidores locales para las pruebas de regresión.

Ghost Version 5.40.2 
Ghost Version 4.44.0

Para este punto es necesario tener Ghost instaladas las dos versiones de Ghost mencionadas localmente y ejecutadas en puertos diferentes locales.

**Es necesario no tener ninguna página en Draft para que algunas pruebas corran correctarmente**

# Los 40 escenarios de prueba que incluyen las capturas de pantalla (Versión de Ghost 5.40.2)


## Ejecutar Pruebas en Cypress
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Cypress"
  4) Ejecutar el comando "npm install"
  5) Modificar las credenciales de acceso a ghost 5.40.2 en el archivo **"Pruebas_Cypress/variables.json"**
  6) Modificar el puerto en el que se corre la version de Ghost 5.40.2 en **Pruebas_Cypress/variables.json**
  7) Ejecutar el comando "cypress open"
  8) Configurar el ambiente de pruebas seleccionando la carpeta "Pruebas_Cypress" en el repositorio local
  9) Seleccionar la prueba a correr en la carpeta de Specs
  10) Las *capturas de pantalla* la generadas pueden ser revisadas en la ruta **Pruebas_Cypress/cypress/screenshots**

## Ejecutar Pruebas en Kraken
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Kraken"
  4) Ejecutar el comando "npm install"
  5) Abrir el proyecto en un editor como VS Code
  6) Modificar las credenciales de acceso a ghost en el archivo **"Pruebas_Kraken/features/web/step_definitions/variables.json"**
  7) Mover la prueba o las pruebas a ejecutar desde el folder **Pruebas_Kraken/feature/web/Feature_Storage** al folder **Pruebas_Kraken/feature**
  8) Ejecutar el comando "npx kraken-node run"
  9) Las capturas de pantalla generadas pueden ser revisadas en la ruta **Pruebas_Kraken/reports**
  
# Los 10 escnearios de prueba modificados para la versión de Ghost 4.44.0. 
Para las pruebas de regresión se modificaron los scripts de la herramienta Cypress. Esta herramienta se seleccionó por su flexibilidad de ejecución y rapidez.
## Ejecutar Pruebas en Cypress
  1) Clonar el Repositorio
  2) Abrir una terminal en la carpeta del repositorio
  3) Dirigirse a la carpeta "Pruebas_Cypress"
  4) Ejecutar el comando "npm install"
  7) Modificar las credenciales de acceso a ghost 4.44.0 en el archivo **"Pruebas_Cypress/variables_4.44.json"**
  8) Modificar el puerto en el que se corre la version de Ghost 4.44.0 en **Pruebas_Cypress/variables_4.44.json**
  9) Ejecutar el comando "cypress open"
  10) Configurar el ambiente de pruebas seleccionando la carpeta "Pruebas_Cypress" en el repositorio local
  11) Seleccionar la prueba a correr en la carpeta de Specs y dentro de la sucarpeta Ghost 4.44
  12) Las capturas de pantalla generadas pueden ser revisadas en la ruta **Pruebas_Cypress/cypress/screenshots**
  
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
  3. Escenario: Editar Post.
  4. Escenario: Filtrar Post Publicados.

Gestión de Tags
  1. Escenario: Crear nuevo Tag
  2. Escenario: Editar un Tag
  3. Escenario: Eliminar un Tag
  4. Escenario: Utilizar un Tag en una página 

Gestión de Miembros
  1. Escenario: Crear nuevo miembro
  2. Escenario: Filtrar un Miembro en lista
  3. Escenario: Editar miembro
  4. Escenario: Eliminar Miembro.

Gestión de Páginas.
  1. Escenario: Crear y publicar una nueva página
  2. Escenario: Editar de una página
  3. Escenario: Eliminar una página
  4. Escenario: Despublicar una página

Gestión de Profile 
  1. Escenario: Modificar información de usuario
  2. Escenario: Cambiar la contraseña del usuario
  3. Escenario: Habilitar notificaciones de email
  4. Escenario: Regenerar Staff access token
