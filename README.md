# POKEMIN

La pokedex minimalista

[Pruébalo aquí!](https://beetbox.netlify.app/)

### Tecnologías

- React, configurado con Create React App
- Typescript
- Storybook
- Cypress

### Estructura del proyecto

Componentes divididos en genéricos y adhoc. Los componentes adhoc están a su vez divididos con una estructura de atomic design. Esto es debatible pero a mí el proyecto me estaba pidiendo a gritos que le pusiera esa estructura. Otras opciones hubieran sido nestear componentes, carpeta plana, o solo una separación entre adhoc y genérico.

## Puntos fuertes

- Carrusel infinito con lazy loading, creado para este proyecto
- Storybook de todos los componentes, con bastantes opciones de controles
- Tests unitarios de casi todos los componentes
- Test e2e
- Construida con Component Driven Design, empezando desde los componentes más pequeños y aprovechando storybook
- Tipados fuertes y bien estructurados
- Estructura de proyecto sólida e intuitiva con nombres claros
- Lógica y estilos bastante separados en el proyecto
- No se ha utilizado ninguna librería de componentes o estilos
- Colores dinámicos en todos los pokemon según su color promedio
- Las tarjetas son relativamente flexibles, aunque la app no es realmente responsiva

## Puntos débiles

- Bastantes conflictos y dificultades entre TS - storybook y TS - cypress
- Webpack de repente dejó de funcionar con importes globales a la hora de montar storybook. Hubo que cambiar los importes globales por locales en toda la app, solo para que storybook funcionara
- Los colores originalmente se calculaban en el momento con la librería Fast Average Color. Al estudiar la performance de la app, vi que era el mayor cuello de botella a la hora de cargar tarjetas de pokemon, así que hardcodeé los colores en un objeto
- Hay algunos colores de pokemon que dan problemas de contraste. Hay demasiados pokemon como para gestionar esto bien en esta prueba
- Puede haber pequeños bugs visuales en el carrusel si se hace mucho zoom, o en pantallas pequeñas
- Al hacer las tarjetas flexibles, el css ha quedado un poco menos limpio de lo que estaba originalmente

## Extensiones

Estas son las cosas que haría si tuviera un poco más de tiempo:

- Buscar por ID. Pondría un text input entre los dos botones y permitiría al usuario buscar por ID de pokemon. Esto llevaría al usuario a la página del carrusel donde está ese pokemon
- Controles adicionales en storybook. Quería que todo lo que hay en storybook tuviera controles, aunque el propio componente no los tuviera. A la hora de intentarlo, me faltaba un tipado que no he podido encontrar por ninguna parte. Decidí no perder más tiempo con esto
- Mejorar responsividad y pulir bugs visuales del carrusel en casos límite

## Cosas que cambiaría

- Create React App limita demasiado la config del proyecto y es una caja negra. Poder tocar la config de webpack hubiera ayudado a arreglar problemas de config y arreglar el bug de webpack con storybook
- Los tests se hicieron al final con la idea de priorizar tener un producto entregable primero. Este orden no es el ideal
- Como consecuencia, no descubrí hasta el final que cypress no se lleva muy bien con módulos de scss. Me hubiera planteado gestionar los estilos de otra forma si lo hubiera sabido antes

## Cosas que he hecho por primera vez y me han encantado

- Storybook es lo mejor
- Cypress también es lo mejor
- Component Driven Design es una metodología muy cómoda y efectiva
