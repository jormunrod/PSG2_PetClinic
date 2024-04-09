# **Planificación del Sprint 3.**

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
El siguiente documento detalla la planificación y organización del trabajo para el tercer sprint, 
estableciendo las tareas a realizar, los responsables de cada tarea y su respectivo tiempo estimado. 
En él, se presenta una visión clara y estructurada de las actividades que se abordarán durante el período del sprint, lo que facilita la coordinación y el seguimiento del progreso del equipo de desarrollo.

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

### Tarea A3.2 (10%)
- **Descripción:** Como grupo, cree un documento de `Customer Agreement`, que debe incluir la máxima información relevante con respecto al modelo de `Customer Agreement` (CA) descrito en clase, no restringido al modelo ofrecido por iTop para contratos de Cliente y Proveedor. Este documento debe estar disponible como un nuevo elemento de menú en la aplicación PetClinic, usando el formato adecuado, y cada miembro del grupo debe estar involucrado ya sea en su diseño, implementación, el pull request correspondiente o en todo. Los cambios en la aplicación deben desarrollarse siguiendo la estrategia de ramificación definida por el grupo en S1. Las principales características que deben incluirse son:

  1. Descripción y servicios asociados: Además de los servicios principales de PetClinic, debe existir al menos un servicio adicional Petclinic4ClinicOwner que permita a sus usuarios (propietarios de clínicas) solicitar la resolución de incidentes, enviar solicitudes de usuario y solicitar estimaciones de cambios (RFC).
  2. Precios: Deben existir al menos tres planes (Básico, Oro y Platino), cuyas condiciones cada grupo puede establecer a su conveniencia, siempre que se cumplan las siguientes restricciones:
      - El plan Básico no ofrece SLA.
      - El plan Oro es el primero en ofrecer funcionalidades adicionales (como Pet Hotel o Adopciones).
      - El plan Platino es el único que ofrece consultas en línea.
      - El número máximo de mascotas y visitas mensuales admitidas para los propietarios de mascotas debe diferir para cada plan.
      - La disponibilidad del servicio debe ser diferente para cada plan. Esta información debe representarse utilizando una tabla o matriz, como es costumbre hoy en día.
  3. Duración y terminación: Al menos el contrato debe ser válido durante todo el curso académico. El acuerdo debe especificar las condiciones de terminación.
  4. Acuerdo de nivel de servicio (SLA): El SLA puede variar para cada servicio, subcategorías de servicio y plan elegido. Además, el documento debe considerar los siguientes requisitos:
      - Además de las métricas de Tiempo de Propiedad (TTO) y Tiempo de Resolución (TTR), al menos una métrica adicional que sea sólida y no esté disponible en iTop.
      - Descripción del mecanismo de monitoreo.
      - Períodos de soporte al usuario. Por ejemplo, de lunes a sábado de 9:00 a 22:00, 12x5, 24x7, etc.
      - Al menos un SLA con tres niveles diferentes de prioridad (urgencia e impacto).
      - Compensaciones (créditos de servicio) en caso de incumplimiento.
  5. Otros términos generales: Deben incluirse términos habituales para cubrir otros aspectos, como uso aceptable, política de privacidad, términos de pago, propiedad intelectual, política de cambios, ley aplicable, etc.

- **Estimación:** X P.H.
- **Miembro Asignado:** X

### Tarea A3.3 (10%)
- **Descripción:** Como grupo, integre el marco Pricing4SaaS en su aplicación Petclinic siguiendo la estrategia de ramificación definida por el grupo en S1. Las diferentes funcionalidades de la aplicación Petclinic, como el hotel y las adopciones, deben configurarse según los planes de precios definidos en el CA especificado en A3.2. Como paso final, después de fusionar los cambios de A3.2 y A3.3 en la rama de desarrollo, prepare una versión del proyecto Petclinic, siguiendo el mismo procedimiento que en versiones anteriores (consulte A2.3 para obtener referencias).

- **Estimación:** 18 P.H.
- **Miembro Asignado:** Jorge Muñoz.

### Tarea A3.4 (10%)
- **Descripción**: Como grupo, creen un `Technical Report` (en español) titulado "Implementación de iTop para la Organización PSG2-2324-GX-XY" que resuma el trabajo realizado en iTop durante este Sprint. Este trabajo incluye la configuración de todos los elementos de iTop para soportar la gestión de incidentes y solicitudes de los servicios de Petclinic, como contratos de Clientes, Servicios, subcategorías de Servicios, SLA, SLT y modelos de Entrega, entre otros. El informe técnico debe almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con él siguiendo la estrategia definida en S1. El informe técnico deberá contener al menos los siguientes puntos, algunos de ellos para cada servicio:

  - Captura de pantalla del portal iTop que está disponible para los clientes (propietarios de clínicas).
  - Dificultades que se encontraron al configurar iTop en este escenario durante el Sprint. Por ejemplo, analice cómo se definieron los elementos de la CA en iTop y por qué algunos no se pudieron definir si ese fuera el caso.
  - Faltan funciones en iTop para registrarse correctamente y brindar información para respaldar todas las tareas de este Sprint.
  - Aportes de cada autor. Incluya detalles sobre tareas concretas realizadas por cada miembro del grupo. Sugerimos utilizar una matriz o tabla para resumir esta información.

- **Estimación:** 24 P.H.
- **Miembro Asignado:** María José Ruíz.

### Tarea A3.5 (15%)
- **Descripción**: Implementa como grupo en cualquier orden los siguientes cambios en tu aplicación Petclinic gestionándolos como incidencias o solicitudes de los usuarios dentro de iTop, según su naturaleza. Las solicitudes deben ser creadas por el usuario propietario de la clínica correspondiente en iTop. Los cambios en la aplicación se deben desarrollar siguiendo la estrategia de ramificación definida por el grupo en S1, eligiendo el tipo de ramificación más adecuado en función de si el cambio se gestiona como una incidencia o una petición del usuario. Tendrás que decidir cuándo y cómo publicar e implementar los cambios en App Engine, posiblemente agrupando algunos de ellos. Una vez implementados e implementados los cambios, se debe actualizar iTop para que su configuración sea consistente con la nueva versión de la aplicación PetClinic. Considere A3.6 para organizar las tareas asociadas en el Sprint Backlog.

  1. Descripción de los planes de precios: La descripción de los planes de precios que se encuentra en la ruta/planes de la aplicación debe ser coherente con la CA definida en A3.2.
  2. Identificar el plan actual: el plan de precios actual asociado con una clínica debe mostrarse en la barra de encabezado junto al nombre de usuario que inició sesión. Tenga en cuenta que esto solo es posible para usuarios que son dueños de mascotas o veterinarios.
  3. Eliminar la página "Plan" para dueños de mascotas: la página del plan a la que el dueño de una mascota puede acceder usando el enlace "Plan" más a la izquierda en la barra de encabezado (o en la ruta /plan) no tiene sentido, ya que solo los propietarios de clínicas deben administrar los planes de las clínicas. El acceso a esta página debe eliminarse para los propietarios de mascotas lo antes posible.
  4. Plan de actualización a la Clínica 3: El propietario de la Clínica 3 desea actualizar su plan asociado al plan inmediatamente superior. Asegúrese de que la actualización persista correctamente.
  5. Extensiones basadas en API: agregue funciones que necesiten el uso de al menos dos API externas. Envíe una solicitud diferente para cada API externa. No es necesario integrar las API dentro del código base (la integración real se propone como tareas adicionales; ver más abajo), pero al menos la GUI debe simular (por ejemplo, usando datos simulados) lo que esas API ofrecerían.

- **Estimación:** 24 P.H.
- **Miembro Asignado:** Álvaro Chico.

### Tarea A3.6 (10%)
- **Descripción**: Como grupo, crear un `Technical Report` (en español) titulado “Monitorización del Acuerdo de cliente de PetClinic Services (PSG2-2324-GX-XY)” que resuma el trabajo realizado para monitorear la CA. Para cada solicitud enumerada en A3.5, este documento debe contener al menos un informe del grado de cumplimiento del SLT asociado, así como el tiempo transcurrido entre la creación del problema en GitHub y su cierre. Puede utilizar capturas de pantalla de iTop y GitHub que muestran cuándo se abrieron y cerraron los problemas. Cada miembro del grupo debe revisar al menos una solicitud y asignarla a otro miembro. El miembro asignado debe crear un problema correspondiente en GitHub e implementar la solicitud, actualizando tanto el problema en GitHub como la solicitud o incidente del usuario en iTop una vez implementado. El informe técnico debe almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con él siguiendo la estrategia definida en S1.

- **Estimación:** 24 P.H.
- **Miembro Asignado:** Rubén Pérez.

### Tarea A3.7 (15%)
- **Descripción**: Como grupo, creen un `Technical Report` (en español) titulado “Análisis de la capacidad y el riesgo de PetClinic Services (PSG2-2324-GX-XY)”. El informe técnico debe almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con él siguiendo la estrategia definida en S1. Este documento debe contener al menos los siguientes elementos:

  1. Una estimación razonada y plenamente explicada del TCO del servicio incluido en la CA, incluyendo, entre otros aspectos, el OpEx y el CapEx, considerando que el servicio:
    - Debe estar disponible durante al menos 24 meses.
    - Se deberá contar con capacidad suficiente para ofrecer el servicio a 10.000, 5.000 y 3.000 usuarios Básico, Gold y Platinum, respectivamente.
    - Se apoya en el ecosistema de desarrollo y operación visto en clase.
    - El promedio mensual de incidentes, solicitudes y RFC es de 120, 100 y 2, respectivamente.
    - El salario anual puede variar entre el 0,5 y el 3%.
  2. Un análisis de la capacidad del servicio extendido de Clínica de mascotas, que incluya al menos resultados de capacidad que involucren la cantidad máxima de solicitudes admitidas, el costo mínimo incurrido para respaldar una cantidad de solicitudes y el tiempo mínimo para atender una cantidad de solicitudes.
  3. Un análisis razonado y plenamente explicado de los riesgos de operación y mantenimiento del servicio incluido en la CA, considerando:
    - Como línea base, las condiciones descritas para la estimación del TCO.
    - Cada 6 meses, los precios de las API externas pueden variar del 2 al 10%.
    - Los precios de los servicios de habilitación y mejora pueden variar del 2 al 10%.

- **Estimación:** 24 P.H.
- **Miembro Asignado:** Rafael Molina.

### Tarea A3.8 (35%)
Se envían todos los informes relacionados con las actas de las reuniones (Sprint Planning, Daily Standups, Review y Retrospective), así como los informes de Clockify, y contienen la información necesaria para comprender el trabajo del Equipo durante el Sprint S3 demostrando su cumplimiento de los Metodología del curso. Estas actas deben almacenarse en una carpeta docs dentro del mismo repositorio usando la sintaxis Markdown, actualizando las versiones almacenadas a medida que el grupo trabaja con ellas siguiendo la estrategia definida en S1.
- #### Tarea A3.8 A
  - **Descripción:** Sprint Planning. Trabajo en equipo durante todo el sprint, reuniones diarias y cumplimiento de su definición de 
  "Listo", posiblemente actualizada para este Sprint (reflejada en una nueva versión del informe correspondiente).
  - **Estimación:** 11 P.H.
  - **Miembro Asignado:** Jorge Muñoz.
 
- #### Tarea A3.8 B
  - **Descripción:** Daily Standups. Planificación de sprints, gestión de tareas y cumplimiento de sus estimaciones iniciales y 
  metodología interna.
  - **Estimación:** 4 P.H.
  - **Miembro Asignado:** Jorge Muñoz.

- #### Tarea A3.8 C
  - **Descripción:** Review. Demostraciones de revisión de Sprint y acciones tomadas.
  - **Estimación:** 5 P.H.
  - **Miembro Asignado:** María José Ruíz.
 
- #### Tarea A3.8 D
  - **Descripción:** Retrospective. Retrospectiva del Sprint realizada, análisis del Sprint 3 incluyendo la aplicación del plan de 
  acción definido en la retrospectiva del Sprint 1, y un nuevo plan de acción para mejorar el trabajo en equipo para el hipoético Sprint 4.
  - **Estimación:** 5 P.H.
  - **Miembro Asignado:** Rubén Pérez.

### Tarea E3.1 (0.2 puntos)
- **Descripción**: Individualmente, implementar y desplegar una aplicación Petclinic integrando una API real como se define en A3.5.e. Si más de un miembro quiere cumplir este criterio, debe centrarse en diferentes API. Cada API funcional y completamente integrada otorgará 0,1 puntos hasta un máximo de 0,2 puntos por miembro del equipo.

- **Estimación:** 24 P.H.
- **Miembro Asignado:** Rafael Molina.

### Tarea E3.2 (0.1 puntos)
- **Descripción**: De forma individual, configura iTop de tal forma que sea posible analizar el impacto que puede causar una caída de App Engine de forma gráfica, mostrando un diagrama de dependencia y/o impacto en iTop con todos los elementos necesarios asociados.

- **Estimación:** X P.H.
- **Miembro Asignado:** X
