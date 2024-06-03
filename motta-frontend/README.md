# Proyecto creado con Create React App y manejado con yarn

Al bajar el repositorio es necesario correrdesde la carpeta motta-frontend:

### `yarn install`

Después para correr el proyecto hay que utilizar

### `yarn start`

Para hacer los testings hay que utilizar

### `yarn test`

El proyecto trata sobre consumir una lista de empleados, mostrar una Lista de sus datos en pantalla, y ofrecer al usuario las acciones de agregar, editar y eliminar, además de un Formulario para dicha Creación/Edición.

Se utilizaron de librerías adicionales:
-react router dom para la navegación
-antd como design system para el UI
-day.js para parsear las fechas del input de fechas de antd

App.js
La idea principal de la implementación y considerando el tamaño de la App es manejar los estados a utilizar (lista de usuarios, usuario actual y es nuevo usuario) y pasarlos a los distintos componentes mediante un Context de React, en el directorio base `/` se muestra el componente List.js (la lista de usuarios), en el directorio `/form` se encuentra el Componente Form.js (el formulario de creación/edición)

List.js
Se toma la lista de empleados dentro del Context y se muestra al usuario con los detalles de cada entrada y las acciones a realizar, Editar guarda en el estado al usuario actual y la bandera de que no es nuevo usuario y redirige a Form.js, Borrar manda llamar al API de borrado con los datos del usuario actual. En el tope de la pantalla junto al letrero Empleados se muestra el botón para agregar nuevo usuario, dicho botón guarda el flag de nuevo usuario, resetea el usuario seleccionado y redirige a la pantalla Form.js

Form.js
Formulario para agregar o editar nuevo usuario, contiene los campos: Nombre, Apellido, Fecha de Nacimiento, Puesto, Sueldo, todos obligatorios; los campos de texto tienen límite de 255 caracteres. Esto se logra tomando el usuario seleccionado y el flag es Nuevo del Context, si es un nuevo cliente se muestra el letrero correspondiente, los valores default del Form de antd se copian del usuario seleccionado, el formulario toma los Componentes de input (texto, fecha o número) dentro de los componentes AntdForm.Item, toma la propiedad name del Componente, los liga al formulario y al momento de dar click a la opción de Guardar, manda llamar a las funciones pertinentes dependiendo de si el formulario está llenado correctamente o no, mandándole a dichas funciones un objeto con los datos del formulario como parámetro
