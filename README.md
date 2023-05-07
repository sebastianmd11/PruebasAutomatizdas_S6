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


