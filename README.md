# **Documentación proyecto PSG**  
## **1. Coding Standars.**  
**1. Nomenclatura Clases** : Deben comenzar con una letra mayúscula y usar camelCase. _**Ejemplo: MiClase**_  
**2. Nomenclatura Variables** : Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miVariable**_  
**3. Nomenclatura de métodos** : Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miMetodo()**_  
**4. Nombres de constantes** : Deben estar en mayúsculas y usar guiones bajos para separar las palabras. _**Ejemplo: MI_CONSTANTE**_  
**5. Indentación** : Será de una tabulación.  
**6. Comentarios** : Se deben incluir comentarios descriptivos en el código para explicar su funcionamiento, especialmente en partes complejas o críticas. Los comentarios deben estar en inglés y seguir un estilo claro y conciso.  
**7. Longitud de línea** : Se recomienda que las líneas de código no superen los 80 caracteres de longitud para mejorar la legibilidad.  
**8. Importaciones** : Se deben evitar las importaciones de paquetes completos y solo importar las clases específicas necesarias. Además, las importaciones deben agruparse y ordenarse de manera lógica.  
**9. Formato de archivos** : Los archivos Java deben tener una estructura clara y consistente, con una declaración de paquete, seguida de importaciones y luego la definición de clases y métodos.  
## **2. Commits Message Policies.**  
Serán estructurados de la siguiente manera:  
 
 >_**[Tipo]: Descripción en inglés**_  
 >  
**Tipos** :  
- **[feat]** : Cuando se añade algo nuevo o se modifica algo.
- **[fix]** : Cuando se soluciona algún error.
- **[wip]** : Cuando se añade algo que aún no está terminado (Work In Progress).
- **[docs]** : Cuando se añade alguna documentación.
- **[refactor]** : Cuando se refactoriza algún elemento.    

## **3. Structure Of Repositories And Default Branches.**    
Cuando creas un repositorio con contenido en GitHub.com, GitHub crea el repositorio con una sola rama. Esta primera rama en el repositorio es la rama predeterminada. La rama predeterminada es la rama que GitHub muestra cuando alguien visita tu repositorio. La rama predeterminada también es la rama inicial que Git verifica localmente cuando alguien clona el repositorio. A menos de que especifiques una rama diferente, la rama predeterminada en un repositorio será la rama base para las solicitudes de cambio nuevas y para las confirmaciones de código.
De manera predeterminada, GitHub asigna el nombre main a la rama predeterminada en cualquier repositorio nuevo. También crearemos un rama develop la cual se convertirá en la rama main de cada sprint, y se actualizará cuando issue este terminado y revisado. La rama main no sufrirá modificaciones hasta que se haya terminado el sprint, momento en el que se mergeará todo el contenido de la rama develop.

## **4. Branching Strategy.**  
### **4.1 How To Develop Feature Branches.**  
Para cada issue tendrá una rama propia y será implementada en su propia rama, así es fácil saber qué código implementa qué issue, con solo buscar el número de issue en las ramas.  
Las ramas seguirán el siguiente formato :  

>_**Feature/<descripción del issue>/<número de issue>**_
>

Cuando el issue definido se halla implementado y revisado correctamente, se hará pull-request a la rama develop.

### **4.2 How To Prepare Releases.**  
Para cada release crearemos una rama propia.  
Las ramas seguirán el siguiente formato :  
La rama develope se actualizará cada vez que se haga una release.

>_**Release/<versión del proyecto>**_
>

La rama main se actualizará cada vez que se haga una release.

### **4.3 How To Fix Bugs In Production.**  
Para arreglar los bugs inesperados en medio de la producción exisitirá una rama llamado hotfix. Hotifx es similar a la rama releases solo que será utilizada para resolver bugs críticos en una versión o errores no planeados en la producción.

## **5. Versioning Policies.**
Seguiremos el formato x.y.z de versiones, la versión inicial será la 1.00. Cuando una se realiza una mayor release, el número de versiones x se aumenta y si existiera y o z se pondría a 0. Cuando se realiza una minor release el número x se mantiene y el z que es la versión de patch se resetea. Y cuando se realiza una release de patch z aumenta.

## **6. Definition Of “Done”.**
Los criterios que vamos a seguir para que una historia de usuario o una tarea se considere completada y lista para entregar son los siguientes:
- El código correspondiente o documentación ha sido escrito y revisado por al menos un miembro del equipo.
- El código o documento cumple con los estándares de codificación establecidos y ha sido revisado.
- La tarea ha sido revisada y aprobada por el Product Owner o el cliente para asegurarse de que cumple con sus expectativas y requisitos.
- Se han corregido todos los defectos identificados durante las pruebas y se haverificado que las correciones sean efectivas.
- El equipo esta de acuerda en que la tarea cumple con todos los criterios definidos y se considera completa y lista para se entregada.

## **7. How The Documents Generated During The Project Will Be Managed.** 
Los documentos grupales generados están almacenados en una carpeta de dropbox a la cual todos los integrantes del equipo tienen acceso y pueden modificar cualquier documento en cualquier momento.  Una vez los documentos son revisados,se añadirán a una carpeta dentro del repositorio llamada docs en la cual se almacenaran todos los documentos.
