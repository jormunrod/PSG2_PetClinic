# **Informe técnico que describe la metodología de gestión de configuración.**  

<div style="text-align:center;">
    <img src="https://www.ucm.es/al-acmes/file/logo-universidad-sevilla/?ver" alt="Logo Universidad Sevilla" style="width: 50%;">
</div>

---

## Índice

1. [Coding Standards](#1-coding-standards)
2. [Commits Message Policies](#2-commits-message-policies)
3. [Structure Of Repositories And Default Branches](#3-structure-of-repositories-and-default-branches)
4. [Branching Strategy](#4-branching-strategy)
    - [4.1 How To Develop Feature Branches](#41-how-to-develop-feature-branches)
    - [4.2 How To Prepare Releases](#42-how-to-prepare-releases)
    - [4.3 How To Fix Bugs In Production](#43-how-to-fix-bugs-in-production)
5. [Versioning Policies](#5-versioning-policies)
6. [Definition Of “Done”](#6-definition-of-done)
7. [How The Documents Generated During The Project Will Be Managed](#7-how-the-documents-generated-during-the-project-will-be-managed)

---

## **1. Coding Standars.**  

1. **Nomenclatura de Clases**: Deben comenzar con una letra mayúscula y usar camelCase. _**Ejemplo: MiClase**_
2. **Nomenclatura de Variables**: Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miVariable**_
3. **Nomenclatura de Métodos**: Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miMetodo()**_
4. **Nomenclatura de Constantes**: Deben estar en mayúsculas y usar guiones bajos para separar las palabras. _**Ejemplo: MI_CONSTANTE**_
5. **Nomenclatura de Documentos**: Deben comenzar con una letra mayúscula y usar camelCase con extensión .md. _**Ejemplo: MiDocumento.md**_
6. **Indentación**: Será de una tabulación.
7. **Longitud de Línea**: Se recomienda que las líneas de código no superen los 80 caracteres de longitud para mejorar la legibilidad.
8. **Comentarios**: Se deben incluir comentarios descriptivos en el código para explicar su funcionamiento, especialmente en partes complejas o críticas. Los comentarios deben estar en inglés y seguir un estilo claro y conciso.
9. **Importaciones**: Se deben evitar las importaciones de paquetes completos y solo importar las clases específicas necesarias. Además, las importaciones deben agruparse y ordenarse de manera lógica.
10. **Formato de Archivos**: Los archivos Java deben tener una estructura clara y consistente, con una declaración de paquete, seguida de importaciones y luego la definición de clases y métodos.


---

## **2. Commits Message Policies.**  
Serán estructurados de la siguiente manera:  
 
 >_**[Tipo]: Descripción en inglés**_  
 
**Tipos** :  
- **[feat]** : Indica que el commit está introduciendo una nueva característica o funcionalidad al proyecto. (Código)
- **[edit]** : Indica que se han realizado modificaciones o ediciones sin introducir nuevas características o funcionalidades. (Código)
- **[fix]** : Indica que se ha corregido un error o un problema específico en el código. (Código)
- **[wip]** : Indica que el trabajo está en curso ("Work In Progress") y aún no está completo. (Código)
- **[docs]** : Indica que los cambios realizados están relacionados con la documentación del proyecto. (Documentación)
- **[refactor]** : Indicar que se han realizado cambios en el código con el objetivo de mejorar su estructura, claridad, rendimiento o mantenibilidad sin modificar su comportamiento funcional externo. (Código)

---

## **3. Structure Of Repositories And Default Branches.**    
Cuando se crea un repositorio en GitHub.com, automáticamente se establece una rama predeterminada. Esta rama es la primera que se muestra cuando alguien visita el repositorio y es la rama inicial que Git verifica localmente al clonar el repositorio. 
Por defecto, GitHub nombra esta rama predeterminada como "main" en cualquier repositorio recién creado.  
Además, creamos una rama llamada "develop", que actuará como la rama principal para cada sprint. Esta rama se actualizará a medida que se completen y revisen los issues. La rama "main" permanecerá sin modificaciones hasta que se complete el sprint, momento en el que todo el contenido de la rama "develop" se fusionará en ella.

---

## **4. Branching Strategy**
### **4.1 How To Develop Feature Branches**
Para cada issue tendrá una rama propia y será implementada en su propia rama, así es fácil saber qué código implementa qué issue, con solo buscar el número de issue en las ramas. Las ramas seguirán el siguiente formato :  
  
>_Feature/<descripción del issue>/<número de issue>_  
  
Cuando el issue definido se haya implementado y revisado correctamente, se realizará un pull-request a la rama develop.

### **4.2 How To Prepare Releases**
Para cada release crearemos una rama propia. Las ramas seguirán el siguiente formato :  
  
>_Release/<versión del proyecto>_
  
La rama main se actualizará cada vez que se haga una release.

### **4.3 How To Fix Bugs In Production**
Para arreglar los bugs inesperados en medio de la producción, existirá una rama llamada hotfix. Hotfix es similar a la rama releases solo que será utilizada para resolver bugs críticos en una versión o errores no planeados en la producción.

---

## **5. Versioning Policies.**
Vamos a seguir el formato de versiones X.Y.Z. La primera versión será la 1.00. Cuando se lanza una versión mayor (major release), incrementaremos el número X de la versión y, si existen, pondremos a cero los números Y y Z. Para las versiones menores (minor release), mantendremos el número X, aumentaremos Y y resetearemos Z, que es la versión de parche (patch). Finalmente, cuando lanzamos una versión de parche (patch release), incrementamos Z.

---

## **6. Definition Of “Done”.**
Los criterios que seguiremos para considerar completada y lista para entregar una historia de usuario o una tarea son los siguientes:

- Se ha escrito y revisado el código correspondiente o la documentación por al menos un miembro del equipo.
- El código o documento cumple con los estándares de codificación establecidos.
- La tarea ha sido revisada y aprobada por el Product Owner o el cliente para asegurarse de que cumple con sus expectativas y requisitos.
- Se han corregido todos los defectos identificados durante las pruebas, y se ha verificado que las correcciones sean efectivas.
- El equipo está de acuerdo en que la tarea cumple con todos los criterios definidos y se considera completa y lista para ser entregada.

---

## **7. How The Documents Generated During The Project Will Be Managed.** 
Los documentos se crearán directamente en el editor de texto de GitHub en la rama `doc`, y se almacenarán en la carpeta del proyecto `/docs/sprintX`, donde "X" representa el número del sprint actual.

---
