# **Sprint Review del Sprint 1.**

<p align="center">
    <img src="../images/logoUs.png" alt="Logo Universidad Sevilla" style="width: 50%; margin: auto;">
</p>

---

## Índice

1. [Introducción](#1-introducción)
2. [Objetivos del Sprint Review](#2-objetivos-del-sprint-review)
3. [Detalles del Sprint Review](#3-detalles-del-sprint-review)
4. [Conclusión](#4-conclusion)
   


---

## **1. Introducción**
El siguiente documento describe una reunión regular en el marco de la metodología Scrum, que se lleva a cabo al final de cada Sprint. Durante esta reunión, el Scrum Master junto con el equipo de desarrollo revisan el trabajo realizado  y obtienen retroalimentación sobre el incremento del proyecto.


---

## **2. Objetivos del Sprint Review**
El Scrum Master crea una reunión con los miembros del grupo donde se revisa el trabajo completo durante el Sprint y se aportan mejoras para el proyecto.
Para ello el equipo presenta el incremento del proyecto resultante y realiza una demostración de las nuevas características implementadas, haciendo hincapié en las mejoras y los errores corregidos.
Se revisan los objetivos establecidos al principio del Sprint y se discute si se a cumplido o no . Se analiza cualquier desviación y los errores aprendidos.
Si hay elementos del Product Backlog que no se completaron durante el Sprint, se discuten las razones para mejorar en el nuevo Sprint.
Finalmente, si es necesario, se llegan a acuerdos sobre acciones especificas a tomar antes del próximo Sprint.



---

## **3. Detalles del Sprint Review**

Con el Product Backlog por delante se ha ido revisando de forma ordenada cada una de las tareas. 

En primer lugar, Rafa como desarrollador encargado de realizar la funcionalidad de crear reserva para las habitaciones de hotel para mascotas, ha mostrado como se puede crear una reserva perfectamente atendiendo a las restriciones propuesta en la historia de usuario. A continuación, Jorge el otro desarrollador encargado de la funcionalidad de crear adopciones, nos ha hecho una demostración de como crear una solicitud de adopción entre otros requerimientos que pedia esta issue.
Despues de que comprobar que las tareas relacionadas con el desarrollo de codigo funcionan, Álvaro se ha encargado de mostrar como ha creado los test unitarios para la funcionalidad de booking y como estos han resultado con éxito. Estos tres apartados corresponden a la Tare A2.2 del Product Backlog.
Este mismo ha sido el encargado de realizar el despliegue tal y como nos pedian en la tarea A2.3.

Ahora es el turno de los desarrolladores encargados de las tareas de análisis y documentación, que son las tareas con mayor peso en nuestro Product Backlog.
Aunque hay que mencionar que en primer lugar la tarea A2.4 se dividio entre dos miembros del equipo para que cada uno se encarga del ánalisis de un sprint s1 y s2. Pero al final nos dimos cuenta que era más conveniente que la misma persona, que ya había estudiado y comprendido el uso de la herramienta que le ayudaría a sacar los datos para su futuro análisis se encargará de la tarea al completo, ya que esto nos ayudaría ahorrar tiempo. 
En este caso, Rúben se ha encargado de mostrar todas las gráficas y explicar los valores obtenidos de la misma, es un documento que estaba incompleto debido a que como faltaban tareas por realizar las gráficas había que volver actualizarla y últimar algunos detalles.

Otros de los documentos con bastante peso en la entrega es el referido en la tarea A2.5, este como hemos mencionado anteriormente también fue dividido pero luego se encargo María José de realizarlo al completo. Esta desarrolladora se encargo de realizar la configuración del sonarQube y mostró el documento de análisis del código y métricas asociadas, donde en el podíamos ver los dashboard resultante del analisis del código del backend.

Como en el product backlog no se especificaba de que dashboard había que análizar las métricas solo se metieron las del backend, lo que faltaba por meter tambien del frontend. Además había varias aspectos que había que incorporar en el documento:
- una definición de cada unas de las métricas junto con el significado del valor obtenido en el código.
- una clasificación de los diferentes code smells.
Además,se mostró en la review el análisis de los bugs y los code smells donde se observaba descripción, causas, evaluación y solución tal y como se pedia en la issue. Esta tarea ha traido muchos problemas y se ha necesitado más horas de las previstas.

Por otro lado, la tarea A2.6 ha sido dividida en cuatro partes. Primero se realizó el spring planning donde todos los miembros del grupo se encargaron de estudiar, dividir, estimar, introducir en zenhub y dejar documentada todas las tareas. Además todos los martes Jorge se encargaba de realizar la daily stand-ups y dejaba documentada todos los progresos y dificultades que habiamos tenido durante la semana. Estos documentos estan realizados al completo, ya que se ha ido realizando los dias de las reuniones. El sprint review será documentado por María josé quien se encargó de tomar notas mientras teníamos esta reunion y finalmente, Rubén se encargará de redactar el sprint rretrospective donde dejará en detalle como ha ido el Sprint 2.


Finalmente, el equipo ha decidido que también hariamos las tareas extras por lo que E2.1 ha sido dividida en dos partes, por un lado Rubén se encargará de realizar una extensión de su documento A2.4 y María José de A2.5 donde realizarán una comparativa de los datos resultante de los análisis del proyecto. Estas dos tareas no se enseñaron en la review porque como he mencionado antes, los dos documentos aún no había sido completados por lo que realizar esta comparativa sería lo último.
De igual forma, Álvaro se encargará en la tarea E2.2 de realizar las módificaciones necesarias en el código para solucionar los code smells que habían salido y volver análizar con el sonar el código para comprobar que los malos errores se han reducido. Aunque las modificaciones ya estaban explicadas de como se iban a realizar, todavía estaba pendiente por realizarlo en el código.
La última tarea E2.3 se refería ha automatizar los análisis de código en el sonar cada vez que se subiera algo nuevo a git, para ello Jorge realizó la configuración con la herramienta GitHub Actions, donde se podía ver como se hacian los análisis solos.
 

Aquí un resumen de las tareas completadas :


- Tarea A2.1
    - Descripción: Responder individualmente a preguntas relacionadas con los objetivos de aprendizaje del sprint.
    - Estimación: 1 P.H.
    - Tiempo real: 1 P.H.
    - Miembro Asignado: Todos (Individualmente).

- Tarea A2.2 (15%)
    - Tarea A2.2 A
    - Descripción: Agregue la funcionalidad de Booking.
    - Estimación: 48 P.H.
    - Tiempo real: 49 P.H.
    - Miembro Asignado: Rafa Molina.

- Tarea A2.2 B
    - Descripción: Cree una funcionalidad de Adoptions. 
    - Estimación: 48 P.H.
    - Tiempo real: 49 P.H.
    - Miembro Asignado: Jorge Muñoz.

- Tarea A2.2 C
    - Descripción: Desarrolle un conjunto integral de pruebas unitarias.
    - Estimación: 30 P.H.
    - Tiempo real: 27 P.H
    - Miembro Asignado: Álvaro Chico.

- Tarea A2.3 (10%)
    - Tarea A2.3 A
    - Descripción:  preparar una versión del proyecto Petclinic en la rama release 2.0.0
    - Estimación: 3 P.H.
    - Tiempo real: 3 P.H
    - Miembro Asignado: Álvaro Chico.

- Tarea A2.3 B
    - Descripción: Una vez realizado el lanzamiento para S2 a nivel de código fuente y crear un lanzamiento en el       repositorio de GitHub.
    - Estimación: 1 P.H.
    - Tiempo real: 1 P.H
    - Miembro Asignado: Álvaro Chico.

- Tarea A2.4 (25%)
- Tarea A2.4 A
    - Descripción: un informe técnico titulado “Métricas de Proceso Ágil y Recursos” de sprint 1. 
    - Estimación: 12 P.H.
    - Tiempo real: 14 P.H
    - Miembro Asignado: Rubén Pérez.

- Tarea A2.4 B
    - Descripción: un informe técnico titulado “Métricas de Proceso Ágil y Recursos” de sprint 1.
    - Estimación: 15 P.H.
    - Tiempo real: 16 P.H
    - Miembro Asignado: Rubén Pérez.

- Tarea A2.5 (25%)
- Tarea A2.5 A
    - Descripción: crear  titulado “Análisis del Código Fuente y Métricas Asociadas” del sprint 1.
    - Estimación: 12 P.H.
    - Tiempo real: 16 P.H
    - Miembro Asignado: María José Ruíz.

- Tarea A2.5 B
    - Descripción: crear  titulado “Análisis del Código Fuente y Métricas Asociadas” del sprint 2.
    - Estimación: 12 P.H.
    - Tiempo real: 14 P.H
    - Miembro Asignado: María José Ruíz.


- Tarea A2.6 (25%)
- Tarea A2.6 A
    - Descripción: Sprint Planning. 
    - Estimación: 11 P.H.
    - Tiempo real: 11 P.H
    - Miembro Asignado: Todos (Grupal).

- Tarea A2.6 B
    - Descripción: Daily Standups. 
    - Estimación: 4 P.H.
    - Tiempo real: 4 P.H
    - Miembro Asignado: Jorge Muñoz.

- Tarea A2.6 C
    - Descripción: Review. 
    - Estimación: 5 P.H.
    - Tiempo real: 5 P.H
    - Miembro Asignado: María José Ruíz.

- Tarea A2.6 D
    - Descripción: Retrospective. 
    - Estimación: 5 P.H.
    - Tiempo real: 5 P.H
    - Miembro Asignado: Rubén Pérez.
    

- Extra E2.1 (0.1 Puntos)
- Extra E2.1 A
    - Descripción: ampliar los informes técnicos creados como resultado de A2.4 para analizar también las             diferencias entre los resultados de las métricas y el análisis en S1 y S2.
    - Estimación: 6 P.H.
    - Tiempo real: 6 P.H
    - Miembro Asignado: Rubén Pérez.

- Extra E2.1 B
     - Descripción: ampliar los informes técnicos creados como resultado de A2.5 para analizar también las             diferencias entre los resultados de las métricas y el análisis en S1 y S2. 
    - Estimación: 6 P.H.
    - Tiempo real: 6 P.H
    - Miembro Asignado: María José Ruíz.

- Tarea E2.2 (0.1 Puntos)
    - Descripción: amplía el informe técnico creado como resultado de A2.5, incluyendo qué modificaciones             debesintroducir en tu código fuente para eliminar los posibles errores y malos olores y mejorar la                complejidad ciclomática en aquellas clases con un valor mayor. Implemente estas modificaciones y realice          análisis adicionales con SonarQube.
    - Estimación: 9 P.H.
    - Tiempo real: 9 P.H
    - Miembro Asignado: Álvaro Chico.

- Tarea E2.3 (0.1 Puntos)
    - Descripción: configura tu proyecto para usar GitHub Actions.
    - Estimación: 18 P.H.
    - Tiempo real: 15 P.H
    - Miembro Asignado: Jorge Muñoz.


---

## **4. Conclusión**
En conclusión, aunque nos quedaban pequeñas cositas en las tareas de documentación y las extras, hemos tenido tiempo sufiente para realizarla. Por lo que todas las tareas recogidas en el Product Backlog se han realizado correctamente. A pesar de que hemos tenido algún contratiempo que nos hecho invertir más horas de las estimadas, hemos podido llegar a tiempo a la entrega del Sprint 2 con todas las tareas realizadas.
