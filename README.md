
# Visualizador de Base64

Este proyecto es una aplicación React que permite cargar y visualizar archivos codificados en Base64. Implementa funciones básicas para renderizar contenido PDF utilizando `react-pdf`, manejar rutas con `react-router-dom`.

## Características

- **Visualización de PDF**: Muestra archivos PDF decodificados a partir de una cadena en Base64.
- **Rutas**: Manejo de rutas simples con `react-router-dom`.
- **Desarrollado con Vite**: Proyecto configurado con Vite para una experiencia de desarrollo rápida.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes componentes:

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd visualizador
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts para el desarrollo y el despliegue de la aplicación:

- **`npm run dev`**: Inicia el servidor de desarrollo utilizando Vite.
- **`npm run build`**: Genera una versión optimizada para producción.
- **`npm run preview`**: Muestra una vista previa de la versión de producción generada.
- **`npm run lint`**: Ejecuta `eslint` para analizar y corregir el código.

## Uso

### Subida y Visualización de Base64

1. Al iniciar la aplicación, se te pedirá que subas un archivo codificado en Base64.
2. El archivo será decodificado y, si es un PDF, se mostrará utilizando el visor de PDF integrado (`react-pdf`).

### Estructura de la Aplicación

```bash
src/
│
├── components/
│   ├── FileUploader.js      # Componente para subir y decodificar archivos base64.
│   └── PDFViewer.js         # Componente para mostrar PDFs utilizando react-pdf.
│
├── pages/
│   └── Home.js              # Página principal con el cargador de archivos.
│
├── App.js                   # Punto de entrada de la aplicación.
└── main.js                  # Renderizado del árbol de React.
```

### Rutas

- **`/`**: Página de inicio donde puedes subir el archivo Base64.
- **`/pdf`**: Página donde se visualiza el archivo PDF decodificado.

### Ejemplo de Uso

A continuación se muestra un ejemplo de cómo se vería el proceso:

1. El usuario sube un archivo en Base64 a través de un input de archivo.
2. Si el archivo es un PDF válido, se muestra en el visor PDF.
3. Si ocurre un error (como subir un archivo no válido), se muestra una alerta usando `SweetAlert2`.

## Dependencias

### Producción

- **`react`**: Biblioteca principal de React.
- **`react-dom`**: Herramienta para manejar el DOM en React.
- **`react-router-dom`**: Para manejar la navegación entre las páginas.
- **`react-pdf`**: Permite mostrar archivos PDF en el navegador.

### Desarrollo

- **`eslint`**: Para mantener el código limpio y libre de errores.
- **`vite`**: Para el empaquetado y desarrollo rápido de la aplicación.

## Despliegue

1. Genera la aplicación optimizada para producción ejecutando:

   ```bash
   npm run build
   ```

2. El contenido listo para ser servido estará en la carpeta `dist`.

3. Para una vista previa de la aplicación generada, puedes usar:

   ```bash
   npm run preview
   ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas agregar nuevas funcionalidades o mejorar el código existente, sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y asegúrate de que el código siga las reglas de estilo configuradas con `eslint`.
4. Haz un pull request describiendo las mejoras.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
