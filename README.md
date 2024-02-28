# **Readme**

<p align="center">
    <img src="https://github.com/gii-is-psg2/psg2-2324-g4-44/assets/91954520/d134ec08-7993-4b37-b967-21cf4b8bca74" alt="Logo Universidad Sevilla" style="width: 50%; margin: auto;">
</p>


---

## Índice

1. [Normas de Codificación](#1-normas-de-codificación)
2. [Políticas de Mensajes de Commits](#2-políticas-de-mensajes-de-commits)
3. [Estrategia de Ramificación](#3-estrategia-de-ramificación)
    - [3.1 Cómo Desarrollar Ramas de Funcionalidades](#31-cómo-desarrollar-ramas-de-funcionalidades)
    - [3.2 Cómo Preparar Versiones](#32-cómo-preparar-versiones)
    - [3.3 Cómo Corregir Errores en Producción](#33-cómo-corregir-errores-en-producción)
4. [Políticas de Versionamiento](#4-políticas-de-versionamiento)
5. [Clockify](#5-clockify)
       
---

## **1. Normas de Codificación.**  

1. **Nomenclatura de Clases:** Deben comenzar con una letra mayúscula y usar camelCase. _**Ejemplo: MiClase**_
2. **Nomenclatura de Variables:** Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miVariable**_
3. **Nomenclatura de Métodos:** Deben comenzar con una letra minúscula y usar camelCase. _**Ejemplo: miMetodo()**_
4. **Nomenclatura de Constantes:** Deben estar en mayúsculas y usar guiones bajos para separar las palabras. _**Ejemplo: MI_CONSTANTE**_
5. **Nomenclatura de Documentos:** Deben comenzar con una letra mayúscula y usar camelCase con extensión .md. _**Ejemplo: MiDocumento.md**_
6. **Indentación:** Será de una tabulación.
7. **Longitud de Línea:** Se recomienda que las líneas de código no superen los 80 caracteres de longitud para mejorar la legibilidad.
8. **Comentarios:** Se deben incluir comentarios descriptivos en el código para explicar su funcionamiento, especialmente en partes complejas o críticas. Los comentarios deben estar en inglés y seguir un estilo claro y conciso.
9. **Importaciones:** Se deben evitar las importaciones de paquetes completos y solo importar las clases específicas necesarias. Además, las importaciones deben agruparse y ordenarse de manera lógica.
10. **Formato de Archivos:** Los archivos Java deben tener una estructura clara y consistente, con una declaración de paquete, seguida de importaciones y luego la definición de clases y métodos.


---

## **2. Políticas de Mensajes de Commits.**  
Los mensajes de commits seguirán la siguiente estructura:


 >_**[Tipo]: Descripción en inglés**_  
 
**Tipos** :  
- **[feat]** : Indica que el commit está introduciendo una nueva característica o funcionalidad al proyecto. (Código)
- **[edit]** : Indica que se han realizado modificaciones o ediciones sin introducir nuevas características o funcionalidades. (Código)
- **[fix]** : Indica que se ha corregido un error o un problema específico en el código. (Código)
- **[wip]** : Indica que el trabajo está en curso ("Work In Progress") y aún no está completo. (Código)
- **[docs]** : Indica que los cambios realizados están relacionados con la documentación del proyecto. (Documentación)
- **[refactor]** : Indica que se han realizado cambios en el código con el objetivo de mejorar su estructura, claridad, rendimiento o mantenibilidad sin modificar su comportamiento funcional externo. (Código)

---

## **3. Estrategia de Ramificación**
### **3.1 Cómo Desarrollar Ramas de Funcionalidades**
Para cada issue tendrá una rama propia y será implementada en su propia rama, así es fácil saber qué código implementa qué issue, con solo buscar el número de issue en las ramas. Las ramas seguirán el siguiente formato :  
  
>_Feature/<descripción del issue>/<número de issue>_  
  
Una vez que se haya implementado y revisado correctamente el issue definido, se realizará un pull-request a la rama develop.

### **3.2 Cómo Preparar Versiones**
Para cada release crearemos una rama propia. Las ramas seguirán el siguiente formato :  
  
>_Release/<versión del proyecto>_
  
La rama main se actualizará cada vez que se haga una release.

### **3.3 Cómo Corregir Errores en Producción**
Para arreglar los bugs inesperados en medio de la producción, existirá una rama llamada hotfix. Hotfix es similar a la rama releases solo que será utilizada para resolver bugs críticos en una versión o errores no planeados en la producción.

---

## **4. Políticas de Versionamiento.**
Vamos a seguir el formato de versiones X.Y.Z. La primera versión será la 1.00.  
Cuando se lanza una versión mayor (major release), incrementaremos el número `X` de la versión y, si existen, pondremos a cero los números `Y` y `Z`.  

>_Release/2.0.0_
>

Para las versiones menores (minor release), mantendremos el número `X`, aumentaremos `Y` y resetearemos `Z`, que es la versión de parche (patch). 

>_Release/2.1.0_
>

Finalmente, cuando lanzamos una versión de parche (patch release), incrementamos `Z`.

>_Release/2.1.1_
>  

---

## **5. Clockify.**  
Los mensajes de clockify seguirán la siguiente estructura:


 >_**[Tipo]: Descripción en inglés**_  
 
**Tipos** :  
- **[meet]** : Indica que ese tiempo se ha dedicado en una reunión.
- **[conflics]** : Indica que ese tiempo se ha dedicado arreglando conflictos.
- **[work]** : Indica que ese tiempo se ha dedicado trabajando en alguna tarea

---
