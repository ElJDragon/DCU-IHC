# Sistema de Pago de Servicios - Banco Pichincha

Prototipo visual de un sistema de pago de servicios de agua potable para el Banco Pichincha.

## ♿ Modos de Accesibilidad

Este proyecto incluye **dos modos de accesibilidad** para diferentes necesidades:

### 🎨 Modo Daltónico (Tritanopía)

Diseñado específicamente para personas con **Tritanopía** (deficiencia en la percepción de colores amarillo-azul).

**Cómo usar:**

1. Busca el botón **"🎨"** (icono de paleta) en el header
2. Haz clic para alternar entre:
   - **Modo Normal**: Colores originales del Banco Pichincha
   - **Modo Daltónico**: Paleta adaptada para Tritanopía

### 👴 Modo Accesible (Adultos Mayores)

Diseñado para **adultos mayores** con problemas de visión. Aumenta significativamente el tamaño de todos los elementos.

**Cómo usar:**

1. Busca el botón **"AA"** en el header
2. Haz clic para activar/desactivar:
   - **Modo Normal**: Tamaños estándar
   - **Modo Accesible**: Todo más grande y visible

**Mejoras en Modo Accesible:**
- ✅ Fuentes **mucho más grandes** (18-36px)
- ✅ Botones más grandes y fáciles de presionar (mín. 56px altura)
- ✅ Grid de **1 columna** (un elemento por fila en lugar de 3)
- ✅ Espaciado aumentado entre elementos
- ✅ Contraste mejorado
- ✅ Iconos y elementos visuales ampliados (52px)
- ✅ Formularios con campos más grandes
- ✅ Mayor altura de línea para mejor legibilidad

### Cambios de color en Modo Daltónico:

| Elemento | Color Normal | Color Daltónico |
|----------|--------------|-----------------|
| Color Principal (Amarillo) | #FFD100 | #FF6B9D (Rosa/Magenta) |
| Color Secundario (Azul) | #003d6a | #2D5F5D (Verde azulado) |
| Enlaces | #0066cc | #4A8886 |
| Éxito | #4caf50 | #7CB342 |
| Info (cajas) | Azul claro | Rosa claro |

### Persistencia:

- La preferencia se guarda en `localStorage`
- El modo seleccionado se mantiene al recargar la página
- Funciona en todas las páginas de la aplicación

## 🚀 Páginas incluidas:

1. **Login** - Banca Web
2. **Home** - Página principal con QR y productos
3. **Pago de Servicios** - Categorías y búsqueda
4. **Lista de Empresas** - Empresas de agua potable
5. **Formulario de Pago** - Ingreso de datos
6. **Confirmación** - Resumen del pago
7. **Verificación** - Confirmación final
8. **Pago Exitoso** - Comprobante

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
