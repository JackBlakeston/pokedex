# POKEMIN

## Notas para los revisadores

### Estructura del proyecto

Casi por naturaleza, según avanzaba, el proyecto me ha pedido que use una estructura de atomic design. Sin embargo, quería mantener una separación entre componentes ad-hoc y componentes genéricos.
El resultado es un modelo híbrido, donde los componentes genéricos que pueden usarse en cualquier parte de la app no siguen una estructura atómica, pero los que sirven para una cosa en concreto sí usan esa estructura.

La decisión es discutible, se podría argumentar que es mejor mover los componentes genéricos a la estructura atómica. Aún así, a mí me gusta esta estructura para este proyecto y me parece que tener esos componentes separados aporta orden en este proyecto concretamente, ya que la mayoría de componentes son adhoc y separar los genéricos nos permite localizar rápidamente qué partes del proyecto son reutilizables.

### Testing
