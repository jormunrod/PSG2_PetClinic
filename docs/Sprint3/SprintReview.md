# **Sprint Review del Sprint 3.**

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

Con el Product Backlog por delante se ha ido revisando y mostrando punto por punto todas las funcionalidades que se han incorporado. 

En primer lugar, Jorge y Álvaro como desarrolladores encargados de realizar el punto A3.2 ha enseñado como han incorporado el documento "Customer Agreement" en el menú de PetClinic. Ellos han optado por usar una librería que te permite introducir texto .markdown y mostrarlo en el frontend. No teniendo que introdur el texto en .html ni en un archivo .pdf, esta tarea esta realizada al completo y la incorporación de la librería ha sido todo un éxito.

Jorge continua mostrando las diferentes funcionalidades de la aplicación Petclinic, como el hotel y las adopciones, han sido configurardas según los planes de precios definidos en el CA especificado en A3.2, haciendo una demostración de como salta una excepción cuando intentas incorporar una tercera mascota en el plan básico, además nos ha mostrado todos los planes y como cambia su funcionalidad.

Pasamos al punto A3.4 donde se enseña el docuemnto que recoge la configuración de iTop para nuestra organización, en este caso María José ha incorporado una descripción detallada de como ha realizado la configuración de cada elemento que se pedia junto con capturas de pantallas que lo corroboran. Además en cada punto se ha incorporado un apartado de "Dificultades" donde se especifica los problemas que han surgido sobre la configuración. 
Por último el Product Owner nos ha pedido que incorporemos un apartado con las mejoras de iTop tanto en la parte de configuración a la hora de meter los datos, como en la gestión de incidencias. Este apartado se ha introducido para la entrega.

Una vez realizado la configuración del punto A3.4, Álvaro a podía realizar las peticiones de los clientes que se especificaban en el punto. A3.5. Además nos ha mostrado como ha quedado las nuevas funcionalidades que se pedían en las peticiones de clientes, como:
- Descripción de los planes de precios:
- El plan de precios actual asociado con una clínica debe mostrarse en la barra de encabezado junto al nombre de usuario que inició sesión
- El acceso a la página “Plan”  debe eliminarse para los dueños de mascotas 
- Plan de actualización a la Clínica 3
Todo funcionaba de acuerdo a las especificaciones que se pedían.

Por último Rafa ha enseñado las dos APIs externas que se han implementado (Openweatherapi y Ninja-api/animal) una de ella se ha dejado como maqueta pero el product owner nos recomendó que sí estaba implementada que quitáramos la demo.

Ahora es el turno de Ruben, donde enseño lo que llevaba de documento hasta el momento, pero el product Owner nos dijo que faltaba la incorporación de las capturas donde se veían todo el procedimiento de la gestión de incidencias. Este documento se ha completado con las imágenes que faltaba para la entrega.

El apartado A3.7 no estaba completo para enseñarlo en la review, pero Rafa ha trabajado para dejarlo listo para el día de la entrega.

Por otro lado, la tarea A3.8 ha sido dividida en cuatro partes. Primero se realizó el spring planning donde todos los miembros del grupo se encargaron de estudiar, dividir, estimar, introducir en zenhub y dejar documentada todas las tareas. Además todos los martes Jorge se encargaba de realizar la daily stand-ups y dejaba documentada todos los progresos y dificultades que habiamos tenido durante la semana. Estos documentos estan realizados al completo, ya que se ha ido realizando los dias de las reuniones. El sprint review será documentado por María josé quien se encargó de tomar notas mientras teníamos esta reunion y finalmente, Rubén se encargará de redactar el sprint rretrospective donde dejará en detalle como ha ido el Sprint 3.


Finalmente, el equipo ha decidido que también hariamos las tareas extras por un lado en la E3.1 se ha implementado y desplegado una aplicación Petclinic integrando una API real como se define en A3.5.e, está te permite ver en el framenwork una preview de como se vería el código en react. Las tareas extras las tratamos como una tarea más, se reparte en cada sprint a un miembro del equipo y este se encarga de hacerlo.
De igual forma la tarea E3.2 
 

Aquí un resumen de las tareas completadas :

- Tarea A3.2 (10%)
    - Descripción: cree un documento de Customer Agreement, debe estar disponible como un nuevo elemento de menú        en la aplicación PetClinic.
    - Estimación: 24 P.H.
    - Tiempo real: 24 P.H.
    - Miembros Asignados: Álvaro Chico y Jorge Muñoz.

- Tarea A3.3 (10%)
    - Descripción: integre el marco Pricing4SaaS en su aplicación Petclinic.
    - Estimación: 18 P.H.
    - Tiempo real: 19 P.H.
    - Miembro Asignado: Jorge Muñoz.

- Tarea A3.4 (10%)
    - Descripción: creen un Technical Report titulado "Implementación de iTop para la Organización PSG2-2324-GX-        XY" 
    - Estimación: 24 P.H.
    - Tiempo real: 24 P.H.
    - Miembro Asignado: María José Ruíz.

- Tarea A3.5 (15%)
    - Descripción: Implementa los siguientes cambios en tu aplicación Petclinic gestionándolos como incidencias o     solicitudes de los usuarios dentro de iTop.
    - Estimación: 24 P.H.
    - Tiempo real: 24 P.H.
    - Miembro Asignado: Álvaro Chico.

- Tarea A3.6 (10%)
    - Descripción: crear un Technical Report  titulado “Monitorización del Acuerdo de cliente de PetClinic             Services (PSG2-2324-GX-XY)” 
    - Estimación: 24 P.H.
    - Tiempo real: 24 P.H.
    - Miembro Asignado: Rubén Pérez.

- Tarea A3.7 (15%)
    - Descripción: creen un Technical Report titulado “Análisis de la capacidad y el riesgo de PetClinic Services     (PSG2-2324-GX-XY)”. 
    - Estimación: 24 P.H.
    - Tiempo real: 24 P.H.
    - Miembro Asignado: Rafael Molina.

- Tarea A3.8 (35%)
- Tarea A3.8 A
    - Descripción: Sprint Planning. 
    - Estimación: 11 P.H.
    - Tiempo real: 11 P.H.
    - Miembro Asignado: Jorge Muñoz.
      
- Tarea A3.8 B
    - Descripción: Daily Standups. 
    - Estimación: 4 P.H.
    - Tiempo real: 4 P.H.
    - Miembro Asignado: Jorge Muñoz.
      
- Tarea A3.8 C
    - Descripción: Review.
    - Estimación: 5 P.H.
    - Tiempo real: 5 P.H.
    - Miembro Asignado: María José Ruíz.
- Tarea A3.8 D
    - Descripción: Retrospective. 
    - Estimación: 5 P.H.
    - Tiempo real: 5 P.H.
    - Miembro Asignado: Rubén Pérez.

- Tarea E3.1 (0.2 puntos)
    - Descripción: implementar y desplegar una aplicación Petclinic integrando una API real.
    - Estimación: 24 P.H.
    - Tiempo real: 26 P.H.
    - Miembro Asignado: Rafael Molina.

- Tarea E3.2 (0.1 puntos)
    - Descripción: configura iTop de tal forma que sea posible analizar el impacto que puede causar una caída de        App Engine de forma gráfica, mostrando un diagrama de dependencia y/o impacto en iTop con todos los               elementos necesarios asociados.
    - Estimación: 9 P.H.
    - Tiempo real: 11 P.H.
    - Miembro Asignado: Álvaro Chico.


---

## **4. Conclusión**
En conclusión, aunque nos quedaban pequeñas cositas en las tareas de documentación y las extras, hemos tenido tiempo sufiente para realizarla. Por lo que todas las tareas recogidas en el Product Backlog se han realizado correctamente. A pesar de que hemos tenido algún contratiempo que nos hecho invertir más horas de las estimadas, hemos podido llegar a tiempo a la entrega del Sprint 2 con todas las tareas realizadas.
