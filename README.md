## README — Cypress QA Automation (XAcademy) 🚀🧪

### Descripción
Repositorio para almacenar ejercicios, pruebas y recursos de QA Automation usando Cypress, creado para el curso XAcademy. Incluye ejemplos prácticos, buenas prácticas y plantillas para acelerar el aprendizaje. 🎯

### Estructura sugerida 📁
- /cypress
  - /fixtures 🗂️
  - /integration (o /e2e) 🧩
  - /support 🛠️
  - /plugins 🔌
- /tests (ejemplos adicionales) 🧪
- /reports 📊
- /videos 🎥
- package.json 📦
- cypress.config.js ⚙️
- README.md 📝

### Requisitos ✅
- Node.js >= 16 🟢
- npm o yarn 📦
- Cypress (configurado en package.json) 🧩

### Instalación ⚡
1. Clonar el repositorio:
   ```
   git clone <repo-url>
   ```
2. Instalar dependencias:
   ```
   npm install
   ```
   o
   ```
   yarn
   ```

### Scripts útiles (package.json) ▶️
- Ejecutar Cypress en modo interactivo:
  ```
  npm run cypress:open
  ```
- Ejecutar pruebas en modo headless:
  ```
  npm run cypress:run
  ```
- Generar reportes (si usas reporter como mochawesome):
  ```
  npm run test:report
  ```

### Configuración básica (cypress.config.js) 🛠️
- Establecer baseUrl del entorno de pruebas.
- Definir timeouts y retries.
- Configurar reporter (opcional).

Ejemplo mínimo:
```js
module.exports = {
  e2e: {
    baseUrl: 'https://tu-entorno-de-pruebas.com',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // plugins
    },
  },
}
```

### Buenas prácticas ✅🧭
- Mantener tests independientes y deterministas. 🔁
- Usar selectors estables (data-* attributes). 🎯
- Separar lógica de comandos en /support/commands.js. 🧩
- Reutilizar fixtures para datos de prueba. 📂
- Añadir retries sólo cuando sea necesario. ⚠️
- Comentar casos complejos y documentar flujos end-to-end. 📝

### Plantillas útiles 🧩

- Test de login:
```js
describe('Login', () => {
  it('debe iniciar sesión con credenciales válidas', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type('user@example.com')
    cy.get('[data-cy=password]').type('Password123!')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})
```
- Comando custom (cypress/support/commands.js):
```js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-cy=email]').type(email)
  cy.get('[data-cy=password]').type(password)
  cy.get('[data-cy=submit]').click()
})
```

### Integración CI (ejemplo rápido) 🔁
- Ejecutar en GitHub Actions, GitLab CI o similar:
  - Instalar dependencias
  - Ejecutar `npx cypress run`
  - Subir artifacts (screenshots/videos/reports) 📎

### Reportes y artefactos 📸
- Guardar screenshots en /cypress/screenshots 🖼️
- Guardar videos en /cypress/videos 🎬
- Usar mochawesome u otro reporter para HTML/PDF de resultados 🧾

### Recursos y referencias (XAcademy) 📚
- Incluir carpeta /docs con apuntes del curso y enlaces a módulos de XAcademy. 📘
- Mantener una lista de checkpoints aprendidos (p. ej. comandos, fixtures, plugins, CI). ✔️

### Checklist antes de un PR ✅🔍
- [ ] Tests pasan localmente ✅
- [ ] No commits con credenciales 🔒
- [ ] Añadidos o actualizados tests relevantes 🧪
- [ ] Documentación actualizada (README / docs) 📝

### Licencia 📜
Especificar la licencia del repo, p. ej. MIT.

---

¿Quieres que lo deje con más emoticons por sección o que lo traduzca al inglés?
