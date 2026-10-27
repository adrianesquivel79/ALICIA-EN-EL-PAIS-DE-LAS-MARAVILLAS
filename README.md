# Actividad Práctica: Alicia en el País de las Maravillas
**Asignatura:** Programación Web I  
**Tecnologías:** HTML5, CSS3, JavaScript Nativo.

## Descripción del Proyecto
Aplicación web interactiva que contiene tres ejercicios lógicos inspirados en la obra clásica, validados mediante estructuras de control (`if/else`, `switch`, `for`), manipulación del DOM nativa y eventos de formulario sin recargar la página.

---

## 📋 Casos de Prueba

### Ejercicio 1: La poción mágica de Alicia
| Caso | Entrada (Altura, Poción) | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- | :--- |
| **1 (Correcto)** | Altura: 100 cm, Poción: 50 ml | Altura calculada: 112.5 cm. Mensaje: Puede pasar. | Correcto |
| **2 (Límite)** | Altura: 100 cm, Poción: 0 ml | Altura calculada: 100 cm. Mensaje: Puede pasar. | Correcto |
| **3 (Correcto)** | Altura: 100 cm, Poción: 300 ml | Altura calculada: 175 cm. Mensaje: No puede pasar. | Correcto |
| **4 (Incorrecto)**| Altura: -10 cm, Poción: 50 ml | Mensaje de error de validación. | Correcto |
| **5 (Incorrecto)**| Altura: 100 cm, Poción: 600 ml | Mensaje de error por exceder rango de poción. | Correcto |

### Ejercicio 2: La merienda del Sombrerero Loco
| Caso | Entrada (Nombre, Bebida, Tazas) | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- | :--- |
| **1 (Correcto)** | Carlos, Té Loco (Bs. 10), 2 tazas | Subtotal: 20, Descuento: 0, Total: Bs. 20 | Correcto |
| **2 (Correcto)** | Ana, Infusión (Bs. 15), 6 tazas | Subtotal: 90, Descuento: 9 (10%), Total: Bs. 81 | Correcto |
| **3 (Límite)** | Luis, Café (Bs. 12), 5 tazas | Subtotal: 60, Descuento: 6 (10%), Total: Bs. 54 | Correcto |
| **4 (Incorrecto)**| [Vacío], Té, 3 tazas | Mensaje de error solicitando nombre. | Correcto |
| **5 (Incorrecto)**| Pedro, Chocolate, 25 tazas | Mensaje de error por superar el límite (Máx 20). | Correcto |

### Ejercicio 3: El desafío de la Reina de Corazones
| Caso | Entrada (Cantidad de cartas) | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- | :--- |
| **1 (Correcto)** | 4 cartas | Secuencia [1,2,3,4], Pares: 2 (Suma 6), Impares: 2 (Suma 4), Mayor: Pares. | Correcto |
| **2 (Límite)** | 1 carta | Secuencia [1], Pares: 0 (Suma 0), Impares: 1 (Suma 1), Mayor: Impares. | Correcto |
| **3 (Correcto)** | 5 cartas | Secuencia [1,2,3,4,5], Pares: 2 (Suma 6), Impares: 3 (Suma 9), Mayor: Impares. | Correcto |
| **4 (Incorrecto)**| 0 cartas | Mensaje de error por valor menor al rango. | Correcto |
| **5 (Incorrecto)**| 150 cartas | Mensaje de error por superar el límite máximo (100). | Correcto |