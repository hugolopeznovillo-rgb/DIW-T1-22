# Análisis del enunciado completo

Fuente: «Proyecto evaluación Navidad 2627 - Enunciado.pdf», 4 páginas.

## Página 1: cliente y secciones

Classic Motor Club solicita el frontend del «I Rally & Concentración Histórica
Classic Motor». El estilo debe ser elegante, nostálgico, técnico y atemporal,
con tonos cuero, cromados, verde carreras o burdeos.

| Sección | Contenido exigido para la entrega final |
| --- | --- |
| Inicio | Banner del evento, vehículos destacados y mapa de localización/punto de encuentro. |
| Catálogo | Listado filtrable, tarjetas y ficha técnica con año, categoría, potencia e historial. |
| Itinerario | Cronograma de la jornada y mapa de etapas. |
| Inscripción | Formulario funcional de participantes y vehículos con validación. |
| `/guia-estilo` | Tokens en vivo, paleta, jerarquía tipográfica, botones en todos sus estados y componentes base; acceso desde el menú. |

## Página 2: auditoría técnica obligatoria

La evaluación utiliza una lista binaria CUMPLE / NO CUMPLE.

- Angular exclusivamente con componentes standalone.
- Enrutado nativo con `provideRouter` para las cinco secciones.
- Catálogo filtrado en tiempo real con `signal` y `computed`.
- Consumo de un archivo JSON local.
- Maquetación propia con Flexbox y CSS Grid.
- SCSS modular y tokens de colores, fuentes y espaciados en `_variables.scss`.
- BEM puro en HTML/SCSS y máximo tres niveles de anidamiento SCSS.
- Bootstrap o Tailwind son opcionales y solo se admiten personalizados con
  SCSS/Sass. En este proyecto no se utilizan.
- Mobile-first y media queries explícitas en 375, 768 y 1440 px.
- HTML5 semántico: `header`, `nav`, `main`, `section`, `article` y `footer`
  donde corresponda al contenido.
- `lang` correcto, `alt` descriptivo en todas las imágenes y foco visible
  de teclado con `:focus-visible`.
- Git con commits frecuentes y mensajes descriptivos.

## Página 3: despliegue, entrega y plazo

- Publicar la aplicación en un servidor público de acceso libre, por ejemplo
  Vercel, Netlify o GitHub Pages.
- Entrega única en Google Classroom mediante `DIW-T1-22.zip` (código de alumno 22).
- Incluir el código fuente y la carpeta oculta `.git` intacta.
- Excluir obligatoriamente `node_modules` del ZIP.
- README en la raíz con enlace al repositorio, enlace al despliegue, declaración
  de herramientas e IA (áreas asistidas y validaciones) y la cláusula literal:

  «El alumno debe ser capaz de explicar y modificar en directo cualquier parte de su código; lo que no sepa explicar no se considerará de su autoría».

- Classroom cierra dos días antes del inicio de las defensas. El enunciado no
  fija una fecha exacta: se anunciará junto al calendario en Classroom.
- No se aceptan entregas fuera de plazo.

## Página 4: defensa presencial

La sesión individual dura tres minutos, con un minuto adicional para cambiar
de puesto, en los días previos a las vacaciones de Navidad.

1. Minuto 1: mostrar producción en 375, 768 y 1440 px y visitar `/guia-estilo`.
2. Minuto 2: explicar standalone, Signals, `_variables.scss` y BEM en VS Code.
3. Minuto 3: modificar código en directo en un máximo de 60 segundos.

## Alcance de este primer commit

Se prepara Angular, las cinco rutas con vistas provisionales, cabecera y pie
comunes, tokens SCSS, BEM básico, `lang="es"`, foco visible y puntos de ruptura
iniciales. `public/data/vehiculos.json` es un array vacío reservado para los
datos; todavía no se consume desde Angular.

Quedan pendientes los contenidos y diseño definitivos, imágenes, tarjetas y
fichas, carga de JSON y filtros con Signals, mapas, cronograma, formulario
validado, guía de estilo funcional, uso de Grid cuando haya contenido que
maquetar, comprobación visual responsive/accesible y despliegue. No se declara
cumplida la auditoría completa con esta estructura inicial.
