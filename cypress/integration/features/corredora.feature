Feature: Catalogo de Planes - Productos Marketing
 
  Como usuario quiero contratar un servicio de un Plan o Producto Marketing.

# @producto
#  Scenario: Ingresar al catologo de productos Markenting en la página Gestión Corredor y Contratar un servicio
#    Given El usuario se encuentra en la página de Gestión Corredor y Hace click sobre el Entrar
#      And Debe iniciar cuenta con credenciales de corredor valido
#      And Hace click sobre el link Producto
#      And Visualiza los productos y selecciona la tarjeta del producto a contratar
#    When Cuando el usuario Selecciona el producto a Contratar
#      And Se verifica los datos almacenado en cada formulario
#      And Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC
#      And Hace click al botón Enviar
#    Then Se debe redireccionar al Detalle del contrato y visualizar medio de pago disponibles  

 @planes
  Scenario: Ingresar al catalogo de planes en la página Gestion Corredor y Contratar un servicio
     Given Llamada a la API  
      And El usuario se encuentra en la página de Gestion Corredor
      And Hace click sobre el botón Ver Planes
      And Visualiza la información del plan seleccionado y hace click al botón Contratar
     When Registra el Usuario
      And Llena los formularios con los campos solicitados
      And Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC del Plan
      And Visualizar el Detalle del contrato del plan a contratar
     Then Visualizar el Detalle de Pago y medio disponible