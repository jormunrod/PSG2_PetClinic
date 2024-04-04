# **Planificación del Sprint 2.**

<p align="center">
    <img src="../images/logoUs.png" alt="Logo Universidad Sevilla" style="width: 50%; margin: auto;">
</p>

---

## Índice

1. [Introducción](#1-introducción)
2. [Tareas Extras](#2-tareas-extras)
    - [2.1 Tarea E2.1](#21-tarea-E2.1)
        -  [2.1.1 Parte 1: Análisis de las diferentes resultados de las métricas y análisis entre S1 y S2 del punto A2.4](#211-parte-1:-análisis-de-las-diferentes-resultados-de-las-métricas-y-análisis-entre-s1-y-s2-del-punto-a2-4)
            - [2.1.1.1 Gráfico Burn Down](#2111-gráfico-burn-down)
            - [2.1.1.2 Gráfico Lead Time](#2112-gráfico-lead-time)
            - [2.1.1.3 Gráfico Cycle Time](#2113-gráfico-cycle-time)
            - [2.1.1.4 Total De Puntos De Historia Entregados](#2114-total-de-puntos-de-historia-entregados)
            - [2.1.1.5 Porcentaje De Puntos De Historia Entregados](#2115-porcentaje-de-puntos-de-historia-entregados)
        -  [2.1.2 Parte 2: Análisis de las diferentes resultados de las métricas entre S1 y S2 del punto A2.5](#212-parte-2:-análisis-de-las-diferentes-resultados-de-las-métricas-entre-s1-y-s2-del-punto-a2-5)
    - [2.2 Tarea E2.2](#22-tarea-e2.2)
    - [2.3 Tarea E2.3](#23-tarea-e2.3)


## **1. Introducción**
Este documento recopila toda la información pertinente sobre las preguntas adicionales del sprint 2, así como el contenido necesario para llevarlas a cabo.

---

### **2.Tareas Extras** 
### **2.1 Tarea E2.1** 

Esta tarea es una extensión de las tares A2.4 y A2.5, en la cual hemos dividido en dos partes, ya que cada uno englobara una comparativa de los resultados obtenidos en los analisis de diferentes partes del código.
En ambas partes se encontrarán una valoración y discusión sobre los métricas obtenidas durante el análisis.


#### **2.1.1 Parte 1: Análisis de las diferentes resultados de las métricas y análisis entre S1 y S2 del punto A2.4** 
##### **2.1.1.1 Gráfico Burn Down**
En ambos gráficos se puede ver que el equipo estuvo trabajando durante todo el sprint, sin embargo, en el sprint 1 se puede apreciar que el equipo apuró demasiado el último día del sprint para acabar muchas tareas, cosa que no es tan notoria en el final del sprint 2. Esta diferencia es más visual en parte a la variación de la estimación de las tareas y a la cantidad de puntos de historia entre los sprints.

También se puede ver como el equipo mantuvo un ritmo de trabajo más constante en el sprint 1 ya que se ven más tareas resueltas, mientras que en el sprint 2 hay menos escalones pero estos son más grandes. Esto nos indica que:
- En el sprint 1 hubo un mayor número de tareas que correspondían a tareas con una estimación de puntos de historia muy bajo.
- En el sprint 2 hubo un mayor número de tareas que correspondían a tareas con una estimación de puntos de historia muy alto.

##### **2.1.1.2 Gráfico Lead Time**
La mayor diferencia que nos proporciona este gráfico es que las tareas, durante el sprint 2, estuvieron poco menos del triple de tiempo en espera a ser resueltas, ya que en el sprint 1, de media se tardaron casi 9 días en completar la tarea desde que fue descrita, mientras que en el sprint 2, se tardó de media unos 25 días. Esto nos indica que el equipo tardó mucho en ponerse a trabajar. Esto en parte se debió a que ciertas tareas eran dependientes de otras y hasta que no estuvieran finalizadas, las otras no podían ser completadas y por ello hay mayor retraso.

##### **2.1.1.3 Gráfico Cycle Time**
En este caso, pasa lo mismo que en el apartado anterior. Las tareas del sprint 2 fueron estimadas con un mayor número de puntos de historia por lo que se podría entender que el equipo tardase más tiempo en desarrollar y completar las distintas tareas. Por esto mismo, se puede apreciar que el tiempo medio que empleó el equipo en completar una tarea durante el sprint 1 fue de 2 días, mientras que en el sprint 2 fue de 10.

Este sería un aspecto a mejorar ya que, pese a que algunas tareas realmente necesitaron este tiempo para ser completadas, es un periodo bastante largo para que sea la media de compleción de las tareas.

##### **2.1.1.4 Total De Puntos De Historia Entregados**
Gracias al trabajo colaborativo del equipo, se pudo lograr el objetivo propuesto por este tanto para el sprint 1 como para el 2. Por ello, en ambos se completaron todos los puntos de historia, 81 y 224 respectivamente.

##### **2.1.1.5 Porcentaje De Puntos De Historia Entregados**
Como ya se mencionó en el apartado anterior, todas las tareas fueron completadas y todos los puntos de historia fueron entregados, tanto de las tareas obligatorias como las extras. Por ello, se considera que el equipo entregó el 100% de puntos de historia tanto en el sprint 1 como en el 2.


#### **2.1.2 Parte 2: Análisis de las diferentes resultados de las métricas entre S1 y S2 del punto A2.5** 
  
Después de completar las nuevas funcionalidades del Sprint 2, llevamos a cabo otra revisión del código para realizar una evaluación exhaustiva de las diferentes métricas.

Ahora que hemos finalizado ambos análisis, procederemos a comparar los resultados obtenidos para poder evaluar la calidad y el estado de nuestro código.

Esta comparativa la haremos primero de la parte del backend y luego del frontend y la iremos comentando por métricas para que queda más claro.

- Comparativa Backend

    El primer análisis identificó 4 bugs, mientras que el segundo análisis mostró 7 bugs. Esto indica un aumento en la cantidad de errores potenciales en el código entre los dos análisis.
Es importante abordar estos bugs para mejorar la calidad y estabilidad del sistema, ya que los errores pueden causar comportamientos incorrectos o inesperados en el software.

    Ambos análisis mostraron 0 vulnerabilidades, lo que es positivo ya que indica que no se encontraron debilidades de seguridad conocidas en el código. Sin embargo, es importante continuar monitoreando y probando la seguridad del sistema para prevenir posibles vulnerabilidades en el futuro.

    En ambos análisis se identificó 1 security hotspotpor lo que hay áreas del código que podrían ser potencialmente vulnerables. Aunque no necesariamente indica la presencia de vulnerabilidades activas, es importante investigar y abordar estas áreas para mitigar posibles riesgos de seguridad.

    La deuda técnica se redujo ligeramente en el segundo análisis, pasando de 4h40min a 4h31min. Aunque esto denota un progreso en la solución de problemas técnicos identificados en el código entre los dos análisis, es importante seguir trabajando para reducir la deuda técnica y mejorar la calidad del código a largo plazo.

    El segundo análisis mostró un aumento en la cantidad de code smells, pasando de 203 a 214. Por lo que podemos notar que debido al aumento de funcionalidades han surgido más áreas en el código que contienen malos olores, estas podrían beneficiarse de una refactorización para mejorar su calidad y mantenibilidad.
Es importante abordar estos code smells para mantener un código limpio, fácil de entender y mantener en el futuro.

    La cobertura de código disminuyó ligeramente en el segundo análisis, pasando de 80% a 73.6%. Esto puede ser debido a que se añadió un nuevo código sin pruebas unitarias o que algunas pruebas unitarias existentes fueron eliminadas. Esto se ha podido ver afectado debido a que las dos grandes funcionalidades que se debía implementar en este Sprint, solo se le han realizados pruebas a una de ellas. Mantener una alta cobertura de código es crucial para garantizar la confiabilidad y calidad del software, por lo que es importante mantener un enfoque en la escritura y mantenimiento de pruebas unitarias.
Test Unitarios:

    El segundo análisis mostró un aumento en la cantidad de pruebas unitarias, pasando de 242 a 256. Esto indica un esfuerzo continuo en la escritura de pruebas para validar el comportamiento del código.
La escritura de pruebas unitarias es esencial para garantizar la calidad y confiabilidad del software, por lo que es alentador ver un aumento en la cantidad de pruebas unitarias entre los dos análisis.

    Ambos análisis mostraron un 0% de duplicaciones, lo que significa que no se encontraron secciones de código idénticas o muy similares en ninguno de los casos.
Esto es beneficioso para mantener un código limpio y fácil de mantener, ya que reduce la redundancia y mejora la claridad del código.

    En conclusión, mientras que el segundo análisis mostró un aumento en la cantidad de bugs y code smells, también mostró una reducción en la deuda técnica y un aumento en la cantidad de pruebas unitarias. Es importante continuar monitoreando y mejorando la calidad del código para garantizar la confiabilidad y estabilidad del sistema a largo plazo.

- Comparativa Frontend

  En el primer análisis se identificaron 4 bugs, mientras que en el segundo análisis se encontraron 3 bugs. Notando una leve mejora en la calidad del código en términos de errores potenciales entre los dos análisis.

    En ambos análisis se detectaron 0 vulnerabilidades, lo que indica que el código no tiene puntos débiles conocidos que puedan ser explotados por atacantes. Esto es positivo en términos de seguridad.

    Ambos análisis mostraron 1 security hotspot, lo que indica que hay áreas identificadas como potencialmente vulnerables en el código. Aunque no necesariamente representan vulnerabilidades activas, es importante prestar atención a estas áreas para evitar posibles riesgos de seguridad.

    La deuda técnica aumentó ligeramente en el segundo análisis, pasando de 3 días y 1 hora a 3 días y 5 horas. Esto ha podido ser causa de que se hayan identificado más problemas técnicos que requieren atención en el código.

    El segundo análisis mostró un aumento significativo en la cantidad de code smells en comparación con el primero. Pasó de 152 a 190 code smells, lo que indica que se identificaron más áreas en el código que podrían beneficiarse de una refactorización para mejorar su calidad y mantenibilidad.

    En ambos análisis se encontró un 0% de cobertura de código, es decir, que no hay pruebas unitarias que cubran el código. Esto deja al sistema vulnerable a errores no detectados y resalta la necesidad de implementar pruebas unitarias adecuadas.

    Ambos análisis mostraron un porcentaje de duplicaciones y cantidad de bloques duplicados. Esto indica que una parte significativa del código se ha duplicado, lo que puede llevar a problemas de mantenimiento y dificultar la comprensión del código. Es importante abordar estas áreas para eliminar la duplicación y mejorar la mantenibilidad del código.

    En conclusión, aunque hubo una ligera mejora en la cantidad de bugs y debt (deuda técnica) en el segundo análisis, también hubo un aumento significativo en la cantidad de code smells y una falta de cobertura de código. Esto destaca la importancia de continuar mejorando la calidad del código y prestando atención a áreas críticas como la seguridad y la cobertura de pruebas.

---
### **2.2 Tarea E2.2**
Para realizar esta actividad ha habido un pequeño cambio. Github actions ha metido el frontend en el mismo proyecto del backend, provocando que el análisis cambie completamente. Debido a este motivo, el punto desde el que partimos es: 

---
![image](https://github.com/gii-is-psg2/psg2-2324-g4-44/assets/119755491/a3dba42c-43a4-450d-870e-556e439963ff)
---

La bajada del coverage es por la gran cantidad de líneas de codigo que contiene el frontend, así como el incremento de bugs y bad smells.  
  
Tras un rato solucionando y trabajando para reducir los bugs y la deuda técnica, el resultado obtenido es el siguiente:

---
![image](https://github.com/gii-is-psg2/psg2-2324-g4-44/assets/119755491/90b6237d-3682-4ccb-a68d-25165b041269)
---  

Como se observa, se han reducido numerosos bugs, algunos bad smells y un día de deuda técnica. Esto se ha conseguido corrigiendo y siguiendo las recomendaciones de sonaqube.
(Aunque ponga que hay una revisión en proceso, es porque hemos hecho un commit de documentación, por lo que no hay código y los parámetros no van a variar)

---


### **2.3 Tarea E2.3**

Para automatizar el análisis de código y cargar los resultados en SonarQube, implementamos un flujo de trabajo de GitHub Actions llamado "SonarQube Upload". Este flujo se activa después de cada push a la rama "develop" del repositorio. 

El flujo de trabajo se ejecuta en un entorno de ubuntu y consta de los siguientes pasos:

1. **Configuración del entorno JDK:** Utilizamos el setup de Java para instalar la versión 17 del JDK.
   
2. **Compilación del proyecto con Maven:** Utilizamos Maven para compilar el proyecto Java utilizando el archivo "pom.xml".

3. **Análisis de código con SonarQube:** Utilizamos la acción `SonarSource/sonarqube-scan-action` para ejecutar el análisis de código. Esta acción se configura con el host de SonarQube y el token de autenticación proporcionados como secretos en el repositorio. También se especifica la clave del proyecto en SonarQube y la ruta de los archivos binarios Java a analizar.

Esta configuración automatizada garantiza que cada push a la rama "develop" active el análisis de código en SonarQube, proporcionando una evaluación continua y sistemática de la calidad del código.  
Su correcto funcionamiento puede observarse: 
![image](https://github.com/gii-is-psg2/psg2-2324-g4-44/assets/119755491/40049cb0-635c-4828-9e1c-383a04b692f1)


