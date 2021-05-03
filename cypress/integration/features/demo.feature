@Demo
Feature: Demo

    Selecciona un Articulo

   @ejecutar
    Scenario: Seleccionar articulo #3
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #3
       Then Compra el Articulo #3

   @noejecutar
    Scenario: Seleccionar articulo #2
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #2
       Then Compra el Articulo #2

   @noejecutar
    Scenario: Seleccionar articulo #1
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #1
       Then Compra el Articulo #1

   @ejecutar
    Scenario: Seleccionar articulo #4
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #4
       Then Compra el Articulo #4

   @ejecutar
    Scenario: Seleccionar articulo #5
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #5
       Then Compra el Articulo #5
       
   @noejecutar
    Scenario: Seleccionar articulo #6
      Given Navega a la Pagina 
        And Ingresa credenciales valida
       When Selecciona el articulo #6
       Then Compra el Articulo #6   