# **Implementacion de iTop para la organización PSG2-2324-G4-44.**

<p align="center">
    <img src="../images/logoUs.png" alt="Logo Universidad Sevilla" style="width: 50%; margin: auto;">
</p>

---

## Índice

1. [Introducción](#1-introducción)
2. [Contactos, equipo y usuario (Configuración y dificultades)](#2-contactos-equipo-y-usuarios)
    - [2.1 Contactos y equipo](#21-contactos-y-equipo)
    - [2.2 Usuarios](#22-usuarios)
3. [Gestión de Servicios (Configuración y dificultades)](#3-gestión-de-servicios)
    - [3.1 Servicios Ofrecidos](#31-servicios-ofrecidos)
    - [3.2 SLA de los servicios ofrecidos](#32-sla-de-los-servicios-ofrecidos)
    - [3.3 Contrato de los servicios ofrecidos](#33-contrato-de-los-servicios-ofrecidos)
4. [Peticiones de usuario e incidentes (Configuración y dificultades)](#4-peticiones-de-usuario-e-incidentes)
5. [Mejoras en iTop](#5-mejoras-en-itop)
6. [Tareas realizadas por cada miembro](#6-tareas-realizadas-por-cada-miembro)
7. [Conclusiones](#6-conclusiones)

---

## **1. Introducción**
Durante el Sprint actual, se ha llevado a cabo un trabajo exhaustivo en el marco de la configuración de iTop, enfocado en optimizar su capacidad para gestionar eficazmente incidentes y solicitudes de los servicios proporcionados por Petclinic. 

Uno de los aspectos fundamentales abordados en este Sprint ha sido la configuración de servicios dentro de iTop. Esto implica la definición detallada de los servicios ofrecidos por Petclinic, así como la creación de subcategorías de servicios para una mejor organización y categorización. Esta estructuración facilita una gestión más eficiente de los servicios y una respuesta ágil a las solicitudes e incidentes.

Otro componente esencial del trabajo realizado ha sido la configuración de acuerdos de nivel de servicio (SLA) y acuerdos de tiempo de servicio (SLT). Esta configuración proporciona un marco para la monitorización y el seguimiento continuo del rendimiento del servicio, permitiendo una mejora continua y una adaptación ágil a las necesidades cambiantes del negocio y de los clientes.

Además, se ha realizado la configuración de contratos para los clientes de Petclinic y la de modelos de entrega dentro de iTop. 

Finalmente, este documento va acompañado de imágenes donde se muestran el proceso y la creación de todos los elementos dentro de iTop, también se proporciona una breve explicación de las dificultades encontradas y que aspectos se podrían mejorar.



---

## **2. Contactos, equipo y usuario (Configuración y dificultades)**
### **2.1 Contactos y equipo**
Nuestro grupo tenia creado previamente una organización PSG2-2324-G4-44 dentro de iTop. Este se compone de cinco contactos, uno por cada miembro. Se ha incorporado un nuevo contacto como equipo denominado PSG2-2324-G4-44 Team al que se le han añadido todos los miembros del grupo.

Dificultades: no se ha tenido ninguna dificultad al incorporar este nuevo contacto ya que los pasos son sencillos.

<p align="center">
    <img src="../images/listaContactos.png" alt="Creacion del equipo" style="width: 50%; margin: auto;">
</p>


### **2.2 Usuarios**
Además de los usuarios de iTop creados para cada miembro del grupo en el Sprint 1, cada grupo tiene acceso a dos usuarios cliente que representan a dos propietarios de clínica y que accederán al portal de usuarios iTop con su propio usuario y contraseña:
PSG2-2324-clinicOwner1-G4-44 y PSG2-2324-clinicOwner2-G4-44

---

## **3. Gestión de Servicios (Configuración y dificultades)**
### **3.1 Servicios Ofrecidos**
Nuestra organización ha creado dentro de iTop todos los servicios referidos en los criterios de aceptación. La nomenclatura que se ha utilizado es “PSG2-2324-G4-44 nombre-del-servicio”. Una vez creado hemos añadido las subcategorías que correspondan, en este caso solo están disponibles dos: Incident y Service Request.
Esta a su vez también sigue un esquema similar al de los servicios “PSG2-2324-G4-44 – Nombre-de-subcategoría”. Además también irá asociada al menos un contrato por cada cliente.

Dificultades: este apartado fue bastante confuso, ya que la explicación dada en el archivo de configuración aportado no habia muchos detalles, pero despúes de que se actualizará este archivo y la aclaración del profesor en clase se pudo resolver con éxito. Debiamos de incluir los servicios tanto para PetClinic como para PetCLini4ClinicOwner y las peticiones por parte del cliente solo se iban a registrar hacia este último servicio.

<p align="center">
    <img src="../images/listaServicios.png" alt="Creacion de los servicios" style="width: 50%; margin: auto;">
</p>


<p align="center">
    <img src="../images/servicioCategoria.png" alt="Creacion de los subcategorias" style="width: 50%; margin: auto;">
</p>

### **3.2 SLA de los servicios ofrecidos**
En primer lugar se han creado las definiciones (SLTs) de los valores de las métricas TTO Y TTR que se van a usar en el SLA asociado a casa plan de precio y a cada cliente de acuerdo a los criterios de aceptación. Como estos se comparten en todas las organizaciones hemos creado una nomenclatura para nuestro grupo “PSG2-2324-G4-44 – Nombre-del-SLT”.

Una vez hecho esto, se ha creado el SLA para cada servicio ofrecido por nuestra organización y el esquema que hemos usado es “PSG2-2324-G4-44-nombreservicio-ZZZ”, donde ZZZ es el plan de precios concreto en el que se utilizará. Los SLTs creados anteriormente se han asociado a este SLA.

Dificultades: a la hora de crear los SLA y SLTs no hemos tenido ninguna dificultad solo había que tener claro cual de los planes habia que incorporar y rellenar todos los datos para que luego poder sacar las métricas de penalización correctamente. Ha sido una configuración un poco tediosa pero no complicada.

<p align="center">
    <img src="../images/listaSla.png" alt="Creacion del SLA y asociacion con SLTs" style="width: 50%; margin: auto;">
</p>


<p align="center">
    <img src="../images/listaSlt.png" alt="Creacion del SLTs y asociacion con SLA" style="width: 50%; margin: auto;">
</p>

### **3.3 Contrato de los servicios ofrecidos**
Como organización hemos creado un contrato de consumidor (Consumer Contract) con al menos una organización cliente por cada uno de los planes ofrecidos por la aplicación Petclinic. 

El contrato consta de una organización que corresponde al cliente y un proveedor del servicio que en este caso es nuestra organización. Además en el contrato se le asociara el servicio junto con su SLA correspondiente. 

Finalmente, hemos definido un Delivery Model, con el nombre de la organización, vinculados a todos los contactos de la organización además del equipo creado nuevamente y asociado con la organización del cliente correspondiente.

Dificultades: siguiendo todos los pasos del archivo de configuración no habiá ninguna dificultad a la hora de crear los contratos ni el Delivery Model, lo que este paso ha sido sencillo.

<p align="center">
    <img src="../images/servicioContract.png" alt="Creacion de contrato " style="width: 50%; margin: auto;">
</p>

---

## **4. Peticiones de usuario e incidentes (Configuración y dificultades)**

Una vez realizado las configuraciones necesarias, la siguiente imagen muestra el portal del usuario disponible a traves del cual podrá realizar las peticiones de usuario e incidencias. En la imagen se puede apreciar como quedaría el portal del cliente logueado, a traves de la cual puede registrar las peticiones e incidencias. 

Dificultades: A la hora de registrar los servicios había que rellenar todos los datos, ya que sino luego no aparecian en el portal de usuario. Como no se especificaba nada en el archivo de configuración en un principio dejamos sin rellenar el estado y esta fue la causa por lo que no podiamos visualizar el servicio, lo pusimos como "implement" y resolvimos el problema.

<p align="center">
    <img src="../images/portalUsuario.png" alt="Portal de usuario" style="width: 50%; margin: auto;">
</p>

Como se puede observar el cliente cuando va a realizar una  petición puede elegir entre el listado de servicios proporcionado por nuestra organización.

<p align="center">
    <img src="../images/portalCliente.png" alt="Listado de todos los servicios disponibles" style="width: 50%; margin: auto;">
</p>

Este debe de rellenar el formulario detalladamente con los datos de la petición.

<p align="center">
    <img src="../images/formularioCliente.png" alt="Formulario de peticion" style="width: 50%; margin: auto;">
</p>
---

## **5. Mejoras en Itop**

Aunque con lo que nos piden realizar en este apartado no ha dado tiempo ha explorar todo las funcionalidades de la herramienta, si que es verdad que la configuración para un usuario nuevo puede llegar a ser compleja.

Otro de los aspectos a mejorar es la interfaz de usuario, aunque pueda ser funcional, puede no ser tan intuitiva afectando a la eficiencia del trabajo. Por ejemplo: cuando vas clickenado en las pestañas se van creando en la parte superior unos filtrados que el retroceso hacia atrás se hace muy complicado, en muchas ocasiones se me ha salido de la vista teniendo que volver a encontrar el apartado y meter los datos desde cero, porque no se queda guardado como borrador. 

Cuando metimos todos los SLTs, exactamente 12 por cada SLA iTop no proporcionaba ninguna forma de poder copiar los que estan ya hechos y poder editarlos, esto hubiese facilitado mucho el trabajo ya que la mayoria eran iguales, teniendo que editar solo un parametro.

El formulario de petición de usuario e incidencias es bastante limitado, debería poder tener más opciones de prioridad a la hora de registrar una petición, y el usuario podría disponer de unas capacidades más avanzadas como un seguimiento real del estado de la petición.

---

## **6. Tareas realizadas por cada miembro**

Cuando realizamos la reunión de planificación esta tarea se le asigno a un desarrolladora en concreto, por lo que todas las tareas han sido realizadas por la misma. Como otros miembros del grupo tenian que hacer uso de iTop para realizar sus tareas como crear las peticiones de los clientes y luegos implementarlas en nuestro código, además de sacar las métricas TTO Y TTR de las peticiones creadas por los clientes, la desarrolladora encadargada de la configuración inicial de iTop creo una reunión con los compañeros que debian realizar esas tareas y le explico el funcionamiento del mismo.



---

## **7. Conclusiones**

El trabajo realizado durante este Sprint ha sido crucial para fortalecer la capacidad de iTop para soportar la gestión de incidentes y solicitudes de los servicios de Petclinic. Desde la configuración de contratos y servicios hasta la definición de SLAs, SLTs y modelos de entrega, cada aspecto ha sido cuidadosamente abordado para garantizar una gestión de servicios efectiva y eficiente, que cumpla con las expectativas y necesidades tanto de la empresa como de sus clientes. Finalmente, mencionar que no se ha encontrado ninguna dificultad a la hora de realizar la configuración en iTop y se ha podido crear el portal de peticiones del cliente de manera satisfactoria.

---
