Proyecto: E-commerce de Joyería (React, Firebase & MockAPI)

Descripción del Proyecto

Este proyecto es una aplicación web de e-commerce dedicada a la venta de joyas, con un sistema de carrito de compras completo y una interfaz de usuario dinámica y responsiva.
Características Principales
Interfaz Amigable: Construida con React, ofrece una navegación intuitiva y un diseño responsivo que se adapta a cualquier dispositivo.
Sistema de Carrito de Compras: Permite agregar, modificar y eliminar productos fácilmente.
Gestión de Usuarios con Firebase: Registro, inicio de sesión.
Catálogo de Productos Dinámico: Los productos se gestionan a través de MockAPI, ofreciendo flexibilidad para actualizar y expandir el inventario.
Sistema de Reseñas Integrado: Los usuarios pueden dejar comentarios sobre los productos, con datos almacenados y gestionados eficientemente.
Cotización de Metales Preciosos: Muestra el precio actualizado del gramo de oro y el valor del dólar, integrando APIs externas.

Creación del Proyecto

El proyecto ha sido completamente refactorizado utilizando React para la construcción de la interfaz de usuario, lo que permite un desarrollo modular y una experiencia de usuario más fluida. Para la gestión de datos, se han implementado:
MockAPI: Utilizado para el manejo de los productos del catálogo, facilitando la adición, edición y eliminación de ítems de joyería.
Firebase: Empleado para la autenticación de usuarios (registro, inicio de sesión) y para el almacenamiento de comentarios de los usuarios, proporcionando una solución backend.

Detalle de Funcionalidades

Página de Inicio

Presenta las colecciones más recientes y ofertas especiales.
Los productos se cargan dinámicamente desde MockAPI.
Ofrece la cotización del gramo de oro, obtenida de una API externa.
Los usuarios pueden dejar reseñas sobre los productos, almacenadas y recuperadas desde Firebase.
Gestión de Usuarios (Inicio de Sesión, Registro)
Autenticación con Firebase: Manejo de usuarios a través de Firebase Authentication para un registro e inicio de sesión seguros.
Al iniciar sesión, el estado del usuario se gestiona en React Context y se persiste en LocalStorage, permitiendo comprobaciones de sesión para funcionalidades como comentar o agregar productos al carrito.
La interfaz del Header se actualiza dinámicamente al iniciar sesión/cerrar sesión, mostrando el email del usuario y un botón de "cerrar sesión", además del contador del carrito. Al cerrar sesión, el Header vuelve a su estado original, un mensaje de despedida (utilizando SweetAlert2 para notificaciones atractivas) y se elimina el usuario y el carrito de compras del LocalStorage.
Catálogo de Productos
Muestra las joyas disponibles, con filtros por categoría.
Cada producto incluye imagen, nombre, precio y un botón "agregar al carrito".
Al hacer clic en las imágenes, se abre una nueva pantalla que ofrece una visión ampliada y una descripción detallada del producto.
El carrito de compras permite agregar, quitar productos, ver el monto total y concretar la adquisición.
Acceso directo al carrito desde la barra de navegación, con un contador de productos.
Espacio de Administración de Productos
Esta sección de la aplicación proporciona una interfaz dedicada para la gestión completa de los productos. Desde aquí, los usuarios con permisos de administrador pueden realizar las siguientes operaciones:
Agregar nuevos productos: Introducir detalles como nombre, descripción, precio, categoría y cualquier otra característica relevante.
Editar productos existentes: Modificar la información de cualquier producto ya cargado en el sistema.
Eliminar productos: Retirar productos de la lista cuando ya no sean necesarios.
La aplicación interactúa con la API de MockAPI para persistir estos cambios, asegurando que los datos de los productos se mantengan actualizados y sincronizados con el backend simulado.
Páginas Informativas y de Contacto
Páginas como "cuidado de las joyas", "medidor de anillos", "medios de pago", etc., ofrecen información estática relevante para el usuario.
La página de contacto incluye un formulario que se envía utilizando Formspree.
Integración de APIs y Persistencia de Datos
Las APIs para la cotización del dólar y el oro se cargan junto con la aplicación y se guardan en el LocalStorage para optimizar las llamadas.
Se ha implementado una lógica para actualizar las APIs una vez al día, basándose en la fecha de la última consulta almacenada en LocalStorage, para respetar los límites de consultas gratuitas de algunas APIs (como la del precio del oro).
Las APIs del dólar y el oro se integran como servicios en React, gestionando su estado y actualización de forma eficiente.

Acceso de Prueba
Usuario de Prueba: admin@admin.com
Contraseña de Prueba: 123456
