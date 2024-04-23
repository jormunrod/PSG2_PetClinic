import ReactMarkdown from 'react-markdown';
import "../../static/css/clinicOwner/customerAgreement.css";

export default function CustomerAgreement() {
  const markdown = `

Bienvenido al Acuerdo de PetClinic Petclinic4ClinicOwner. 
Este documento establece los términos y condiciones bajo los cuales usted ("Cliente") 
podrá acceder y utilizar las ventajas proporcionadas por Petclinic4ClinicOwner. 

Es importante que lea detenidamente este Acuerdo, ya que regirá su relación con nosotros.
Con Petclinic4ClinicOwner, nos comprometemos a brindarle servicios de alta calidad y a 
garantizar su satisfacción como cliente. 

Este Acuerdo establece las responsabilidades y expectativas tanto del Cliente como de 
PetClinic, con el fin de asegurar una relación comercial transparente y mutuamente beneficiosa.

Lea atentamente cada sección de este Acuerdo para comprender completamente sus derechos y 
obligaciones. Si tiene alguna pregunta o inquietud sobre los términos aquí establecidos, 
no dude en ponerse en contacto con nuestro equipo de atención al cliente.
Agradecemos su confianza en PetClinic y esperamos poder brindarle una experiencia 
excepcional mientras utilizamos nuestros servicios.

---

## 1. Servicios Ofrecidos
El servicio adicional Petclinic4ClinicOwner está diseñado exclusivamente para los propietarios
de clínicas que utilizan PetClinic como su plataforma de gestión veterinaria. 
Este servicio ofrece una serie de funcionalidades adicionales que permiten a los propietarios 
de clínicas gestionar de manera más efectiva y eficiente las operaciones diarias de su establecimiento.

### Servicios Asociados

1.  Resolución de Incidentes: 

    Los propietarios de clínicas pueden utilizar esta función para informar y solicitar la resolución de 
    incidentes o problemas relacionados con la aplicación PetClinic. Esto puede incluir errores en el 
    sistema, problemas de rendimiento, o cualquier otro inconveniente que afecte la operatividad de la 
    clínica.

2.  Envío de Solicitudes de Usuario:

    Esta característica permite a los propietarios de clínicas enviar solicitudes de usuario para 
    gestionar el acceso y los permisos de los empleados que utilizan la aplicación PetClinic en la 
    clínica. Por ejemplo, pueden solicitar la creación de nuevas cuentas de usuario, la asignación 
    de roles específicos o la actualización de los privilegios de acceso.

3.	Solicitud de Estimaciones de Cambios (RFC):

    Los propietarios de clínicas pueden solicitar estimaciones de cambios (RFC) para futuras 
    actualizaciones o personalizaciones en la aplicación PetClinic. Esto les permite solicitar 
    nuevas funcionalidades, mejoras en el sistema o cualquier otro cambio que consideren necesario 
    para adaptarse mejor a las necesidades específicas de su clínica.

    Beneficios:

      -	Facilita la comunicación y colaboración entre los propietarios de clínicas y 
        el equipo de desarrollo de PetClinic.

      -	Permite una gestión más eficiente de incidentes y solicitudes de usuario, mejorando 
        la experiencia del cliente.

      -	Facilita la solicitud de cambios y mejoras en la aplicación, asegurando que PetClinic 
        se adapte continuamente a las necesidades cambiantes de las clínicas veterinarias.

4.	Precios y planes

    Ofrecemos tres planes de servicio adaptados a las distintas necesidades de nuestros 
    clientes: Básico, Oro y Platino.

    - Plan Básico: Este plan es ideal para aquellos propietarios de clínicas que buscan 
      una solución simple y económica. Con el Plan Básico, obtienes acceso a la plataforma 
      PetClinic sin un Acuerdo de Nivel de Servicio (SLA), lo que significa que recibirás 
      soporte durante el horario comercial. Además, podrás gestionar hasta 2 mascotas y 
      recibir hasta 2 visitas mensuales. Este plan es perfecto para clínicas con una clientela 
      más reducida que no requieren funcionalidades adicionales.

      Precio: Gratis.








Plan Oro: Nuestro plan intermedio, el Plan Oro, ofrece funcionalidades adicionales que hacen que la gestión de tu clínica sea aún más eficiente. Con un costo mensual de $5, recibirás un Acuerdo de Nivel de Servicio (SLA), garantizando asistencia técnica las 24 horas del día, los 7 días de la semana. Además, podrás disfrutar de características exclusivas como acceso al servicio de Pet Hotel, facilitando la gestión de alojamiento para mascotas, y la opción de realizar adopciones directamente desde la plataforma. Con un límite de hasta 5 mascotas y 5 visitas mensuales, el Plan Oro es perfecto para clínicas con un volumen de clientes moderado que buscan expandir sus servicios y mejorar la experiencia del cliente.
Precio: $5 al mes.

Plan Platino: Para aquellos propietarios de clínicas que buscan lo último en servicios y funcionalidades, nuestro Plan Platino es la elección ideal. Con un precio de $12 al mes, el Plan Platino ofrece todas las ventajas del Plan Oro, además de la posibilidad de realizar consultas en línea directamente desde la plataforma. Con una capacidad ilimitada de mascotas y visitas mensuales, este plan es perfecto para clínicas que desean ofrecer un servicio excepcional y personalizado a sus clientes, sin preocuparse por límites o restricciones.
Precio: $12 al mes.

Cualquiera que sea tu elección, en [Nombre de la Empresa] nos comprometemos a ofrecerte un servicio de calidad que se adapte a tus necesidades y te ayude a hacer crecer tu clínica veterinaria.
Plan	Básico	Oro	Platino
SLA	No	Sí	Sí
Funcionalidades adicionales	Ninguna	Pet Hotel, Adoptions	Consultas en línea
Máximo del mascotas	Hasta 2 mascotas	Hasta 5 mascotas 	Ilimitado
Visitas mensuales máximas	Hasta 2 mascotas	Hasta 5 mascotas	Ilimitado
Disponibilidad del servicio	Horario comercial	24/7	24/7




  `


  return (
    <div>
      <div className="customer-agreement-container">
        <h1 style={{ textAlign: "center" }}>Acuerdo de Cliente</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
