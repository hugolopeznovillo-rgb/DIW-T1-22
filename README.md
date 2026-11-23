# DIW-T1-22 · Classic Motor

Base inicial en Angular para el **I Rally & Concentración Histórica Classic Motor**.
Este primer commit prepara la estructura y la navegación; las páginas contienen
textos provisionales y las funcionalidades se desarrollarán en siguientes commits.

- Repositorio: https://github.com/hugolopeznovillo-rgb/DIW-T1-22
- Aplicación en producción: pendiente de despliegue.
- Análisis completo del PDF y requisitos pendientes: [docs/requisitos.md](docs/requisitos.md).

## Puesta en marcha

Requisitos: Node.js 24.15 o superior de la rama 24 y npm 11.
Proyecto generado con Angular CLI 22, componentes standalone, rutas y SCSS,
según la [documentación oficial](https://angular.dev/cli/new) y la
[compatibilidad de versiones](https://angular.dev/reference/versions).

```bash
npm ci
npm start
```

Abrir http://localhost:4200. Para compilar en producción:

```bash
npm run build
```

La salida se genera en `dist/classic-motor/browser/`.

## Estructura

```text
public/
  data/vehiculos.json        # Array vacío, pendiente de datos y consumo
  images/                    # Imágenes futuras
src/
  app/
    pages/
      inicio/
      catalogo/
      itinerario/
      inscripcion/
      guia-estilo/
    shared/layout/
      header/
      footer/
    app.ts                   # Componente raíz
    app.html
    app.scss
    app.config.ts            # provideRouter
    app.routes.ts            # Cinco rutas con carga diferida
  styles/_variables.scss     # Colores, fuentes y espaciados
  styles.scss                # Base global, BEM y media queries
  index.html                 # Idioma español
  main.ts                    # Arranque standalone
docs/requisitos.md           # Análisis de las cuatro páginas del enunciado
```

Cada página separa su componente TypeScript de su plantilla HTML. Los estilos
comunes se comparten desde `styles.scss`; los componentes de cabecera y pie
incluyen sus propios archivos SCSS. Los estilos específicos de cada página se
añadirán cuando se desarrolle su contenido.

Rutas: `/`, `/catalogo`, `/itinerario`, `/inscripcion` y `/guia-estilo`.

## Herramientas de apoyo e inteligencia artificial

Se ha utilizado Codex (OpenAI) para analizar las cuatro páginas del enunciado,
organizar la estructura, configurar las rutas, preparar las vistas iniciales,
los componentes comunes, los estilos base y esta documentación.
Angular CLI ha generado la configuración inicial. Se ha consultado la
documentación oficial de Angular para la creación y compatibilidad del proyecto.

Validación de este commit: compilación de producción mediante `npm run build`
y revisión de la estructura, rutas y archivos incluidos en Git. La comprobación
visual en navegador y la auditoría funcional completa quedan pendientes.

«El alumno debe ser capaz de explicar y modificar en directo cualquier parte de su código; lo que no sepa explicar no se considerará de su autoría».

## Entrega final

Preparar `DIW-T1-22.zip` con el código y la carpeta oculta `.git`, excluyendo
`node_modules`. Completar antes el desarrollo, el despliegue y su enlace en este
README. El calendario exacto se publicará en Classroom.