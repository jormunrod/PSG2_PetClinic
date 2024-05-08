![[logoUs.png|50%]]

___
# Índice
1. [[#Introducción]]
2. [[#Total Cost of Ownership]]
3. [[#Capacidad del Servicio]]
4. [[#Riesgos de operación y mantenimiento del servicio]]
___

# Introducción

Análisis exhaustivo de la capacidad y el riesgo asociados con los servicios ofrecidos por PetClinic. Abordaremos tres aspectos fundamentales: la estimación del Costo Total de Propiedad (TCO) del servicio, el análisis de su capacidad, y la evaluación de los riesgos de operación y mantenimiento. Es crucial comprender la capacidad del servicio para satisfacer las necesidades de los usuarios, así como identificar y mitigar los riesgos potenciales que puedan afectar su funcionamiento. Realizaremos una estimación detallada del TCO del servicio, considerando diversos factores como la duración del servicio, la capacidad de usuarios y el promedio de incidentes mensuales. Esto permitirá una evaluación precisa de los costos operativos y de capital asociados con la utilización de PetClinic durante un período de 24 meses. Posteriormente, se llevará a cabo un análisis de la capacidad extendida del servicio de PetClinic, centrándose en la cantidad máxima de solicitudes admitidas, el costo mínimo para respaldar una cantidad específica de solicitudes y el tiempo mínimo para atenderlas. Este análisis permitirá identificar posibles amenazas y establecer estrategias de mitigación para garantizar la continuidad y fiabilidad del servicio. Este informe tratará de proporcionar una comprensión de la capacidad y el riesgo asociados con PetClinic, ofreciendo datos para la toma de decisiones informadas y la gestión efectiva de recursos.
___
# Total Cost of Ownership 

Teniendo en cuenta varias suposiciones vamos a desglosar el supuesto TCO en los diferentes tipos de costes:
- Costes de adquisición:
	- Servidores: 20.000€
	- Equipo de red: 5.000€
	- Almacenamiento: 20.000€
	- Costes de instalación: 5.000€
	- Licencias de uso: 2.000€
	- Total: 52.000€
- Costes operacionales:
	- Consumo de energía anual: 8.000€
	- Enfriamiento del equipo anual: 2.000€
	- Mantenimiento anual: 5.000€
	- Fondo para reparaciones anual: 5.000€
	- Subscripciones a software anual: 4.000€
	- Contratos de soporte anual: 5.000€
	- Total: 29.000€/año
- Costes de personal:
	- Salarios operarios: 1.800€/persona y mes
	- Salarios personal de mantenimiento: 1.500€/persona y mes
	- Salarios personal para manejo del sistema: 2.000€/person y mes 
	- Fondos para entrenamiento de nuevo personal:  4.000€/año
	- Beneficios: 3.000€/mes
	- Otros gastos: 5.000€/año
- Costes de mejora o reemplazo:
	- Fondos para mejora o remplazo de hardware: 10.000€/año
	- Fondos para mejora o remplazo de software: 4.000€/año
	- Total:14.000€/año
- Costes de retiro: 7000€/año

En total para un periodo de 24 meses el supuesto TCO sería la suma de lo siguiente, suponiendo que tengamos 4 operarios, 5 en mantenimiento y 5 en manejo de sistemas. Todo estos precios es más o menos un supuesto, para mantener a un total de 18 mil usuarios, 8 mil usuarios con peticiones a APIs de grado superior. Los salarios están tenidos en cuenta de que el máximo salario tras 2 variaciones de un 3% de aumento anual del salario, es decir nos ponemos en el caso más costoso.

- Costes de equipamiento: $52.000*2=104.000$
- Costes operacionales: $29.000*2=58.000$
- Costes de personal: $(4.000+5.000)*2+3000*24+(1.800*8+1.500*10+2.000*10)*24=717.800$
- Costes de mejora o remplazo: $14.000*2=28.000$ 
-  Costes de retiro:  $7.000*2=14.000$
Con lo que el supuesto TCO final sería $104.000+58.000+717.800+28.000+14.000=921.800$€. Con un CapEX de $775.800$€ y un OpEX de $146.000$€.
___
# Capacidad del Servicio

Para la capacidad del servicio tenemos en cuenta, el uso principal de 2 APIs. "ninja-api/animal" la cual acepta un máximo de 10.000 peticiones al mes en plan básico, y "openweatherapi" soporta 60 peticiones por minuto en el plan básico.

Al haber 18.000 usuarios y queremos que ver el tiempo sea algo que todos los usuarios puedan hacer, elegiremos para "openweatherapi" 2 subscripciones al professional plan de Current weather and forecasts, que nos ofrece 60.000 llamadas por minuto por un total de 820€/mes.

Para la API de los animales, queremos que como existen 10.000 usuarios con un plan básico y un máximo de 2.000 animales, queremos que se cubra el derecho de buscar sus animales es decir 20.000 animales, por lo que elegiremos 2 subscripciones para el plan básico que ofrece 20.000 llamadas al mes. Así los usuarios tendrán un máximo de 1 llamada a la API por animal que posean.

El resto de usuarios 5.000 con plan gold y 3.000 con plan platino, tendrán 15.000 y 36.000 mascotas, es decir 41.000 mascotas, como queremos que haya al menos 1 petición por mascota en este caso elegiremos la opción de mantener una subscripción "learner" la cual permite 200.000 llamadas a la API al mes con un coste de 15€/mes.

En total se nos añade un coste de OpEX de 835€/mes, pero con esto cubrimos todas las capacidades del servicio.

# Riesgos de operación y mantenimiento del servicio

A continuación identificaremos los posibles riesgos que podrían ocurrir en un periodo de 24 meses, y nos basaremos en la siguiente tabla de clasificación para definir si es un riesgo bajo, medio o alto.
![[Pasted image 20240508163916.png|100%]]
- El coste de personal incrementa más de lo esperado
	- Probabilidad: baja
	- Impacto: medio
	- Riesgo: bajo
- El personal se ve reducido considerablemente
	- Probabilidad: bajo
	- Impacto: alto
	- Riesgo: medio
- OpEx de las APIs externas incrementan su precio:
	- Probabilidad: baja
	- Impacto: bajo
	- Riesgo: bajo
- Número de clientes se ve reducido considerablemente
	- Probabilidad: baja
	- Impacto: alto
	- Riesgo: medio
- La carga de trabajo sigue un patrón inesperado:
	- Probabilidad: media
	- Impacto: medio
	- Riesgo: medio
- Los developers son contratados por otra compañía
	- Probabilidad: media
	- Impacto: alto
	- Riesgo: alto

A continuación explicaremos el plan de prevención para los riesgos medio y alto, ya que los bajos con una buena organización y hablando con el equipo creemos que se podrían solucionar en un momento de crisis.
- El personal se ve reducido considerablemente:
	- Solución: Contactar con una empresa externa en casos de emergencia que sea capaz de mantener el funcionamiento del servicio.
- Número de clientes se ve reducido considerablemente:
	- Solución: Mandar promociones de servicio a los clientes que quieran anular la subscripción al servicio, reduciendo en un 10% la cuota mensual.
- La carga de trabajo sigue un patrón inesperado:
	- Solución: Reuniones diarias entre el personal indicando con todo detalle, la carga de trabajo, el tiempo estimado y si creen que van a tener algún inconveniente.
- Los developers son contratados por otra compañía
	- Solución: Contactar con una empresa externa en casos de emergencia que sea capaz de mantener el funcionamiento del servicio.

Creemos que con esta prácticas y soluciones en caso de emergencia se podrían evitar situaciones de riesgo medio y alto, que serían críticas en el funcionamiento y desarrollo de la empresa.

