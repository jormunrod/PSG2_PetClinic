# **Planificación del Sprint 2.**

<p align="center">
    <img src="../images/logoUs.png" alt="Logo Universidad Sevilla" style="width: 50%; margin: auto;">
</p>

---

## Índice

1. [Introducción](#1-introducción)
2. [Miembros Del Equipo De Trabajo](#2-miembros-del-equipo-de-trabajo)
3. [Objetivos Del Sprint](#3-objetivos-del-sprint)
4. [Tareas Seleccionadas Del Product Backlog](#4-tareas-seleccionadas-del-product-backlog)

---

## **1. Introducción**
El siguiente documento detalla la planificación y organización del trabajo para el segundo sprint, 
estableciendo las tareas a realizar, los responsables de cada tarea y su respectivo tiempo estimado. 
En él, se presenta una visión clara y estructurada de las actividades que se abordarán durante el período del sprint, 
lo que facilita la coordinación y el seguimiento del progreso del equipo de desarrollo.

---

## **2. Miembros Del Equipo De Trabajo**
- Álvaro Chico Castellano.
- Jorge Muñoz Rodríguez.
- María José Ruíz Vázquez.
- Rafael Molina García.
- Rubén Pérez Garrido.

---

## **3. Objetivos Del Sprint**
Nuestro principal objetivo en este sprint es ofrecer al cliente tanto una documentación de calidad 
como un software que sea eficaz y funcional. Por lo tanto, nos comprometemos a dedicar tiempo y esfuerzo 
para garantizar que tanto la documentación como el software estén a la altura de las expectativas del cliente.  
  
Además de satisfacer las demandas del cliente, tenemos la pretensión de fortalecernos como equipo de trabajo. 
Creemos que al trabajar de manera más eficiente y coordinada, podemos alcanzar un nivel más alto de productividad 
y calidad en nuestro trabajo.  
  
En resumen, en este sprint nos enfocaremos en cumplir con los objetivos del cliente, mejorar nuestras habilidades 
y procesos como equipo, y cultivar un ambiente laboral que promueva la colaboración y el crecimiento personal y profesional. 
Estamos seguros de que al trabajar con este enfoque integral, podremos alcanzar resultados sobresalientes y satisfacer 
las expectativas tanto del cliente como del equipo.

---

## **4. Tareas Seleccionadas Del Product Backlog**
Para este Sprint y los siguientes, los puntos de historia se definirán como el equivalente a 10 minutos de tiempo invertido 
por un miembro del equipo de trabajo. Cuando varias personas están asignadas a una tarea, los puntos de historia se afectan 
a todos. Por ejemplo, si hay 2 personas y 20 puntos asignados, significa que cada persona ha invertido 200 minutos.

### Tarea A2.1
- **Descripción:** Responder individualmente a preguntas relacionadas con los objetivos de aprendizaje del sprint.
- **Estimación:** 1 P.H.
- **Miembro Asignado:** Todos (Individualmente).

### Tarea A2.2 (15%)
- #### Tarea A2.2 A
  - **Descripción:** Agregue la funcionalidad de _Booking_ para las habitaciones de hotel para mascotas. Como propietario
    podemos crear una reserva, y debe tener una fecha de inicio, una fecha de finalización y una mascota y habitación asociadas.
    Esta funcionalidad debería validar que no haya reservas simultáneas en el hotel para la misma mascota o la misma habitación.
  - **Estimación:** 48 P.H.
  - **Miembro Asignado:** Rafa Molina.
    
- #### Tarea A2.2 B
  - **Descripción:** Cree una funcionalidad de _Adoptions_. Como propietario, podemos crear una solicitud de adopción cuando
    no podamos cuidar de nuestra mascota. Otros propietarios podrían enumerar las mascotas disponibles para adopción y
    solicitarlas (las solicitudes de adopción deben tener una descripción de cómo el solicitante cuidará a la mascota).
    Si el dueño original aprueba la solicitud, la mascota será transferida al solicitante y éste será el nuevo dueño de la mascota.
  - **Estimación:** 48 P.H.
  - **Miembro Asignado:** Jorge Muñoz.

- #### Tarea A2.2 C
  - **Descripción:** Desarrolle un conjunto integral de pruebas unitarias para garantizar al menos una cobertura de condiciones
    del 90 % para el servicio responsable de gestionar la lógica empresarial relacionada con las reservas.
  - **Estimación:** 30 P.H.
  - **Miembro Asignado:** Álvaro Chico.

### Tarea A2.3 (10%)
- #### Tarea A2.3 A
  - **Descripción:** Como grupo, una vez realizados los cambios anteriores, preparar una versión del proyecto Petclinic,
  creando la rama de versión correspondiente. En esta rama de lanzamiento, todos los miembros del grupo deben agruparse
  para eliminar cualquier error y/o advertencia presente en todos los archivos fuente del código desarrollado, hasta el
  momento en que se inicia el lanzamiento. Como resultado final de ese lanzamiento, la nueva versión de la aplicación
  Petclinic debe implementarse en App Engine, accesible en la URL _https://psg2-2324-gx-xy.ew.r.appspot.com/_, donde X -XY
  corresponde a la identificación del grupo.
  - **Estimación:** 3 P.H.
  - **Miembro Asignado:** Álvaro Chico.
    
- #### Tarea A2.3 B
  - **Descripción:** Una vez realizado el lanzamiento para S2 a nivel de código fuente, crear un lanzamiento en el repositorio
  de GitHub, cargando un archivo .zip con todo el contenido de la rama principal. Utilice la etiqueta generada como paso final
  de la fusión de la rama de lanzamiento. La versión de GitHub debe incluir en su descripción los cambios realizados en base
  a los mensajes de las solicitudes de extracción fusionadas. Utilice la opción "Generar notas de la versión" proporcionada por
  GitHub para automatizar la inclusión de dicho contenido.
  - **Estimación:** 1 P.H.
  - **Miembro Asignado:** Álvaro Chico.

### Tarea A2.4 (25%)
- #### Tarea A2.4 A
  - **Descripción:** Como grupo, creen un informe técnico (en español) titulado “Métricas de Proceso Ágil y Recursos”.
    El documento debe almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown,
    actualizando las versiones almacenadas a medida que el grupo trabaja con él siguiendo la estrategia definida en S1.
    Este documento debe contener al menos los siguientes elementos:
    
    Para el Sprint 1:
      - Burn Down chart
      - Control Chart showing Lead Time
      - Control Chart showing Cycle Time
      - Total history points delivered
      - Percentage of history points delivered.
  - **Estimación:** 12 P.H.
  - **Miembro Asignado:** Rubén Pérez.
    
- #### Tarea A2.4 B
  - **Descripción:** Como grupo, creen un informe técnico (en español) titulado “Métricas de Proceso Ágil y Recursos”.
    El documento debe almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown,
    actualizando las versiones almacenadas a medida que el grupo trabaja con él siguiendo la estrategia definida en S1.
    Este documento debe contener al menos los siguientes elementos:
    
    Para el Sprint 2:
      - Burn Down chart
      - Control Chart showing Lead Time
      - Control Chart showing Cycle Time
      - Total history points delivered
      - Percentage of history points delivered.
      - Niko-Niko calendar with a qualitative analysis of its content (conclusions and possible actions to improve team morale)
  - **Estimación:** 15 P.H.
  - **Miembro Asignado:** María José Ruíz.
 
### Tarea A2.5 (25%)
- #### Tarea A2.5 A
  - **Descripción:** Como grupo, creen un informe técnico (en español) titulado “Análisis del Código Fuente y Métricas Asociadas” que     incluya los resultados del análisis de su proyecto con SonarQube (según las versiones generadas en S1 y S2, analizando el código en     la rama principal para los commits correspondientes). Dicho informe debe describir los valores de las métricas del código fuente        calculadas, los tipos de problemas encontrados en el análisis y sus causas. El documento debe almacenarse en una carpeta docs dentro    del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con él          siguiendo la estrategia definida en S1. Este documento debe contener al menos los siguientes elementos:
      - Una captura de pantalla del panel de SonarQube para el análisis de tu proyecto y una descripción de las métricas proporcionadas         en el panel y sus valores.
      - Descripción y análisis de los posibles errores encontrados en el repositorio (en la sección Fiabilidad dentro de la pestaña             Medidas).
      - Descripción y análisis de los diferentes tipos de códigos de olores encontrados en los análisis (en el apartado Mantenibilidad          dentro de la pestaña de medidas). Para cada tipo de olor a código, el informe debe describir:
      - El nombre y la descripción del código huelen.
      - Las diferentes causas del olor en tu código base
      - Una evaluación justificada de la gravedad del olor a código.
      - Una breve descripción de cómo solucionarlo dependiendo de las causas.
      - Conclusiones sobre los resultados de los análisis. 
  - **Estimación:** 12 P.H.
  - **Miembro Asignado:** María José Ruíz.
    
- #### Tarea A2.5 B
  - **Descripción:** Como grupo, creen un informe técnico (en español) titulado “Análisis del Código Fuente y Métricas Asociadas” que     incluya los resultados del análisis de su proyecto con SonarQube (según las versiones generadas en S1 y S2, analizando el código en     la rama principal para los commits correspondientes). Dicho informe debe describir los valores de las métricas del código fuente        calculadas, los tipos de problemas encontrados en el análisis y sus causas. El documento debe almacenarse en una carpeta docs dentro    del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con él          siguiendo la estrategia definida en S1. Este documento debe contener al menos los siguientes elementos:
      - Una captura de pantalla del panel de SonarQube para el análisis de tu proyecto y una descripción de las métricas proporcionadas         en el panel y sus valores.
      - Descripción y análisis de los posibles errores encontrados en el repositorio (en la sección Fiabilidad dentro de la pestaña             Medidas).
      - Descripción y análisis de los diferentes tipos de códigos de olores encontrados en los análisis (en el apartado Mantenibilidad          dentro de la pestaña de medidas). Para cada tipo de olor a código, el informe debe describir:
      - El nombre y la descripción del código huelen.
      - Las diferentes causas del olor en tu código base
      - Una evaluación justificada de la gravedad del olor a código.
      - Una breve descripción de cómo solucionarlo dependiendo de las causas.
      - Conclusiones sobre los resultados de los análisis. 
  - **Estimación:** 12 P.H.
  - **Miembro Asignado:** Rubén Pérez.
 
### Tarea A2.6 (25%)
Se envían todos los informes relacionados con las actas de las reuniones (Sprint Planning, Daily Standups, Review y Retrospective), así como los informes de Clockify, y contienen la información necesaria para comprender el trabajo del Equipo durante el Sprint S2 demostrando su cumplimiento de los Metodología del curso. Estas actas deben almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con ellas siguiendo la estrategia definida en S1.
- #### Tarea A2.6 A
  - **Descripción:** Sprint Planning. Trabajo en equipo durante todo el sprint, reuniones diarias y cumplimiento de su definición de 
  "Listo", posiblemente actualizada para este Sprint (reflejada en una nueva versión del informe correspondiente).
  - **Estimación:** 11 P.H.
  - **Miembro Asignado:** Todos (Grupal).
 
- #### Tarea A2.6 B
  - **Descripción:** Daily Standups. Planificación de sprints, gestión de tareas y cumplimiento de sus estimaciones iniciales y 
  metodología interna.
  - **Estimación:** 4 P.H.
  - **Miembro Asignado:** Jorge Muñoz.

- #### Tarea A2.6 C
  - **Descripción:** Review. Demostraciones de revisión de Sprint y acciones tomadas.
  - **Estimación:** 5 P.H.
  - **Miembro Asignado:** María José Ruíz.
 
- #### Tarea A2.6 D
  - **Descripción:** Retrospective. Retrospectiva del Sprint realizada, análisis del Sprint 2 incluyendo la aplicación del plan de 
  acción definido en la retrospectiva del Sprint 1, y un nuevo plan de acción para mejorar el trabajo en equipo para el Sprint 3.
  - **Estimación:** 5 P.H.
  - **Miembro Asignado:** Rubén Pérez.
 
### Extra E2.1 (0.1 Puntos)
- #### Extra E2.1 A
  - **Descripción:** Individualmente, ampliar los informes técnicos creados como resultado de _A2.4_ para
  analizar también las diferencias entre los resultados de las métricas y el análisis en S1 y S2. El documento
  también debe incluir una discusión sobre las causas de tales diferencias. Varios miembros del equipo pueden
  colaborar en este criterio adicional, centrándose en un conjunto diferente de métricas.
  - **Estimación:**  6 P.H.
  - **Miembro Asignado:** Rubén Pérez.
 
- #### Extra E2.1 B
  - **Descripción:** Individualmente, ampliar los informes técnicos creados como resultado de _A2.5_ para
    analizar también las diferencias entre los resultados de las métricas y el análisis en S1 y S2. El documento
    también debe incluir una discusión sobre las causas de tales diferencias. Varios miembros del equipo pueden
    colaborar en este criterio adicional, centrándose en un conjunto diferente de métricas.
  - **Estimación:** 6 P.H.
  - **Miembro Asignado:** María José Ruíz.

### Tarea E2.2 (0.1 Puntos)
- **Descripción:** Individualmente, amplía el informe técnico creado como resultado de A2.5, incluyendo qué
  modificaciones debes introducir en tu código fuente para eliminar los posibles errores y malos olores y
  mejorar la complejidad ciclomática en aquellas clases con un valor mayor. Implemente estas modificaciones
  y realice análisis adicionales con SonarQube, incluido el informe resultante en la discusión del informe
  técnico A2.5. Cada miembro del equipo que trabaje en este criterio adicional debe centrarse en diferentes
  bichos, malos olores y clases con alta complejidad ciclomática.
- **Estimación:** 9 P.H.
- **Miembro Asignado:** Álvaro Chico.

### Tarea E2.3 (0.1 Puntos)
- **Descripción:** Individualmente, configura tu proyecto para usar GitHub Actions para automatizar el análisis
  de tus push to main y subir los resultados a SonarQube. Debe escribir un documento que describa los problemas
  encontrados en la automatización, las soluciones proporcionadas para esos problemas y el enfoque general utilizado
  para automatizar esas tareas (cómo funciona el archivo de script de GitHub Actions generado). Varios miembros del
  equipo pueden colaborar en este criterio adicional, centrándose en diferentes partes de la aplicación Petclinic o
  investigando automatizaciones adicionales con GitHub Actions.
- **Estimación:** 18 P.H.
- **Miembro Asignado:** Álvaro Chico.
